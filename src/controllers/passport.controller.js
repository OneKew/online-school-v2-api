import {getUserData} from "../services/passport.service.js";

export const getProfile = async (req, res) => {
    try {
        const user = await getUserData(req.user)
        res.json({response: true, user})
    } catch (err) {

    }
}

export const changeProfile = (req, res) => {


}