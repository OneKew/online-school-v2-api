import {User} from "../models/user.model.js";
import {Role} from "../models/roles.model.js";

class AdminService {

    async getUsers() {
        let users = await User.find();
        users = users.map(usr => {
            const {passwordHash, courses, ...data} = usr['_doc'];
            return data;
        });
        return users
    }

    async getSelectedUser(id) {
        const user = await User.findById(id)
            .catch(() => {
                throw new Error(`Can't find user with id: ${id}`);
            })
        const {passwordHash, ...usrData} = user['_doc'];
        return usrData;
    }

    async signUpForTheCourse(courses, id) {
        const user = await User.findByIdAndUpdate(id, {courses: courses})
            .catch(e => {
                console.log(e);
                throw new Error(`Can't find user with id: ${id}`);
            })
        const {passwordHash, ...userData} = user["_doc"];
        return {...userData};
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

    async deleteSelectedUser(id) {
        await User.findByIdAndDelete(id);
        return;
    }

    async createRoles(body) {
        for (const value of body.roles) {
            await new Role({value: value}).save();
        }
    }

}

export default new AdminService();