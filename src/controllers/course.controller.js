import courseService from "../services/course.service.js";

export const getCourses = (req, res) => {
    try {
        const courses = courseService.getCourses();
    } catch (e) {
        console.log(e)
        res.status(500).json(e)
    }
}

export const createCourse = (req, res) => {

}

export const getSelectedCourse = (req, res) => {

}
export const viewCourse = (req, res) => {

}

export const updateSelectedLesson = (req, res) => {

}

export const createModule = (req, res) => {

}

export const updateSelectedModule = (req, res) => {

}

export const getSelectedModule = (req, res) => {

}

export const createLesson = (req, res) => {

}

export const updateSelectedCourse = (req, res) => {

}

export const getSelectedLesson = (req, res) => {

}
