const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
const Post = require("../schema/post");
const auth = require("../middleware/authMiddleware");

// 게시글 생성
router.post("/postCreate", auth, async (req, res) => {
  try {
    const { userId } = req.query;
    const { postTitle, postContent, category } = req.body;
    const createAt = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const add = await Post.find(null, { _id: true, postNum: true });
    let postNum = 0;
    for (let i = 0; i < add.length; i++) {
      if (add[i].postNum === undefined) postNum = 1;
      else postNum += 1;
    }
    const results = await Post.create({
      userId,
      postTitle,
      postContent,
      category,
      createAt,
      postNum,
    });
    res.status(201).json({ result: true, results });
  } catch (error) {
    console.log(error, "postCreate Api error");
    res.status(400).json({ result: false });
  }
});

// 게시글 수정
router.put("/postPut", async (req, res) => {
  try {
    const { _id } = req.query;
    const { postTitle, postContent, category } = req.body;
    const results = await Post.updateOne(
      { $set: { _id } },
      {
        postTitle,
        postContent,
        category,
      }
    ).exec();
    res.status(200).json({ result: true, results });
  } catch (error) {
    console.error(error, "/postPut api error");
    res.status(400).json({ result: false });
  }
});

// 게시글 삭제
router.delete("/postDelete", async (req, res) => {
  try {
    const { _id } = req.query;
    const results = await Post.deleteOne({ $set: { _id } }).exec();
    res.status(200).json({ result: "게시글 삭제 완료", results });
  } catch (error) {
    console.error(error, "postDelete Api Error");
    res.status(400).json({ result: false });
  }
});

// 게시글 조회
router.get("/postRead", async (req, res) => {
  try {
    const postList = await Post.find({});
    res.status(200).json({ result: true, postList });
  } catch (error) {
    console.error(error, "/postRead Api error");
    res.status(400).json({ result: false });
  }
});

module.exports = router;
