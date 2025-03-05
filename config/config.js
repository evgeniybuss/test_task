import dotenv from 'dotenv';
import { configSchema } from './schema.config.js';

dotenv.config();

const { error, value: envVars } = configSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default {
  postgres: {
    host: envVars.DB_HOST || 'localhost',
    port: +(envVars.DB_PORT || '5432'),
    username: envVars.DB_USER,
    password: envVars.DB_PASSWORD,
    database: envVars.DB_NAME,
  },
  app: {
    host: envVars.RUN_HOST,
    port: Number(envVars.RUN_PORT),
  },
}