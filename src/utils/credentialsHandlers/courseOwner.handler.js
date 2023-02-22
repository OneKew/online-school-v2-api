//todo make handler
import courseService from "../../services/course.service.js";
import {User} from "../../models/user.model.js";
import {Types} from "mongoose";

export default async (req, res, next) => {

    try {

        const courseId = Types.ObjectId(req.params.id)
        const doc = await User.findById(req.claims.id, {courses: 1})
        const courses = doc.courses

        if (courses.indexOf(courseId) !== -1) {
            next()
        } else res.status(403).json({
            message: 'You don\'t have permissions to the course.'
        }).end();


    } catch (e) {
        console.log(e)
        return res.status(403).json({
            message: 'You don\'t have permissions to the course.'
        });
    }
}