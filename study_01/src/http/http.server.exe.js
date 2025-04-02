const http = require('http');
const fs = require('fs');
const path = require('path');

const resourceFilePath = '';

const server = http.createServer((req, res) => {
  console.log('请求进入');
  console.log(req.url);
  req.on('data', (data) => {
    console.log(data.toString());
  });
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.statusCode = 404;
  res.write('hello');
  res.end();
});
server.listen(9527);

server.on('listening', () => {
  console.log('listening');
});
