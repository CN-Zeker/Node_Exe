const path = require('path');

const baseName = path.basename(__filename, '.js');
console.log(baseName);
console.log(path.delimiter);
console.log(path.sep);
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.join('../', 'b', 'c', 'index.js'));
console.log(path.relative(path.join(__dirname, '../'), __filename));
console.log(path.resolve(__filename, __dirname));
