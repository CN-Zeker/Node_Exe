import sequelize from './db.js';
import { Model, DataTypes } from 'sequelize';
import Student from './Student.js';
const Class = sequelize.define(
  'class',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    openDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('open', 'closed'),
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

export default Class;
