import {User} from "../models/user.model.js";
import {body} from "express-validator"
import bcrypt from "bcrypt"
import mongoose, {Schema} from "mongoose";
import {re} from "@babel/core/lib/vendor/import-meta-resolve.js";
import jwt from "jsonwebtoken";

//todo make validation error messages
export const registrationValidator = [
    body('email', '').isEmail(),
    body('password').isLength({min: 8}),
    body('name').isLength({min: 3})
]

export async function loginWithCreds(regBody) {
    const user = await User.findOne({email: regBody.email});
    if (!user) return {message: 'Not valid credentials.'}
    const isValidPass = await bcrypt.compare(regBody.password, user.passwordHash)
    if (!isValidPass) return {message: 'Not valid credentials'}
    const token = jwt.sign(
        {
            id: user._id,
            email: user.email,
            name: user.name,
            phone: user.phone
        },
        'fullstackProjectSecret',
        {
            expiresIn: '30d'
        }
    )
    return token
}

export async function createUser(regBody) {
    const password = regBody.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    const doc = new User({
        _id: new mongoose.Types.ObjectId(),
        email: regBody.email,
        passwordHash: hash,
        name: regBody.name,
        phone: regBody.phone,
        courses: []
    })
    const user = await doc.save();
    return user
}

export const checkCredentials = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    if (token) {
        try {
            const decoded = jwt.verify(token, 'fullstackProjectSecret');
            req.user = decoded
            next();
        } catch (err) {
            return res.status(401).json({
                message: 'Invalid Grant.'
            });
        }
    } else {
        return res.status(401).json({
            message: 'Invalid Grant.'
        });
    }
}

