/*
 * @Author: zhangke
 * @Date: 2025-03-27 17:28:26
 * @LastEditors: zhangke
 * @LastEditTime: 2025-03-28 13:15:25
 * @Description: 静态资源服务器
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const root = path.resolve(__dirname, '../assets');

const server = http.createServer(async (req, res) => {
  console.log('请求进入');
  //解析url
  const requestUrl = req.url;
  const requestUrlObj = url.parse(requestUrl);
  const requestFilePath = requestUrlObj.pathname;
  const responseResourcePath = path.join(root, requestFilePath);

  if (!fs.existsSync(responseResourcePath)) {
    responseEmptyPage(res);
    return;
  }
  // 获取文件信息
  let fileInfo;
  try {
    fileInfo = await fs.promises.stat(responseResourcePath);
    console.log(fileInfo);
  } catch (error) {
    console.error('获取文件信息失败', error);
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write;
  fs.createReadStream(responseResourcePath).pipe(res);
  res.end();
});

server.listen(9527);

server.on('close', () => {
  console.log('server close');
});

function responseEmptyPage(res) {
  const content = fs.readFileSync(path.resolve(__dirname, './404.html'));
  res.writeHead(404, { 'Content-Type': 'html' }).write(content);
  res.end();
}
