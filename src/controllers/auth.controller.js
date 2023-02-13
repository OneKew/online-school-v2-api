import {createUser, loginWithCreds} from "../services/auth.service.js";
import {validationResult} from "express-validator"


export const login = async (req, res) => {
    try {
        const token = await loginWithCreds(req.body)
        if (token.message) res.status(400).json({message: 'Invalid Credentials.'})
        res.status(200).json(
            {
                success: true,
                token: token
            }
        )
    } catch (err) {
        res.status(400).json({message: 'Invalid Credentials.'})
    }
}

export const registerUser = async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) return res.status(400).json(errors.array())
        const user = await createUser(req.body)

        res.status(200).json(user)

    } catch (err) {
        console.error(err)
        res.status(400).json({message: 'Registration error.'})
    }
}