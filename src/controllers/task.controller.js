import taskService from '../services/task.service.js';

export const editTask = async (req, res) => {
    try {
        const tasks = await taskService.editTask(req.body, req.params.id);
        res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
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
        const tasks = await taskService.getModuleTasks(req.params.id);
        res.json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const getLessonTasks = async (req, res) => {
    try {
        const tasks = await taskService.getLessonTasks(req.params.id);
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
        const task = await taskService.getSelectedTask(req.params.id)
        res.json(task)
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};

export const deleteSelectedTask = async (req, res) => {
    try {
        taskService.deleteSelectedTask(req.params.id).then(
            res.status(200)
        )
    } catch (e) {
        console.log(e);
        res.status(500).json('Deleting error');
    }
};

export const answerTheTask = async (req, res) => {
    try {
        const result = await taskService.answerTheTask(req.body.questions, req.params.taskId)
        res.json(result)
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
};
