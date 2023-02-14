import {User} from "../models/user.model.js";

export const getUserData = async (reqBody) => {
    const user = await User.findById(reqBody.id).catch(() => {
        return {message: `Can't find user with id: ${reqBody.id}`}
    });
    const {passwordHash, ...userData} = user["_doc"];
    return {...userData};
}

export const updateProfile = async (req) => {
    const conditions = {_id: req.claims.id};
    const newUserData = {
        name: req.body.name,
        phone: req.body.phone
    }
    const updated = User.findOneAndUpdate(conditions, newUserData)
        .then(upd => {
            if (upd['_doc']) {
                const {passwordHash, ...userData} = upd['_doc'];
                return userData
            } else return upd
        })
        .catch(() => {
            return {message: `Error. Can't update user with id: ${conditions._id}`}
        })
    return updated
}