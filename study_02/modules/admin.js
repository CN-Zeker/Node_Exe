import sequelize from './db.js';
import { DataTypes } from 'sequelize';

const Admin = sequelize.define(
  'Admin',
  {
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://s2.loli.net/2022/06/06/r8YZzYjKJJqYh0E.png',
    },
  },
  {
    paranoid: true,
  }
);

export default Admin;
