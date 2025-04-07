// const { loggerSQL,logger} = require('./log.js');
require("./route/init");
Object.prototype.toMap = () => {
  return Object.keys(this).reduce((map, key) => {
    map.set(key, this[key]);
    return map;
  }, new Map());
};
