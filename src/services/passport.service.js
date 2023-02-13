import {User} from "../models/user.model.js";

export const getUserData = async (reqBody) => {
    const user = await User.findById(reqBody.id)
    const {passwordHash, ...userData} = user["_doc"]
    return {...userData}
}