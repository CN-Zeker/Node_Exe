const fs = require('fs');
const path = require('path');
const os = require('os');

const filePath = path.join(__dirname, '../assets/poem.text');
const filePathCopy = getCopyFilePath(filePath);

fs.unlink();
console.log(filePath, filePathCopy);
// fs.readFile(filePath, 'base64', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// (async function main() {
//   try {
//     await fs.promises.writeFile(filePaths, `离离原上草${os.EOL}一岁一枯荣`);
//   } catch (error) {
//     console.log('写入失败', error);
//   }
//   let content;
//   try {
//     content = await fs.promises.readFile(filePath);
//   } catch (error) {
//     console.log('error', error);
//   }

//   await fs.promises.writeFile(filePathCopy, content);
// })();
fs.stat(filePathCopy + 's', (err, stats) => {
  console.log('stats', stats.isFile());
  console.log('process', process.env.TZ);
  const date = new Date(stats.atimeMs);
  console.log('date', date);
});
function getCopyFilePath(filePath) {
  const fileName = path.basename(filePath);
  const extra = path.extname(filePath);
  const regx = new RegExp(extra, 'g');
  const fileNameNoExt = fileName.replace(regx, '');
  const fileDir = path.dirname(filePath);
  return path.join(fileDir, `${fileNameNoExt}.copy${extra}`);
}
