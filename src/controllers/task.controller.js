import taskService from '../services/task.service.js';

export const editTask = async (req, res) => {

}


export const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getTasks(req.claims);
        res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const getModuleTasks = async (req, res) => {
    try {
        const tasks = await taskService.getModuleTasks(req.body);
        res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const getLessonTasks = async (req, res) => {
    try {
        const tasks = await taskService.getLessonTasks(req.body);
        res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body, req.claims)
        res.json(task)
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const getSelectedTask = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const deleteSelectedTask = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const answerTheTask = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};
