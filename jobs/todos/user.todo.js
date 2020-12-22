const UserModel = require('../../models/user.model')
const {StatusUser} = require('../../constants/system.constant')
const {CrontTime} = require('../../constants/cronjob.constant')
const {proccessError} = require('../../helpers/handle-error.helper')

// Delete user inactive over 3 days
const DropTokenOverTime = async () => {
  try {
    let overISO = CrontTime._ThreeDayAgo
    let cdDate = {
      status: StatusUser._InActive,
      createdAt: {$lte: overISO}
    }

    await UserModel.deleteMany(cdDate)
  } catch (err) {
    proccessError(err)
  }
}

module.exports = {
  DropTokenOverTime
}
