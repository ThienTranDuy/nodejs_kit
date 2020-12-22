const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const Token = require("../models/token.model");
const User = require("../models/user.model");

const {TypeUser, StatusUser} = require("../constants/system.constant")

/**
 * Check if token is included in request headers
 */
const authenticateToken = async (req, res, next) => {
  let token = extractTokenFromHeader(req);

  if (!token) next(createError(401));

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, payload) => {
    if (error) next(createError(401));

    // pass information for the next middleware
    req.payload = {...payload, token};

    next();
  });
};

/**
 * Check if Token is still valid (valid token is stored in Tokens Collection)
 */
const isTokenValid = async (req, res, next) => {
  const token = extractTokenFromHeader(req);

  let storedToken = await Token.findOne({token})
  if (!storedToken) next(createError(401));

  next();
};


/**
 * Check if User is still active
 */
const isUserActive = async (req, res, next) => {
  let { id, email } = req.payload

  let user = await User.findOne({
    _id: id,
    email: email,
    type: TypeUser._Client,
    status: StatusUser._Active
  })
  if (!user) {next(createError(401))}

  next()
}

// -------------------------------------------------------- //
// -------------------------------------------------------- //
// ----------------- SHARED METHODS AREA ------------------ //
// -------------------------------------------------------- //
// -------------------------------------------------------- //

const extractTokenFromHeader = (req) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  return token;
};

module.exports = {
  authenticateToken,
  isTokenValid,
  isUserActive
};
