const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../schema/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// 회원가입 기능
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

// 로그인 기능
router.post("/login", async (req, res) => {
  try {
    const { userId, password } = req.body;
    let test = await User.findOne({ userId });
    if (!test) throw Error;
    const token = jwt.sign(
      {
        type: "JWT",
      },
      process.env.ACCESS_TOKEN,
      {
        subject: "inho-sideProject",
        expiresIn: "180m",
        issuer: "inho",
      }
    );
    res.status(200).json({ result: "로그인 성공!", test, token });
  } catch (error) {
    console.error(error, "login api error");
    res.status(400).json({ result: false });
  }
});

// 로그아웃 기능
router.get("/logout", async (req, res) => {
  try {
    res.setHeader("Set-Cookie", "login=true; Max-age=0");
    res.status(200).json({ result: "로그아웃 성공!" });
  } catch (error) {
    console.error(error, "logout api error");
    res.status(400).json({ result: false });
  }
});

module.exports = router;
