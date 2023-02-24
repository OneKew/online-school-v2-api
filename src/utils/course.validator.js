import { body } from 'express-validator';

export default [
  body('name', 'Invalid name.').notEmpty().isLength({ min: 3 }),
  body('tag', 'Invalid tag. Min length: 3 symbols, max length: 6 symbols.').notEmpty().isLength({ min: 3, max: 6 }),
];
