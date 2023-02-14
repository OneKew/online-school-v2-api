import {body} from "express-validator";

export default [
    body('email', 'Invalid email.').isEmail(),
    body('password', 'Password minimum length 8 symbols.').notEmpty().isLength({min: 8}),
    body('name', 'Invalid name.').notEmpty().isLength({min: 3})
]