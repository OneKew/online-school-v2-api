import {getUserData, updateProfile} from "../services/passport.service.js";

export const getProfile = async (req, res) => {
    try {
        const message = await getUserData(req.user);
        if (message.message) res.status(400)
        else res.status(200)
        res.json({
            success: message.message ? false : true,
            message
        });
    } catch (err) {
        res.status(500).json(err)
    }
}

export const changeProfile = async (req, res) => {
    try {
        const updatedUser = await updateProfile(req);
        if (!updatedUser) res.status(404).end();
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(500).json(err)
    }
}