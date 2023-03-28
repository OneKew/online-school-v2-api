import {Task} from "../models/task.model.js";
import mongoose from "mongoose";
import {answerTheTask, deleteSelectedTask} from "../controllers/task.controller.js";
import {TaskTypes} from "../utils/constants/tasks-types.js";

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

    async getModuleTasks(id) {
        console.log(id)
        const tasks = await Task
            .find({modules: id})
            .catch(e => {
                console.log(e);
                throw new Error(`Can't get tasks by owner Id`);
            });
        return tasks;
    }

    async getLessonTasks(id) {
        const tasks = await Task
            .find({lessons: id})
            .catch(e => {
                console.log(e);
                throw new Error(`Can't get tasks by owner Id`);
            });
        return tasks;
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

    async editTask(body, id) {
        const task = await Task.findByIdAndUpdate(id, body, {new: true})
            .catch((e) => {
                throw new Error(e);
            });
        return task;
    }

    async getSelectedTask(id) {
        const task = await Task.findById(id)
            .catch((e) => {
                throw new Error(e);
            });
        return task
    }

    async deleteSelectedTask(id) {
        await Task.findByIdAndDelete(id)
            .catch((e) => {
                throw new Error(e);
            });
    }

    async answerTheTask(answeredQuestions, taskId) {

        const task = await Task.findById(taskId)
            .catch((e) => {
                throw new Error(e);
            });

        const taskQuestions = task.questions
        taskQuestions.forEach(taskQuestion => {
            const currentQuestion = answeredQuestions.find(q => q._id === taskQuestion._id.valueOf())
            if (currentQuestion) {
                const correctAnswers = taskQuestion.answers.filter(answer => answer.correct === true)
                this.compareAnswers(currentQuestion, correctAnswers, taskQuestion.weight);
            } else {
                throw new Error(`Question not found in answers`)
            }
        })

        // if (answer === task['_doc'].answers.)
    }

    compareAnswers(inputQuestion, correctQuestions, weight) {
        let result = 0;
        correctQuestions.forEach(corAns => {

            const scoreStep = weight / correctQuestions.length;

            if (inputQuestion.answers.find(ans => {
                if (ans._id === corAns._id.valueOf() && (ans.value === corAns.value)) return ans
            })) result += scoreStep

            console.log('score', result, '\n score step', scoreStep)
        })
    }
}

export default new TaskService();
