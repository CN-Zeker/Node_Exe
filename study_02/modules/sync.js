/*
 * @Author: zhangke
 * @Date: 2025-03-31 15:18:48
 * @LastEditors: zhangke
 * @LastEditTime: 2025-03-31 16:34:56
 * @Description: 同步所有模型
 */

import Admin from './admin.js';
import Class from './Class.js';
import Student from './Student.js';
import Book from './Book.js';

import sequelize from './db.js';
export function syncDB() {
  sequelize.sync({ alter: true }).then(() => {
    console.log('同步创建表成功');
  });
  Class.hasMany(Student);
}
