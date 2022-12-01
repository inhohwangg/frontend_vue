const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10; // salt 돌리는 횟수

// Schema 정의
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  password: {
    type: String,
  },
  passwordCheck: {
    type: String,
  },
});

// Mongoose 의 pre 메소드는 router > user > /signUp : api 가 실행되기 전에 실행된다.
// 즉 api 실행되기 전에 hashing 하기 위해 pre 메소드 내부에 Hash function 작성

userSchema.pre("save", function (next) {
  const user = this; // userSchema 를 가르킴

  if (user.isModified("password")) {
    // password 가 변경될 때만 Hashing 실행
    // genSalt: salt 생성
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hashedPassword) {
        // hash 의 첫번째 인자 : 비밀번호의 Plain Text
        if (err) return next(err);
        // 에러 없이 성공하면 비밀번호의 Plain Text를 hashedPassword 로 교체해줌
        user.password = hashedPassword;
        // Hashing 이 끝나면 save 로 넘어감
        next();
      });
    });
  } else {
    // password 가 변경되지 않을때
    // 바로 save 로 넘어간다.
    next();
  }
});

module.exports = mongoose.model("User", userSchema);

//참고한 자료 = https://velog.io/@iamhayoung/Bcrypt%EB%A1%9C-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%95%94%ED%98%B8%ED%99%94%ED%95%98%EA%B8%B0
