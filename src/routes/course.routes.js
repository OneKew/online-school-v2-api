import express from "express";
import * as courseController from "../controllers/course.controller.js";
import {checkCredentials} from "../services/auth.service.js";


export const courseRouter = express.Router();

courseRouter.get('/course', checkCredentials, courseController.getCourses);

courseRouter.post('/course', checkCredentials, courseController.createCourse)
courseRouter.get('/course/:id',checkCredentials, courseController.getSelectedCourse);
courseRouter.patch('/course/:id', checkCredentials, courseController.updateSelectedCourse)

courseRouter.post('/course/:id/modules', checkCredentials, courseController.createModule)
courseRouter.get('/course/:id/modules/:id', checkCredentials, courseController.getSelectedModule)
courseRouter.patch('/course/:id/modules/:id', checkCredentials, courseController.updateSelectedModule)

courseRouter.post('/course/:id/modules/:id/lessons', checkCredentials, courseController.createLesson)
courseRouter.get('/course/:id/modules/:id/lessons/:id', checkCredentials, courseController.getSelectedLesson)
courseRouter.patch('/course/:id/modules/:id/lessons/:id', checkCredentials, courseController.updateSelectedLesson)



courseRouter.get('/course/:id/view', checkCredentials, courseController.viewCourse)



courseRouter.post('/course');

// adminRouter.post('/login', authController.login)
//
// adminRouter.post('/register', authController.registerUser)
