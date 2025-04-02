const net = require('net');
const fs = require('fs');
const path = require('path');

const TO_FILEPATH = path.join(__dirname, 'data.txt');

let firstContent = true;
const socket = net.createConnection(
  { host: '127.0.0.1', port: 80 },
  function () {
    console.log('链接');
  }
);
// const socket = net.createConnection(
//   { host: '172.20.105.172', port: 80 },
//   function () {
//     console.log('链接');
//   }
// );
// socket.write(`GET /cloud-gateway/api/chronic-disease/mzfscreen/getMzfObjectPage HTTP/1.1
// Connection: keep-alive
// Content-Length: 143
// Content-Type: application/json
// Host: 172.20.105.172
// Referer: http://172.20.105.172/xmbythDist/scgl/jbsc/mzfscyl
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36
// access-token: ea71ed1a-f7e8-4dad-949c-1b5894d7cfdc

// {"gxdq":null,"yljgDm":null,"zrysId":"","jzdXia":null,"jzdXng":null,"jzdVlg":null,"wjwcqk":[],"jzts":"","keyword":"","currPage":1,"pageSize":10}

// `);

// socket.on('data', function (chunk) {
//   const data = chunk.toString();
//   console.log(data);
//   if (firstContent) {
//     getResponseBody(data);
//     firstContent = false;
//   }
//   socket.end();
// });
socket.on('error', function (err) {
  console.log('err', err);
});

socket.on('close', function () {
  console.log('close');
});
socket.on('end', function () {
  console.log('end');
});

// function getResponseBody(response) {
//   const header = {};
//   const index = response.indexOf('\r\n\r\n');
//   response
//     .substring(0, index)
//     .split('\r\n')
//     .map((item) => {
//       return item.split(': ');
//     })
//     .forEach((item) => {
//       if (item.length === 2) {
//         header[item[0]] = item[1];
//       }
//     });
//   return { header };
// }
