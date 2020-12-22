const Telegram = require('../vendors/telegram.vendor')

const proccessError = async (err) => {
  try {
    const eviroment = process.env.EVIROMENT
    const content = JSON.stringify(err, null, 4)
    const time = new Date()
    const message = `[${eviroment}] - Notification system:\n${content}\nTime alert: ${time}`

    await Telegram.sendMessage(message)
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  proccessError
}
