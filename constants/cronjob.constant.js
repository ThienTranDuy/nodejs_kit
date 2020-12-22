const TimeUnit = {
  _TimeOneDay: 1000 * 60 * 60 * 24,
  _Midnight: new Date().setHours(0,0,0,0),
}

const CrontTime = {
  _ThreeDayAgo: new Date(TimeUnit._Midnight - TimeUnit._TimeOneDay * 3).toISOString()
}

module.exports = {
  TimeUnit,
  CrontTime
}
