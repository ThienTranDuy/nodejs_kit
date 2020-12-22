const createError = require("http-errors");
const { isEmail } = require("validator");

const User = require("../models/user.model");
const {StatusUser, TypeUser} = require("../constants/system.constant")

const isRegisteredUser = async (req, res, next) => {
  const userExists = await User.findOne({ email: req.body.email });

  if (userExists) {// user is already existed
    return next(createError(401, "Email đã được sử dụng"));
  }

  next();
};

const validateRegisterForm = async (req, res, next) => {
  const { email, phone, name, password } = req.body;

  // send error to client
  if (!email) return next(createError(400, "email không được để trống"));
  if (!phone) return next(createError(400, "số điện thoại không được để trống"));
  if (!password) return next(createError(400, "password không được để trống"));
  if (!name) return next(createError(400, "Họ và tên không được để trống"));
  if (!isEmail(email)) return next(createError(400, "email không đúng định dạng"));

  next();
};

const validateLoginForm = async (req, res, next) => {
  const { email, password } = req.body;

  // send error to client
  if (!email) return next(createError(400, "email không được để trống"));
  if (!password) return next(createError(400, "password không được để trống"));
  if (!isEmail(email)) return next(createError(400, "email không đúng định dạng"));

  next();
};


const isUserExist = async (req, res, next) => {
  let email = req.body.email

  if (!email) return next(createError(400, "email không được để trống"));
  if (!isEmail(email)) return next(createError(400, "email không đúng định dạng"));

  let condition = {
    email: email,
    status: StatusUser._Active,
    type: TypeUser._Client
  }

  const userExists = await User.findOne(condition);

  if (!userExists) {
    return next(createError(401, "Email đã được sử dụng"));
  }

  next();
};

module.exports = { 
  validateRegisterForm,
  isRegisteredUser,
  validateLoginForm,
  isUserExist
};
