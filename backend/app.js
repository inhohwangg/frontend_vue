const express = require("express");
const app = require("express")();
const port = 3000;
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// MongoDB 연결하기
const connect = require("./schema");
connect();

// 라우터 불러오기
const postRouter = require("./router/post");
const userRouter = require("./router/user");

// 미들웨어
app.use(helmet());
app.use(bodyParser());
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 연결하기
app.use("/api", [postRouter, userRouter]);

app.get("/test", (req, res) => {
  res.json({ result: true });
});

// 서버 실행하기
app.listen(port, () => {
  console.log("*********************");
  console.log(`Server ${port} On!`);
  console.log("*********************");
});
