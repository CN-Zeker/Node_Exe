const net = require('net');
const fs = require('fs');
const path = require('path');

const server = net.createServer();

const resourcePath = path.resolve(__dirname, '../assets/mv.mkv');

server.listen(80);
server.on('connection', (socket) => {
  const header = new Buffer.from(`HTTP/1.1 200 OK
Content-Type: application/octet-stream
Content-Length: ${fs.statSync(resourcePath).size}
Connection: close

`);
  socket.write(header);
  const content = fs.createReadStream(resourcePath).pipe(socket);

  console.log('connection');
  socket.end();
});
server.on('listening', () => {
  console.log('listening');
});
