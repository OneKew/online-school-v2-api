import courseService from "../services/course.service.js";

//----------------------------------------------------------------------------------------------------------------------
//                                              Course
//----------------------------------------------------------------------------------------------------------------------

export const getCourses = async (req, res) => {
    try {
        const courses = await courseService.getCourses();
        res.json({courses})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

export const createCourse = async (req, res) => {
    try {
        const course = await courseService.createCourse(req);
        res.json({course})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

export const getSelectedCourse = async (req, res) => {
    try {
        const course = await courseService.getSelectedCourse(req.params.id);
        res.json({course})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

export const updateSelectedCourse = async (req, res) => {
    try {
        const course = await courseService.updateSelectedCourse(req);
        res.json({course})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

//----------------------------------------------------------------------------------------------------------------------
//                                              Module
//----------------------------------------------------------------------------------------------------------------------

export const createModule = async (req, res) => {
    try {
        const module = await courseService.createModule(req.body, req.params.id);
        res.json({module})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

export const getSelectedModule = async (req, res) => {
    try {
        const module = await courseService.getSelectedModule(req.params.id);
        res.json({module})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

export const updateSelectedModule = async (req, res) => {
    try {
        const module = await courseService.updateSelectedModule(req.body, req.params.id);
        res.json({module})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

//----------------------------------------------------------------------------------------------------------------------
//                                              Lesson
//----------------------------------------------------------------------------------------------------------------------

export const createLesson = async (req, res) => {
    try {
        const lesson = await courseService.createLesson(req.body, req.params.id);
        res.json({lesson})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

export const updateSelectedLesson = async (req, res) => {
    try {
        const lesson = await courseService.updateSelectedLesson(req.body, req.params.id);
        res.json({lesson})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

export const getSelectedLesson = async (req, res) => {
    try {
        const lesson = await courseService.getSelectedLesson(req.params.id);
        res.json({lesson})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}

//----------------------------------------------------------------------------------------------------------------------
//                                              Course View
//----------------------------------------------------------------------------------------------------------------------

export const getUserCourses = async (req, res) => {
    try {
        const courses = await courseService.getUserCourses(req.claims.id);
        res.json({courses})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}


export const viewCourse = async (req, res) => {
    try {
        const course = await courseService.viewCourse(req.params.id);
        res.json({course})
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}



