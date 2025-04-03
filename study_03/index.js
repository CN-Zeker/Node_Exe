// const { loggerSQL,logger} = require('./log.js');
const express = require("express");
// 创建express服务器应用
const app = express();
const port = 3000;

app.get("", (req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(port, () => {
  console.log("server is running at http://127.0.0.1:3000");
});
