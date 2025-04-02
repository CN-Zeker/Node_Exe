import { Sequelize } from 'sequelize';
import DB_CONFIG from './database.config.json' with { type: 'json' };

const sequelize = new Sequelize(
  DB_CONFIG.database,
  DB_CONFIG.username,
  DB_CONFIG.password,
  {
    host: DB_CONFIG.host,
    dialect: DB_CONFIG.dialect,
  }
);

export default sequelize;
