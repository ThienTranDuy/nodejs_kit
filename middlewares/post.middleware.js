const createError = require("http-errors");
const PostModel = require('../models/post.model')

const isPostOwner = async (req, res, next) => {
  let userId = req.payload.id
  let postId = req.body.postId

  let postItem = await PostModel.findOne({
    author: userId,
    _id: postId
  })

  if (!postItem) {return next(createError(404))}

  next()
}

module.exports = {
  isPostOwner
}
