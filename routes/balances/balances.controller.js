import express from 'express';
import { handleValidationErrors, validateParams } from '../../utils/validators/balances.validator.js';
import { BalancesService } from './balances.service.js';
import { validateUser } from '../../utils/validators/user.validator.js';

export class BalancesController {
  constructor() {
    this.router = express.Router();
    this.balancesService = new BalancesService();
    this.initializeRoutes();
  }

   initializeRoutes() {
    this.router.put('/:userId',
      validateUser,
      validateParams,
      handleValidationErrors,
      async (req, res) => {
      this.changeBalance(req, res)
    });
  }

  async changeBalance(req, res) {
    try {
      const { userId } = req.params;
      const { amount } = req.body;
      const response = await this.balancesService.changeUserBalance(userId, amount);
      res.json(response);
    } catch (err) {
      console.error(err);
      res.status(400).json({ error: err.message });
    }
  }
}

