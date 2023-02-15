import passportService from "../services/passport.service.js";

export const getProfile = async (req, res) => {
    try {
        const message = await passportService.getUserData(req.claims);
        if (message.message) res.status(400)
        else res.status(200)
        res.json(message);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const changeProfile = async (req, res) => {
    try {
        const message = await passportService.updateProfile(req.body);
        if (message.message) res.status(400);
        else res.status(200)
        res.json(message)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}