const URL = require('url');
const urlObj = new URL.parse(
  'http://www.baidu.com/index.html?name=zfpx&age=6#aaa'
);
console.log(urlObj);
