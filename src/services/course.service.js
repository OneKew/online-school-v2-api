import {Course} from "../models/course.model.js";
import {Module} from "../models/module.model.js";
import mongoose from "mongoose";


class CourseService {

    async getUserCourses(claims) {
        const courses = await Course.findById(claims._id).catch(e => {
            throw new Error(`Can't find user with id: ${claims._id}`)
        })
        return courses;
    }

    async createCourse(req) {
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

    async createModule(moduleData, courseId) {
        const doc = new Module({
            _id: new mongoose.Types.ObjectId(),
            name: moduleData.name,
            course: courseId
        });
        const module = await doc.save()
            .then(async md => {
                await Course.findByIdAndUpdate(courseId, {$push: {modules: [md['_id']]}});
                return md;
            })
            .catch((e) => {
                console.log(e);
                throw new Error(`Module creating error`);
            });
        return module
    }

    async getSelectedModule(id) {
        const module = await Module.findById(id).catch(() => {
            throw new Error(`Can't find course with id: ${id}`)
        })
        return module;
    }

    async updateSelectedModule(body, id) {
        const newDoc = {
            name: body.name,
        }
        const module = await Module.findByIdAndUpdate(id, newDoc, {new: true})
            .catch((e) => {
                throw new Error(e);
            })
        return module;
    }
}

export default new CourseService();