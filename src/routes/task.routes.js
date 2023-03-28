import express from 'express';
import * as taskController from '../controllers/task.controller.js';
import credentialsHandler from "../utils/credentialsHandlers/credentials.handler.js";
import teacherCredentialsHandler from "../utils/credentialsHandlers/teacherCredentials.handler.js";
import taskValidator from "../utils/validators/course/task.validator.js";
import validationErrorHandlerUtil from "../utils/validators/validationErrorHandler.util.js";

export const taskRouter = express.Router();

taskRouter.get('/tasks',
    credentialsHandler,
    teacherCredentialsHandler,
    taskController.getTasks);

taskRouter.get('/modules/:id/tasks', //задания модуля
    credentialsHandler,

    teacherCredentialsHandler,
    taskController.getModuleTasks);

taskRouter.get('/lessons/:id/tasks',//задания урока
    credentialsHandler,
    teacherCredentialsHandler,

    taskController.getLessonTasks);

taskRouter.post('/tasks',
    credentialsHandler,
    teacherCredentialsHandler,
    //todo add validators
    taskValidator,
    validationErrorHandlerUtil,
    taskController.createTask);

taskRouter.patch('/tasks/:id',
    credentialsHandler,
    teacherCredentialsHandler,
    taskValidator,
    validationErrorHandlerUtil,
    taskController.editTask)

taskRouter.get('/tasks/:id',
    credentialsHandler,
    taskController.getSelectedTask);

taskRouter.delete('/tasks/:id',
    credentialsHandler,
    teacherCredentialsHandler,
    //todo add validators
    taskController.deleteSelectedTask);


taskRouter.post('/courses/:courseId/tasks/:taskId/results',
    credentialsHandler,
    //todo add validators
    taskController.answerTheTask) //ответ на задание