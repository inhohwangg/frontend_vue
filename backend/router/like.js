const express = require("express");
const router = express.Router();
const Like = require("../schema/like");

//좋아요 기능
router.post("/likeadd", async (req, res) => {
  try {
    const { like } = req.body;
    let count = 0;
    if (like === true) count = 1;
    else count = 0;
    let test = await Like.update({ like, count });
    res.status(201).json({ test });
  } catch (err) {
    console.error(err, "likeadd api error");
    res.status(400).json({ result: false });
  }
});

// 좋아요 조회
router.get("/likeRead", async (req, res) => {
  try {
    let test = await Like.find({});
    res.status(200).json({ reslut: true, test });
  } catch {
    res.status(400).json({ reslut: false });
  }
});

// 싫어요 기능
router.post("/unlikeadd", async (req, res) => {
  try {
    const { unlike } = req.body;
    let test = await Like.create({ unlike });
    res.status(201).json({ result: true, test });
  } catch (err) {
    console.error(err, "unlikeadd api error");
    res.status(400).json({ result: false });
  }
});

module.exports = router;
