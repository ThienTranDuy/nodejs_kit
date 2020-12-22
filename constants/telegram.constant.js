const Config = {
  _TokenBot: process.env.TELEGRAM_TOKENBOT,
  _GroupChatId: process.env.TELEGRAM_GROUPCHATID,
  _UrlBasic: process.env.TELEGRAM_URLBASIC,
  _Method: process.env.TELEGRAM_METHOD_GET,
  _Port: process.env.TELEGRAM_PORT,
  _Function: {
    sendMessage: '/' + process.env.TELEGRAM_TOKENBOT + '/' + process.env.TELEGRAM_SEND_MESSAGE + '?chat_id=' + process.env.TELEGRAM_GROUPCHATID + '&text=',
    getUpdates: process.env.TELEGRAM_GET_UPDATES
  }
}

module.exports = {
  Config
}
