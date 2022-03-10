import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema({
  code: {
    type: String,
    trim: true,
    required: "Permission code is required",
    maxLength: 15,
    match: [/^[\w ]+$/g, "Name may contain only letters and numbers"],
  },
  description: {
    type: String,
    trim: true,
    required: "Last name is required",
    maxLength: 20,
    match: [/^[\w ]+$/g, "Name may contain only letters and numbers"],
  },
});

export default mongoose.model("Permission", PermissionSchema);
