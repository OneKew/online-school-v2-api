import {body} from "express-validator";

export default [
    body('name', 'Invalid name.').notEmpty().isLength({min: 3}),
]