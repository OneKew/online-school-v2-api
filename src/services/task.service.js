import {Task} from "../models/task.model.js";
import {Module} from "../models/module.model.js";
import mongoose from "mongoose";

class TaskService {

    async getTasks(claims) {
        const id = claims.id
        const tasks = await Task.find({ownerId: id})
            .then((t) => {
                console.log('tasks: ', t)
            })
            .catch(e => {
                console.log(e);
                throw new Error(`Can't get tasks by owner Id`);
            });
        return tasks;
    }

    async getModuleTasks(body) {
        // const tasks = await Module.findById(body.id)
        //     .populate({path: 'tasks'})
        const tasks = await Task.find({
            // modules: {$elemMatch: {body.id}}
            $elemMatch: {modules: body.id}
        }).then((t) => {
            console.log('tasks: ', t)
        }).catch(e => {
            console.log(e);
            throw new Error(`Can't get tasks by owner Id`);
        });
        return tasks;
    }

    async getLessonTasks(body) {

    }

    async createTask(body, claims) {
        const doc = await new Task({
            _id: new mongoose.Types.ObjectId(),
            ownerId: claims.id,
            name: body.name,
            type: body.type,
            lessons: body.lessons || [],
            modules: body.modules || [],
            questions: body.questions,
        });
        const task = await doc.save()
            .catch(e => {
                console.log(e);
                throw new Error(`Error occurred while task creating.`)
            });
        return task;
    }

}

export default new TaskService();
