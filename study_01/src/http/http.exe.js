/** 建立在net模块基础上 不用管理socket 的断开/关闭   */
const http = require('http');

let httpResData = '';

const request = http.request(
  'http://172.20.105.172/cloud-gateway/api/chronic-disease/gxysc/getGxyscInfoPage',
  {
    method: 'POST',
  },
  (res) => {
    res.on('data', (data) => {
      httpResData += data.toString();
      // const dataObj = JSON.parse(data);
      // console.log(dataObj);
    });
    res.on('end', () => {
      console.log('end');
      console.log(httpResData);
    });
  }
);
const header = new Map();
header.set('Content-Type', 'application/json');
header.set(
  'User-Agent',
  ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
);
header.set('connection', 'keep-alive');
header.set('access-token', '9801987f-5c2a-4653-84a4-14117725b7ee');
header.set('referer', 'http://172.20.105.172/xmbythDist/scgl/jbsc/gxyscyl');

request
  .setHeaders(header)
  .write(
    '{"gxq":null,"bgyljg":null,"sfQz":"2","xyyc":"02","keyword":"","currPage":1,"pageSize":10}'
  );
request.end();
