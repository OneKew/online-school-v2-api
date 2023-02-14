import {User} from "../models/user.model.js";

export const getUserData = async (reqBody) => {
    const user = await User.findById(reqBody.id).catch(() => {
        return {message: `Can't find user with id: ${reqBody.id}`}
    });
    const {passwordHash, ...userData} = user["_doc"];
    return {...userData};
}

export const updateProfile = async (req) => {
    const conditions = {_id: req.params.id};
    const newUserData = {
        name: req.body.name,
        phone: req.body.phone
    }
    User.updateOne(conditions, newUserData).then(doc => {
        return doc
    })

}