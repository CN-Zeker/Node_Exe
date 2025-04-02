const fs = require('fs');
const path = require('path');
const FROM_FILEPATH = path.join(__dirname, '../assets/LMZJ.txt');
const TO_FILEPATH = path.join(__dirname, '../assets/LMZJ.copy.txt');

if (fs.existsSync(TO_FILEPATH)) {
  fs.unlinkSync(TO_FILEPATH);
}
const writeStream = fs.createWriteStream(TO_FILEPATH, {
  flags: 'a',
  encoding: 'utf-8',
  highWaterMark: 1,
});

const readStream = fs.createReadStream(FROM_FILEPATH, {
  encoding: 'utf-8',
  highWaterMark: 100,
  start: 0,
  end: 100,
});

writeStream.on('open', () => {
  console.log('open');
});
writeStream.on('close', () => {
  console.log('close');
});
writeStream.on('drain', () => {
  console.log('drain');
});
writeStream.on('finish', () => {
  console.log('finish');
});
const flag = writeStream.write('writeStream');
console.log('flag', flag);
