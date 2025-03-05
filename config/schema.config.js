import { config } from 'dotenv';
import Joi from 'joi';

config();

export const configSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_PASSWORD: Joi.string().required(),
  DB_NAME: Joi.string().required(),

  RUN_PORT: Joi.number().default(3000),
  RUN_HOST: Joi.string().default('127.0.0.1'),
}).unknown(true);