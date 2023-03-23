import { body } from 'express-validator';

export default [
  body('name', 'Name must be not empty.').notEmpty(),
  body('embedded.*.url', 'Embedded URL must be not empty.').notEmpty(),
  body('embedded.*.checkpoints', 'Checkpoints must be not empty.').notEmpty(),
  body('embedded.*.checkpoints.timestamp', 'Checkpoint timestamp must be not empty.').notEmpty(),
  body('embedded.*.checkpoints.question', 'Checkpoint question must be not empty.').notEmpty(),
];
