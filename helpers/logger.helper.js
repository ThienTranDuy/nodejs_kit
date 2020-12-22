const loggerModel = require('../models/logger.model')
const requestIp = require('request-ip')

const writeLog = async (req, data = null) => {
  try {
    let newLogger = new loggerModel({
      user: req.session.user._id,
      method: req.method,
      action: req.url,
      data: data,
      agent: req.headers,
      requestIP: requestIp.getClientIp(req)
    })

    return newLogger.save()
  } catch (err) {
    return err
  }
}

const writeLogApi = async (req, user = "5f6474d38b2300006b000d14", data = null) => {
  try {
    let newLogger = new loggerModel({
      user: user,
      method: req.method,
      action: req.url,
      data: data,
      agent: req.headers,
      requestIP: requestIp.getClientIp(req)
    })

    return newLogger.save()
  } catch (err) {
    return err
  }
}

module.exports = {
  writeLog,
  writeLogApi
}
