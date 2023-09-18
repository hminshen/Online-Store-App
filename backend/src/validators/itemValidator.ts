import { Request, Response, NextFunction } from 'express';
import { body, validationResult }  from 'express-validator';

const validateCreateItem = [
  // Validate fields in the request body
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 30 })
    .withMessage('Name cannot be longer than 30 characters')
    .matches(/^[A-Z]/)
    .withMessage('Name must start with a capital letter'),

  body('description')
    .isLength({ max: 255 })
    .withMessage('Description cannot be longer than 255 characters'),

  body('price')
    .isNumeric()
    .withMessage('Price must be a number')
    .isFloat({ min: 0 })
    .withMessage('Price cannot be negative')
    .custom((value) => {
      if (value > Number.MAX_SAFE_INTEGER) {
        throw new Error('Price is too large');
      }
      return true;
    })
    .toFloat(),

  body('quantity')
    .isInt()
    .withMessage('Quantity must be an integer')
    .isInt({ min: 0 })
    .withMessage('Quantity cannot be negative')
    .custom((value) => {
      if (value > Number.MAX_SAFE_INTEGER) {
        throw new Error('Quantity is too large');
      }
      return true;
    })
    .toInt(),

  // Handle validation errors
  (req : Request, res: Response, next : NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const itemValidator = {
    validateCreateItem,
}

export default itemValidator;