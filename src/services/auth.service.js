import {User} from "../models/user.model.js";
import bcrypt from "bcrypt"
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {Role} from "../models/roles.model.js";
import {jwtSecret} from "../config/keys.config.js";

class AuthService {
    async login(regBody) {
        const user = await User.findOne({email: regBody.email});
        if (!user) return {message: 'User does not exist.'}
        const isValidPass = await bcrypt.compare(regBody.password, user.passwordHash)
        if (!isValidPass) return {message: 'Invalid credentials'}
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                name: user.name,
                phone: user.phone,
                roles: user.roles
            },
            jwtSecret,
            {
                expiresIn: '30d'
            }
        )
        return {token: token}
    }

    async createUser(reqBody) {
        const password = reqBody.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const defaultRole = await Role.findOne({value: 'USER'});
        const doc = new User({
            _id: new mongoose.Types.ObjectId(),
            email: reqBody.email,
            passwordHash: hash,
            name: reqBody.name,
            phone: reqBody.phone,
            roles: [defaultRole.value],
            courses: []
        });
        const response = await doc.save().catch(() => {
            return {message: 'User already exists.'};
        });
        if (response['_doc']) {
            const {passwordHash, ...userData} = response['_doc'];
            return userData
        } else
            return response
    }


}

export default new AuthService();
