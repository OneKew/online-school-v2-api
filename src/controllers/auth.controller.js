import {createUser} from "../services/passport.service.js";

export const login = (req, res) => {
    // const token = jwt.sign({
    //
    // })

    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    });
}

export const registerUser = (req, res) => {
    createUser(req)
    res.status(200).json({
    });
}