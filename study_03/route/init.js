require("./index.js");

const express = require("express");
// 创建express服务器应用
const app = express();
const port = 3000;

const path = require("path");
const static_path = path.resolve(__dirname, "../public");
app.use("/static", express.static(static_path));

app.use(require("./errorMiddleware"));

app.listen(port, () => {
  console.log("server is running at http://127.0.0.1:3000");
});
