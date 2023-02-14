import {body} from "express-validator";

export default [
    body('name', 'Invalid name.').notEmpty().isLength({min: 3}),
    body('phone', 'Invalid phone number.').notEmpty().isLength({min: 11, max: 18}),

]