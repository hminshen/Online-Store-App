import { Request, Response, NextFunction } from 'express';
import { param, validationResult }  from 'express-validator';

const idValidation = [
    param('id').isInt().withMessage('ID must be an integer'),
    param('id').custom((value) => {
      if (value < 0) {
        throw new Error('ID cannot be negative');
      }
      // You can add more custom validation here if needed
      return true;
    }),
    // Handle validation errors
    (req : Request, res: Response, next : NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
  ];

const commonValidator = {
    idValidation,
}

export default commonValidator;