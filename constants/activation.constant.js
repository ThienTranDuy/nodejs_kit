const URL = {
  _UrlRoot: process.env.URL_ROOT,
  _UrlClient: process.env.URL_CLIENT
}

const Status = {
  _New: 0,
  _NewText: 'Còn mới',

  _Actived: 1,
  _ActivedText: 'Đã sử dụng'
}

const Type = {
  _VerifyAccount: 0,
  _VerifyAccountText: 'Xác thực tài khoản'
}

const Time = {
  _Expire: 259200 // 3600 * 24 * 3 -> 3 days
}

module.exports = {
  URL,
  Status,
  Type,
  Time
}
