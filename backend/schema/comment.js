const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  content: {
    type: String,
  },
  commentNum: {
    type: Number,
  },
});

module.exports = mongoose.model("Comment", commentSchema);
