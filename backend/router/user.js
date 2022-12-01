const express = require("express");
const router = express.Router();
const User = require("../schema/user");

router.post("/signUp", async (req, res) => {
  try {
    const { userId, password } = req.body;
    const sign = await User.create({ userId, password });
    res.status(201).json({ result: "회원가입 성공", sign });
  } catch (error) {
    console.error(error, "/signUp api error");
    res.status(400).json({ result: false });
  }
});

module.exports = router;
