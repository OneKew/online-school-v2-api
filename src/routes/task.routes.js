import express from 'express';
import * as taskController from '../controllers/task.controller.js';

export const taskRouter = express.Router();

taskRouter.get('/tasks',
    taskController.getTasks);

taskRouter.get('/modules/:id/tasks',
    taskController.getModuleTasks);

taskRouter.get('/lessons/:id/tasks',
    taskController.getLessonTasks);

taskRouter.post('/tasks',
    taskController.createTask);

taskRouter.get('/tasks/:id',
    taskController.getSelectedTask);

taskRouter.delete('/tasks/:id',
    taskController.deleteSelectedTask);

taskRouter.post('tasks/:id',
    taskController.answerTheTask) //ответ на задание