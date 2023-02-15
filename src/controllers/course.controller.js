import courseService from "../services/course.service.js";

//----------------------------------------------------------------------------------------------------------------------
//                                              Course
//----------------------------------------------------------------------------------------------------------------------

export const getCourses = async (req, res) => {
    try {
        const courses = await courseService.getUserCourses(req.claims);
        res.json({courses})
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
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
        const course = await courseService.getSelectedCourse(req);
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

}

export const updateSelectedModule = async (req, res) => {

}

//----------------------------------------------------------------------------------------------------------------------
//                                              Lesson
//----------------------------------------------------------------------------------------------------------------------

export const createLesson = async (req, res) => {

}

export const updateSelectedLesson = async (req, res) => {

}

export const getSelectedLesson = async (req, res) => {

}

//----------------------------------------------------------------------------------------------------------------------
//                                              Course View
//----------------------------------------------------------------------------------------------------------------------

export const viewCourse = async (req, res) => {

}
