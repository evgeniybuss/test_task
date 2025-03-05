import { Op } from 'sequelize';
import { sequelize } from '../../config/postgres.connection.js';
import User from '../../utils/models/user.js';

export class BalancesService {
  async changeUserBalance(userId, amount) {
      const [updatedCount, updatedUsers] = await User.update(
        { balance: sequelize.literal(`balance + ${amount}`) },
        {
          where: {
            id: userId,
            balance: { [Op.gte]: -amount },
          },
          returning: true,
        }
      );

      if (updatedCount === 0) {
        throw new Error('Conflict: User data was modified');
      }

      return updatedUsers[0];
  }
}