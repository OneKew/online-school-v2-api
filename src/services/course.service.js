import {Course} from "../models/course.model.js";
import mongoose from "mongoose";

class CourseService {

    async getUserCourses(claims) {
        const courses = await Course.findById(claims._id).catch(e => {
            throw new Error(`Can't find user with id: ${claims._id}`)
        })
        return courses;
    }

    async createCourse(req) {
        console.log('req', req.claims)
        const doc = new Course({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            tag: req.body.tag,
            owner: req.claims.id
        });
        const course = await doc.save().catch((e) => {
            throw new Error(`Course already exists with Tag: ${req.body.tag}.`);
        });
        return course;
    }

    async getSelectedCourse(req) {
        const course = await Course.findById(req.params.id).catch(() => {
            throw new Error(`Can't find course with id: ${req.params.id}`)
        })
        const {owner, ...courseData} = course['_doc'];
        return courseData;
    }

    async updateSelectedCourse(req) {
        const newDoc = {
            name: req.body.name,
            tag: req.body.tag
        }
        const course = await Course.findByIdAndUpdate(req.params.id, newDoc, {new: true})
            .catch((e) => {
                throw new Error(e);
            })
        return course;
    }
}

export default new CourseService();