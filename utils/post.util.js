const {
  uploadSingleBase64
} = require('../vendors/cloudinary.vendor');

const composeContentWithImages = async (content, images, userId) => {
  const imagesPromise = images.map(async (image) => {
    return  await uploadSingleBase64(image, userId)
  })

  const imageUrls = await Promise.all(imagesPromise)
  for (let i = 0; i < imageUrls.length; i++) {
    content = content.replace(`src="IMG_SRC_${i}"`,`src="${imageUrls[i]}"`);
  }

  return content;
}

module.exports = {
  composeContentWithImages
}
