const multer = require('multer')

const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
      cb(new Error('File không đúng định dạng'), false)
      return
    }

    cb(null, true)
  }
})

module.exports = {upload}
