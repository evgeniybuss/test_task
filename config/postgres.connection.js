import { Sequelize } from 'sequelize';
import config from './config.js';
export const sequelize = new Sequelize(
  config.postgres.database,
  config.postgres.username,
  config.postgres.password, {
  dialect: "postgres",
  host: config.postgres.host,
  port: config.postgres.port,
  logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database Connected");
    await sequelize.sync({ alter: false });
  } catch (error) {
    console.error("Failed to connect to database: ", error);
    process.exit(1);
  }
};