import {createUser} from "../services/auth.service.js";
import jwt from "jsonwebtoken"
import {validationResult} from "express-validator"


export const login = (req, res) => {
    const token = jwt.sign({
            email: req.body.email,
            fullname: 'Ivan'
        },
        'secret123'
    );

    res.json({
        success: true,
        token
    })


    // res.status(200).json({
    //     login: {
    //         email: req.body.email,
    //         password: req.body.password
    //     }
    // });
}

export const registerUser = (req, res) => {

    console.log('req', req.body)

    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())


    const user = createUser(req.body)
    res.status(200).json(user);
}