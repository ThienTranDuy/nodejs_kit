const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const { TypeUser, StatusUser, Gender } = require("../constants/system.constant");
const { convertToId } = require("../utils/model.util");

const UserSchema = new Schema(
  {
    account: { type: String, trim: true, min: 4, max: 15, required: true },
    name: { type: String, trim: true, min: 4, max: 30 },
    email: {
      type: String,
      unique: true,
      trim: true,
      validate: validator.isEmail,
      required: true,
    },
    phone: { type: String, trim: true, length: 10, required: true },
    password: { type: String, trim: true, min: 6, required: true },
    nickname: { type: String, trim: true, min: 2, max: 30 },
    avatar: { type: String, trim: true },
    // Atribute
    type: { type: Number },
    status: { type: Number, enum: [StatusUser._InActive, StatusUser._Active] },
    gender: { type: Number, enum: [Gender._Male, Gender._Female] },
    exp: Number,
    level: Number,
    // Reference
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Roles" }],
    facebookDetail: {
      id: String,
      name: String,
      email: String,
      avatar: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
    },
  },
  { versionKey: false, timestamps: true }
);

UserSchema.method("convertToId", convertToId);

module.exports = userModel = mongoose.model("Users", UserSchema, "Users");
