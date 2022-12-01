const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  mongoose
    .connect(process.env.MONGODB, { ignoreUndefined: true })
    .then(console.log("Mongo DB Connected Complete"))
    .catch((err) => console.log(err));
};
mongoose.connection.on("error", (err) => {
  console.error("몽고디비 연결 에러", err);
});

module.exports = connect;
