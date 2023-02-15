import express from "express";
import * as courseController from "../controllers/course.controller.js";
import credentialsValidator from "../utils/credentials.validator.js";
import courseValidator from "../utils/course.validator.js";
import validationErrorHandlerUtil from "../utils/validationErrorHandler.util.js";


export const courseRouter = express.Router();

courseRouter.get('/courses', credentialsValidator, courseController.getCourses);

courseRouter.post('/courses', credentialsValidator, courseValidator, validationErrorHandlerUtil, courseController.createCourse)
courseRouter.get('/courses/:id', credentialsValidator, courseController.getSelectedCourse);
courseRouter.patch('/courses/:id', credentialsValidator, courseValidator, validationErrorHandlerUtil, courseController.updateSelectedCourse)

courseRouter.post('/courses/:id/modules', credentialsValidator, courseController.createModule)
courseRouter.get('/courses/:id/modules/:id', credentialsValidator, courseController.getSelectedModule)
courseRouter.patch('/courses/:id/modules/:id', credentialsValidator, courseController.updateSelectedModule)

courseRouter.post('/courses/:id/modules/:id/lessons', credentialsValidator, courseController.createLesson)
courseRouter.get('/courses/:id/modules/:id/lessons/:id', credentialsValidator, courseController.getSelectedLesson)
courseRouter.patch('/courses/:id/modules/:id/lessons/:id', credentialsValidator, courseController.updateSelectedLesson)


courseRouter.get('/courses/:id/view', credentialsValidator, courseController.viewCourse)


courseRouter.post('/courses');
