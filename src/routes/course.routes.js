import express from "express";
import * as courseController from "../controllers/course.controller.js";
import credentialsValidator from "../utils/credentials.validator.js";


export const courseRouter = express.Router();

courseRouter.get('/course', credentialsValidator, courseController.getCourses);

courseRouter.post('/course', credentialsValidator, courseController.createCourse)
courseRouter.get('/course/:id',credentialsValidator, courseController.getSelectedCourse);
courseRouter.patch('/course/:id', credentialsValidator, courseController.updateSelectedCourse)

courseRouter.post('/course/:id/modules', credentialsValidator, courseController.createModule)
courseRouter.get('/course/:id/modules/:id', credentialsValidator, courseController.getSelectedModule)
courseRouter.patch('/course/:id/modules/:id', credentialsValidator, courseController.updateSelectedModule)

courseRouter.post('/course/:id/modules/:id/lessons', credentialsValidator, courseController.createLesson)
courseRouter.get('/course/:id/modules/:id/lessons/:id', credentialsValidator, courseController.getSelectedLesson)
courseRouter.patch('/course/:id/modules/:id/lessons/:id', credentialsValidator, courseController.updateSelectedLesson)



courseRouter.get('/course/:id/view', credentialsValidator, courseController.viewCourse)



courseRouter.post('/course');

// adminRouter.post('/login', authController.login)
//
// adminRouter.post('/register', authController.registerUser)
