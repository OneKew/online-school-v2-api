import {body} from "express-validator";
import {TaskTypes} from "../../constants/tasks-types.js";

export default [
    body('lessons', 'Invalid lessons.').exists(),
    body('modules', 'Invalid modules.').exists(),
    body('questions', 'Invalid questions.').notEmpty().isLength({min: 1}),
    body('name', 'Invalid name.').notEmpty(),
    body('type', 'Invalid task type').notEmpty().isIn(TaskTypes)
];