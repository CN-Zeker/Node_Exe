const { Readble } = require('stream');
const fs = require('fs');
const path = require('path');

const FROM_FILEPATH = path.join(__dirname, '../assets/LMZJ.txt');
const MAX_STREAM = 1024;

const readStream = fs.createReadStream(FROM_FILEPATH, {
  encoding: 'utf-8',
  highWaterMark: 100,
  start: 0,
  end: MAX_STREAM,
  autoClose: true,
});

readStream.on('open', () => {
  console.log('open');
});

readStream.on('data', (chunk) => {
  console.log(chunk + '-----');
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 1000);
});
readStream.on('end', () => {
  console.log('end');
});
readStream.on('close', () => {
  console.log('close');
});
readStream.on('pause', () => {
  console.log('pause');
});
readStream.on('resume', () => {
  console.log('resume');
});
