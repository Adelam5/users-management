import Permission from "../models/permission.model";
import errorHandler from "../helpers/dbErrorHandler";

const list = (req, res, next) => {
  Permission.find((err, permissions) => {
    if (err) {
      return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
    }
    res.status(200).json(permissions);
  });
};
export default { list };
