const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  like: {
    type: Boolean,
  },
  unlike: {
    type: Boolean,
  },
  count: {
    type: Number,
  },
});

module.exports = mongoose.model("Like", likeSchema);
