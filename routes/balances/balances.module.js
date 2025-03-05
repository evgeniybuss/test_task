import express from 'express';
import { BalancesController } from './balances.controller.js';

export const balancesModule = express.Router();

const balancesController = new BalancesController();
balancesModule.use('/balances', balancesController.router);