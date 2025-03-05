import { SequelizeStorage, Umzug } from "umzug";
import { sequelize } from './config/postgres.connection.js';

const umzug = new Umzug({
  migrations: { glob: "./migrations/*.js" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: {
    info: (msg) => console.log("[INFO]", msg),
    warn: (msg) => console.warn("[WARN]", msg),
    error: (msg) => console.error("[ERROR]", msg),
  },});

export const runMigrations = async () => {
  await umzug.up();
  console.log("All migrations done");
};
