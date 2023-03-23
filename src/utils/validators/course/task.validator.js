import {body} from "express-validator";

export default [
    body('lessons', 'Invalid lessons.').notEmpty(),
    body('modules', 'Invalid modules.').notEmpty(),
    body('questions', 'Invalid questions.').notEmpty().isLength({min: 1}),
    body('name', 'Invalid name.').notEmpty(),
];