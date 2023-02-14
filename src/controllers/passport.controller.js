import {getUserData, updateProfile} from "../services/passport.service.js";

export const getProfile = async (req, res) => {
    try {
        const message = await getUserData(req.claims);
        if (message.message) res.status(400)
        else res.status(200)
        res.json(message);
    } catch (err) {
        res.status(500).json(err)
    }
}

export const changeProfile = async (req, res) => {
    try {
        const message = await updateProfile(req);
        if (message.message) res.status(400);
        else res.status(200)
        res.json(message)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}