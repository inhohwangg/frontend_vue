const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  postNum: {
    type: Number,
  },
  postTitle: {
    type: String,
  },
  postContent: {
    type: String,
  },
  category: {
    type: String,
  },
  createAt: {
    type: Date,
  },
  updateAt: {
    type: Date,
  },
});

module.exports = mongoose.model("Posts", postSchema);
