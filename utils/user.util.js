const bcrypt = require("bcryptjs");
const Token = require("../models/token.model");
const User = require("../models/user.model");

/**
 * hash new user's password
 * @param {*} plainText
 */
const hashPassword = (plainText) => {
  const salt = bcrypt.genSaltSync(10);
  const hashed = bcrypt.hashSync(plainText, salt);
  return hashed;
};

/**
 * Store token to DB
 * @param {} token
 */
const storeToken = async (token, userId, refreshToken = "") => {
  try {
    await Token.create({ token, userId, refreshToken });
  } catch (err) {
    throw new Error("Xin vui lòng thử lại");
  }
};

/**
 * destroy valid token
 */
const destroyToken = async (userId, token) => {
  let deleted = ""
  if (token) {
    deleted = await Token.findOneAndRemove({ userId, token });
  } else {
    deleted = await Token.findOneAndRemove({ userId });
  }
  
  if (!deleted) throw new Error("Xin vui lòng thử lại");
};

/**
 * check if there is a token which includes the id of logged in user
 */
const isUserDidLogin = async (userId) => {
  const storedToken = await Token.findOne({ userId });
  return storedToken ? storedToken.token : "";
};

const detailUser = async (userId) => {
  let user = await User.findById(userId)
  user = user.convertToId();
  return user
}

/**
 * Update user
 * @param {object} condition 
 * @param {object} dataUpdate 
 */
const storeUser = async (condition, dataUpdate) => {
  try {
    let user = await User.findOneAndUpdate(condition, dataUpdate)
    if (!user) throw "Update user fail"

    user = user.convertToId()
    return user
  } catch (err) {
    throw new Error("Xin vui lòng thử lại");
  }
}

module.exports = {
  hashPassword,
  destroyToken, 
  storeToken, 
  isUserDidLogin, 
  detailUser,
  storeUser
}
