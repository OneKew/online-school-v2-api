import authService from "../services/auth.service.js";


export const login = async (req, res) => {
    try {
        const message = await authService.login(req.body);
        if (message.message) res.status(400)
        else res.status(200)
        res.json(
            {
                success: message.message ? false : true,
                message
            }
        )
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

export const registerUser = async (req, res) => {
    try {
        const response = await authService.createUser(req.body)
        if (response.message) res.status(400)
        else res.status(200)
        res.json(response);
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}