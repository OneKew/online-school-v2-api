import {User} from "../models/user.model.js";

class PassportService {
    async getUserData(reqBody) {
        const user = await User.findById(reqBody.id).catch(() => {
            return {message: `Can't find user with id: ${reqBody.id}`}
        });
        const {passwordHash, ...userData} = user["_doc"];
        return {...userData};
    }

    async updateProfile(reqBody) {
        const conditions = {_id: req.claims.id};
        const newUserData = {
            name: reqBody.name,
            phone: reqBody.phone
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
}

export default new PassportService();