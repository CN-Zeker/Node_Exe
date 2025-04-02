const fs = require('fs');
const path = require('path');
const FILEPATH = 'd:\\';

console.time('time');
const fileConfig = JSON.parse(readConfig());
function readDir(dir) {
  const res = [];
  const filesArr = fs.readdirSync(dir);
  for (const fileName of filesArr) {
    if (fileName == 'node_modules') continue;
    const filePath = path.join(dir, fileName);
    let stat;
    try {
      stat = fs.statSync(filePath);
    } catch (error) {
      continue;
    }

    if (stat.isDirectory()) {
      res.push(...readDir(filePath));
    } else {
      if (validFile(fileName)) {
        res.push(filePath);
      }
    }
  }

  return res;
}
function validFile(fileName) {
  const ext = path.extname(fileName);
  let isValid = false;
  for (let index = 0; index < fileConfig.findFiles.length; index++) {
    fileName.includes(fileConfig.findFiles[index]) && (isValid = true);
    break;
  }
  return isValid;
}

function readConfig() {
  return fs.readFileSync(path.join(__dirname, 'fileConfig.json'), 'utf-8');
}
console.log(readDir(FILEPATH));
console.timeEnd('time');
