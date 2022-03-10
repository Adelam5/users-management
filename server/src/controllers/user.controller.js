import User from "../models/user.model";
import _ from "lodash";
import errorHandler from "../helpers/dbErrorHandler";

const list = (req, res) => {
  const match = {};
  const sort = {};
  const skip = parseInt(req.query.skip) || 0;

  if (req.query.matchAttr) {
    match[req.query.matchAttr] = new RegExp(req.query.matchValue, "i");
  }

  if (req.query.desc === "true") {
    sort[req.query.orderAttr] = -1;
  } else {
    sort[req.query.orderAttr] = 1;
  }

  User.aggregate([
    {
      $facet: {
        users: [
          { $match: match },
          { $sort: sort },
          { $skip: skip },
          { $limit: 10 },
          { $unset: ["salt", "hashed_password", "__v"] },
          {
            $lookup: {
              from: "permissions",
              localField: "permissions",
              foreignField: "_id",
              as: "permissions",
            },
          },
        ],
        totalCount: [{ $match: match }, { $count: "count" }],
      },
    },
  ]).exec((err, users) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json(users);
  });
};

const create = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json({ message: "New user successfully created" });
  });
};

const userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.profile = user;
    next();
  });
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  res.status(200).json(req.profile);
};

const update = (req, res, next) => {
  let user = req.profile;
  user = _.extend(user, req.body);
  user.updated = Date.now();
  user.save((err) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json({ message: "User successfully updated" });
  });
};

const updateUsersPermissions = (req, res, next) => {
  let user = req.profile;
  user.permissions = req.body.user.permissions;
  user.updated = Date.now();
  user.save((err) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json({ message: "User permissions successfully updated" });
  });
};

const remove = (req, res, next) => {
  let user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.status(200).json(deletedUser);
  });
};

export default {
  list,
  create,
  userById,
  read,
  update,
  updateUsersPermissions,
  remove,
};
