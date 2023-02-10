import {User} from "../models/user.model.js";



 export function createUser(regData) {
        const user = new User({
            email: regData.email,
            password: regData.password,
            name: regData.name,
            phone: regData.phone,
            courses: []
        })

        user.save().then(console.log('User was created.')).catch(error => console.error(error))
    }
