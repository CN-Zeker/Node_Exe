const fs = require('fs');
const path = require('path');

console.time('time');

const FROM_FILEPATH = path.join(__dirname, '../assets/LMZJ.txt');
// const FROM_FILEPATH = path.join(__dirname, '../assets/mv.mkv');
const TO_FILEPATH = path.join(__dirname, '../assets/LMZJ.copy.txt');
// const TO_FILEPATH = path.join(__dirname, '../assets/mv_copy.mkv');
const MAX_READ_STREAM = 1024 * 1024 * 1024 * 1;
const MAX_WRITE_STREAM = 1024 * 1024 * 1024 * 1;

if (fs.existsSync(TO_FILEPATH)) {
  fs.unlinkSync(TO_FILEPATH);
  return;
}

const readContent = fs.readFileSync(FROM_FILEPATH);
fs.writeFileSync(TO_FILEPATH, readContent);
console.timeEnd('time');
// const rs = fs.createReadStream(FROM_FILEPATH, {
//   // highWaterMark: MAX_READ_STREAM,
//   autoClose: true,
// });
// const ws = fs.createWriteStream(TO_FILEPATH, {
//   // highWaterMark: MAX_WRITE_STREAM,
// });

// rs.pipe(ws);
// rs.on('data', (chunk) => {
//   // console.log('first');
//   let flag = ws.write(chunk);
//   if (!flag) {
//     console.log(flag);
//     rs.pause();
//   }
// });
// ws.on('drain', () => {
//   // console.log('drain');
//   rs.resume();
// });
// rs.on('close', () => {
//   console.log('close');
//   console.timeEnd('time');
// });
