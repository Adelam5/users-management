import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: "First name is required",
    maxLength: 15,
    match: [/^[a-zA-Z]+$/g, "First name may contain only letters"],
  },
  lastName: {
    type: String,
    trim: true,
    required: "Last name is required",
    maxLength: 20,
    match: [/^[a-zA-Z]+$/g, "Last name may contain only letters"],
  },
  username: {
    type: String,
    trim: true,
    required: "Username is required",
    maxLength: 15,
    match: [/^[\w ]+$/g, "Name may contain only letters and numbers"],
    immutable: true,
  },
  email: {
    type: String,
    trim: true,
    required: "Email is required",
    unique: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address!"],
  },
  status: {
    type: String,
    required: "Status is required",
  },
  permissions: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Permission",
    },
  ],
  hashed_password: {
    type: String,
    required: "Password is required",
  },
  salt: String,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
});

UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

UserSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      console.log(err);
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

UserSchema.path("hashed_password").validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters.");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required");
  }
}, null);

export default mongoose.model("User", UserSchema);
