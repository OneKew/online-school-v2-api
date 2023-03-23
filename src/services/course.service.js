import mongoose from 'mongoose';
import {Course} from '../models/course.model.js';
import {Module} from '../models/module.model.js';
import {Lesson} from '../models/lesson.model.js';
import {Task} from '../models/task.model.js';
import {User} from '../models/user.model.js';

class CourseService {
    async getCourses() {
        const courses = await Course.find().catch((e) => {
            throw new Error(e);
        });
        return courses;
    }

    async createCourse(req) {
        const doc = await new Course({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            tag: req.body.tag,
            owner: req.claims.id,
        });
        const course = await doc.save().catch((e) => {
            throw new Error(`Course already exists with Tag: ${req.body.tag}.`);
        });
        return course;
    }

    async getSelectedCourse(id) {
        const course = await Course.findById(id).catch(() => {
            throw new Error(`Can't find course with id: ${id}`);
        });
        const {owner, ...courseData} = course._doc;
        return courseData;
    }

    async updateSelectedCourse(req) {
        const newDoc = {
            name: req.body.name,
            tag: req.body.tag,
        };
        const course = await Course.findByIdAndUpdate(req.params.id, newDoc, {new: true})
            .catch((e) => {
                throw new Error(e);
            });
        return course;
    }

    async createModule(moduleData, courseId) {
        const doc = await new Module({
            _id: new mongoose.Types.ObjectId(),
            name: moduleData.name,
            course: courseId,
        });
        const module = await doc.save()
            .then(async (md) => {
                await Course.findByIdAndUpdate(courseId, {$push: {modules: [md._id]}});
                return md;
            })
            .catch((e) => {
                console.log(e);
                throw new Error('Module creating error');
            });
        return module;
    }

    async getSelectedModule(id) {
        const module = await Module.findById(id).catch(() => {
            throw new Error(`Can't find module with id: ${id}`);
        });
        return module;
    }

    async updateSelectedModule(body, id) {
        const newDoc = {
            name: body.name,
        };
        const module = await Module.findByIdAndUpdate(id, newDoc, {new: true})
            .catch((e) => {
                throw new Error(e);
            });
        return module;
    }

    async createLesson(body, moduleId) {
        const doc = await new Lesson({
            _id: new mongoose.Types.ObjectId(),
            module: moduleId,
            name: body.name,
            description: body.description,
            text: body.text,
            embedded: body.embedded,
        });
        const lesson = await doc.save()
            .then(async (ls) => {
                if (ls.embedded) {
                    await Task.findByIdAndUpdate(ls.embedded.checkpoints.question)
                        .catch((e) => {
                            throw new Error(e);
                        });
                }
                await Module.findByIdAndUpdate(moduleId, {$push: {lessons: [ls._id]}})
                    .catch((e) => {
                        throw new Error(e);
                    });
                return ls;
            })
            .catch((e) => {
                console.log(e);
                throw new Error('Lesson creating error');
            });
        return lesson;
    }

    async getSelectedLesson(id) {
        const lesson = await Lesson.findById(id).catch(() => {
            throw new Error(`Can't find lesson with id: ${id}`);
        });
        return lesson;
    }

    async updateSelectedLesson(body, id) {
        const newDoc = {
            name: body.name,
            description: body.description,
            text: body.text,
            embedded: body.embedded,
        };
        const lesson = await Lesson.findByIdAndUpdate(id, newDoc, {new: true})
            .catch((e) => {
                throw new Error(e);
            });
        return lesson;
    }

    async getUserCourses(id) {
        const {courses: courses1} = await User.findById(id).catch((e) => {
            console.log(e);
            throw new Error(`Can't find user with id: ${id}`);
        });
        const courses = await Course.find({_id: courses1});
        return courses;
    }

    async viewCourse(id) {
        const course = await Course.findById(id)
            .populate({
                path: 'modules',
                populate: {
                    path: 'lessons',
                },
            })
            .catch((e) => {
                console.log(e);
                throw new Error(`Can't find course with id: ${id}`);
            });
        return course;
    }
}

export default new CourseService();
