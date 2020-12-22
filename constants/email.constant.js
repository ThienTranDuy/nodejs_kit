const Config = {
  _Host: process.env.EMAIL_HOST,
  _Port: process.env.EMAIL_PORT,
  _Secure: process.env.EMAIL_SECURE,
  _User: process.env.EMAIL_USER,
  _Password: process.env.EMAIL_PASSWORD,
  _Tls: process.env.EMAIL_TLS,
  _Debug: process.env.EMAIL_DEBUG,
  _title: 'Hội Nhảy Game'
}

const TypeEmail = {
  _DefaultEmail: 0,
  _DefaultEmailTemplate: 'default',
  _DefaultEmailTitle: '[HỘI NHẢY GAME] - Thông báo',

  _ActiveEmail: 1,
  _ActiveEmailTemplate: 'activeEmail',
  _ActiveEmailTitle: '[HỘI NHẢY GAME] - Xác thực tài khoản'
}

module.exports = {
  Config,
  TypeEmail
}
