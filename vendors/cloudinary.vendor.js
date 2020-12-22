const cloudinary = require('cloudinary').v2;
const { Config } = require('../constants/cloudinary.constant')

// Config cloudinary
cloudinary.config(Config);

const uploadSingleBase64 = async (image, folder) => {
  try {
    const upload = await cloudinary.uploader.upload(image, 
      { folder: folder }
    )
    if (!upload) throw "Upload fail"
    return upload.secure_url
  } catch (err) {
    console.log(err);
    throw "Upload fail"
  }
}

module.exports = {
  uploadSingleBase64
}
