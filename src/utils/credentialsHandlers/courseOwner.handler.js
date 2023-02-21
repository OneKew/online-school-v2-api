//todo make handler
import courseService from "../../services/course.service.js";

export default async (req, res, next) => {

    try {
        const courses = await courseService.getUserCourses(req.claims.id)
            .catch(e => {
                throw new Error(e)
            });
        const courseId = req.params.id

        const selectedCourse = await courseService.getSelectedCourse(courseId)
            .catch(e => {
                throw new Error(e)
            });
        if (courses === null) return res.status(403).json({
            message: 'You don\'t have permissions to the course.'
        }).end()
        if (courses.indexOf(selectedCourse) !== -1) {
            next();
        }

        return res.status(403).json({
            message: 'You don\'t have permissions to the course.'
        });


    } catch (e) {
        console.log(e)
        return res.status(403).json({
            message: 'You don\'t have permissions to the course.'
        });
    }
}