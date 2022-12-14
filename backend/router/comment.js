const express = require("express");
const router = express.Router();
const Comment = require("../schema/comment");
const auth = require("../middleware/authMiddleware");
const User = require("../schema/user");
const Post = require("../schema/post");

// 댓글 생성 기능
router.post("/commentPost", auth, async (req, res) => {
  try {
    const { userId } = req.query;
    const { content } = req.body;
    let commentNum = 0;
    let add = await Comment.find(null, { commentNum: true });
    for (let i = 0; i < add.length; i++) {
      if (add[i].commentNum === undefined) commentNum = 1;
      else commentNum += 1;
    }
    let result = await Comment.create({ userId, content, commentNum });
    res.status(201).json({ result: "댓글 생성 완료", result });
  } catch (error) {
    console.error(error, "commentPost Api error");
    res.status(400).json({ result: false });
  }
});

// 댓글 조회 기능
router.get("/commentRead", async (req, res) => {
  try {
    const { userId } = req.query;
    const { userId: usercode } = await User.findOne({ userId });
    console.log(usercode);
    const { userId: postcode } = await Post.findOne({ userId });
    console.log(postcode);
    // if (!test) throw Error
    res.status(200).json({ result: "댓글 조회 성공!" });
  } catch (error) {
    console.error(error, "commentRead api error");
    res.status(400).json({ result: false });
  }
});

// 댓글 수정 기능

// 댓글 삭제 기능

module.exports = router;
