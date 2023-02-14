import {User} from "../models/user.model.js";
import bcrypt from "bcrypt"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


export async function loginWithCreds(regBody) {
    const user = await User.findOne({email: regBody.email});
    if (!user) return {message: 'User does not exist.'}
    const isValidPass = await bcrypt.compare(regBody.password, user.passwordHash)
    if (!isValidPass) return {message: 'Invalid credentials'}
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
    return {token: token}
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
    const user = await doc.save().catch(() => {
        return {message: 'User already exists.'}
    });
    return user
}

export const checkCredentials = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    if (token) {
        try {
            const decoded = jwt.verify(token, 'fullstackProjectSecret');
            req.claims = decoded
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

