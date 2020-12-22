const { uploadSingleBase64 } = require('../vendors/cloudinary.vendor');

/**
 * Upload image type base64 to cloudinary
 * @param {ObjectId} userId 
 * @param {string} base64String
 * @return {string}
 */
const uploadCloudBase64Alone = async (base64String, userId) => {
  try {
    const imageUrl = await uploadSingleBase64(base64String, userId)
    return imageUrl
  } catch (err) {
    return next(createError(500));
  }
}

module.exports = {
  uploadCloudBase64Alone
}
