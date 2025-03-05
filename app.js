import express from 'express';
import { connectDB } from './config/postgres.connection.js';
import { runMigrations } from './migrations-runner.js';
import { balancesModule } from './routes/balances/balances.module.js';
import config from './config/config.js';

const app = express();

app.use(express.json());

app.use('/api', balancesModule);

const startServer = async () => {
  await connectDB();
  await runMigrations();

  app.listen(config.app.port, () => console.log('Server started on port: ' + config.app.port));
};

startServer();