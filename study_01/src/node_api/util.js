const util = require('util');
// function delay(deration) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(delay);
//     }, deration);
//   });
// }

// const callback = util.callbackify(delay);
// async function main() {
//   console.log('start');

//   callback(5000, (err, result) => {
//     console.log('end');
//   });
// }

const obj = {
  a: '1',
  b: '2',
  c: {
    d: '3',
    e: '4',
  },
};
const obj2 = {
  a: '1',
  b: '2',
  c: {
    d: '3',
    e: {
      f: '4',
      g: '5',
    },
  },
};
console.log(util.isDeepStrictEqual(obj, obj2));
