const express = require("express");
const router = express.Router();
const dayjs = require("dayjs");
const Post = require("../schema/post");

// 게시글 생성
router.post("/postCreate", async (req, res) => {
  try {
    const { postTitle, postContent, category } = req.body;
    const createAt = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const results = await Post.create({
      postTitle,
      postContent,
      category,
      createAt,
    });
    res.status(201).json({ result: true, results });
  } catch (error) {
    console.log(error, "postCreate Api error");
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
