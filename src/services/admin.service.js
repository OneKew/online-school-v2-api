import {User} from "../models/user.model.js";

class AdminService {


    async signUpForTheCourse(courses, id) {
        const user = await User.findByIdAndUpdate(id, {courses: courses})
            .catch(e => {
                console.log(e)
                throw new Error(`Can't find user with id: ${id}`)
            })
        const {passwordHash, ...userData} = user["_doc"];
        return {...userData};
    }
}

export default new AdminService();