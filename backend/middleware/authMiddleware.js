const jwt = require("jsonwebtoken");
const User = require("../schema/user");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [authType, authToken] = (authorization || "").split(" ");

  if (!authToken || authType !== "Bearer") {
    res.status(401).json({
      errorMessage: "로그인 후 이용 가능합니다.",
    });
    return;
  }
  try {
    const { userId } = jwt.verify(authToken, process.env.ACCESS_TOKEN);
    User.findById(userId).then((user) => {
      res.locals.user = user;
      next();
    });
  } catch (error) {
    console.error(error, "authMiddleware Error");
    res.status(401).json({ result: "토큰이 유효하지 않습니다.", error });
  }
};
