import {User} from "../models/user.model.js";
import {Role} from "../models/roles.model.js";

class AdminService {


    async signUpForTheCourse(courses, id) {
        const user = await User.findByIdAndUpdate(id, {courses: courses})
            .catch(e => {
                console.log(e);
                throw new Error(`Can't find user with id: ${id}`);
            })
        const {passwordHash, ...userData} = user["_doc"];
        return {...userData};
    }

    async createRoles(body) {
        for (const value of body.roles) {
            await new Role({value: value}).save();
        }
    }

    async updateUserClaims(body, id) {
        if (!body.roles) throw new Error('Invalid request');
        const roles = await Role.find({value: body.roles});
        console.log('roles', roles);
        if (roles.length != body.roles.length) throw new Error('Some of these roles aren\'t exist.');
        await User.findById(id).then(async usr => {
            console.log('user', usr);
            usr.roles = body.roles;
            await usr.save();
        });
        const updated = await User.findById(id);
        const {passwordHash, ...updatedData} = updated['_doc'];
        return updatedData;
    }
}

export default new AdminService();