import { check, validationResult } from 'express-validator';

export const validateParams = [
  check("userId").isInt({ min: 1 }).withMessage("Invalid user id"),
  check("amount").isInt().withMessage("Invalid amount"),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};