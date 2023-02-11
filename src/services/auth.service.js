import {User} from "../models/user.model.js";
import {body} from 'express-validator'

//todo make validation error messages
export const registrationValidator = [
    body('email', '').isEmail(),
    body('password').isLength({min: 8}),
    body('name').isLength({min: 3})
]


export function createUser(regBody) {
    const user =  new User({
        email: regBody.email,
        passwordHash: regBody.password,
        name: regBody.name,
        phone: regBody.phone,
        courses: []
    })
    user.save().then(console.log('User was created.')).catch(error => console.error(error))
    return user
}
