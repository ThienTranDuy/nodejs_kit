const { v4: uuidv4 } = require('uuid');

const { sendMail } = require('../vendors/email.vendor');
const { Status, URL, Type } = require('../constants/activation.constant')
const { TypeEmail } = require('../constants/email.constant')

const { proccessError } = require('../helpers/handle-error.helper')

const ActivationModel = require('../models/activation.model')

/**
 * Create code Inpput
 * @param {string} email 
 * @param {string} userId 
 */
const activationCode = async (userId, email, title, type, message) => {
  const activation = uuidv4();

  sendMail(email, title, message + ' ' + activation)
  storeActivation(userId, activation, type)
}

/**
 * Create code Link
 * @param {string} userId 
 */
const linkActiveEmail = async (userId, email) => {
  const activationCode = uuidv4();

  const verifyLink = `${URL._UrlClient}active-email?code=${activationCode}`

  storeActivation(userId, activationCode, Type._VerifyAccount)
  sendMail(email, verifyLink, TypeEmail._ActiveEmail)
}

/**
 * store db
 * @param {string} useId user id
 * @param {string} Activation
 * @param {number} type
 */
const storeActivation = async (useId, activation, type) => {
  try {
    const newData = await ActivationModel.create({
      code: activation,
      status: Status._New,
      type: type,
      user: useId
    })

    return newData
  } catch (err) {
    proccessError(err)
  }
}

module.exports = {
  activationCode,
  linkActiveEmail
}
