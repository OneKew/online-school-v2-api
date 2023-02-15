import {User} from "../models/user.model.js";

class PassportService {
    async getUserData(reqBody) {
        const user = await User.findById(reqBody.id).catch(() => {
            return {message: `Can't find user with id: ${reqBody.id}`}
        });
        const {passwordHash, ...userData} = user["_doc"];
        return {...userData};
    }

    async updateProfile(req) {
        const newUserData = {
            name: req.body.name,
            phone: req.body.phone
        }
        const updated = await User.findByIdAndUpdate(req.claims.id, newUserData, {new: true})
            .then(upd => {
                if (upd['_doc']) {
                    const {passwordHash, ...userData} = upd['_doc'];
                    return userData
                } else return upd
            })
            .catch(() => {
                return {message: `Error. Can't update user with id: ${req.claims.id}`}
            })
        return updated
    }
}

export default new PassportService();