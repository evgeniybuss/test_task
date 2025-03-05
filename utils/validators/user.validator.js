import User from '../models/user.js';

export const validateUser = async (req, res, next) => {
  const { userId } = req.params;
  const { amount } = req.body;
  const user = await User.findByPk(userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (user.balance + amount < 0) {
    return res.status(400).json({ error: 'Insufficient balance' });
  }

  req.user = user;
  next();
}