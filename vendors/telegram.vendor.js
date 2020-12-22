const https = require('https')
const { Config } = require('../constants/telegram.constant')

/**
 * Config Domain
 */
const Telegram = {
  host: Config._UrlBasic,
  port: Config._Port,
  method: Config._Method,
  parse_mode: 'HTML'
}

const sendMessage = async (message) => {
  let sendRequest, messageSend

  try {
    messageSend = encodeURI(message)

    // Config path send API
    Telegram.path = Config._Function.sendMessage + messageSend

    // create request
    sendRequest = await https.request(Telegram)

    // Proccess
    sendRequest.end()

    // Error
    sendRequest.on('error', function (e) {
      throw e
    })

    return obj_json('Success')

  } catch (err) {
    return err
  }
}

module.exports = {
  sendMessage
}
