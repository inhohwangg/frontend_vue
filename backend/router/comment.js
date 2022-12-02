const express = require("express");
const router = express.Router();
const Comment = require("../schema/comment");

router.post("/commentPost", async (req, res) => {
  try {
    res.status(201).json({ result: "댓글 생성 완료" });
  } catch (error) {
    console.error(error, "commentPost Api error");
    res.status(400).json({ result: false });
  }
});

module.exports = router;
