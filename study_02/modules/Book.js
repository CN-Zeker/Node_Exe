import sequelize from './db.js';
import { DataTypes } from 'sequelize';

const Book = sequelize.define('book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  /**出版日期 */
  publishDate: {
    type: DataTypes.DATEONLY,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Book;
