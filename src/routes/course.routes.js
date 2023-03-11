import express from 'express';
import * as courseController from '../controllers/course.controller.js';
import courseValidator from '../utils/course.validator.js';
import validationErrorHandlerUtil from '../utils/validationErrorHandler.util.js';
import moduleValidator from '../utils/module.validator.js';
import lessonValidator from '../utils/lesson.validator.js';
import credentialsHandler from '../utils/credentialsHandlers/credentials.handler.js';
import courseOwnerHandler from '../utils/credentialsHandlers/courseOwner.handler.js';
import CourseExistingHandler from "../utils/credentialsHandlers/courseExisting.handler.js";

export const courseRouter = express.Router();

courseRouter.get('/courses/all',
    credentialsHandler,
    courseController.getCourses);

courseRouter.post('/courses',
    credentialsHandler,
    courseValidator,
    validationErrorHandlerUtil,
    courseController.createCourse);

courseRouter.get('/courses/:id',
    credentialsHandler,
    courseController.getSelectedCourse);

courseRouter.patch('/courses/:id',
    credentialsHandler,
    courseValidator,
    validationErrorHandlerUtil,
    courseController.updateSelectedCourse);

courseRouter.post('/courses/:id/modules',
    credentialsHandler,
    CourseExistingHandler,
    moduleValidator,
    validationErrorHandlerUtil,
    courseController.createModule);

courseRouter.get('/modules/:id',
    credentialsHandler,
    courseController.getSelectedModule);

courseRouter.patch('/modules/:id',
    credentialsHandler,
    moduleValidator,
    validationErrorHandlerUtil,
    courseController.updateSelectedModule);

courseRouter.post('/modules/:id/lessons',
    credentialsHandler,
    lessonValidator,
    validationErrorHandlerUtil,
    courseController.createLesson);

courseRouter.get('/lessons/:id',
    credentialsHandler,
    courseController.getSelectedLesson);

courseRouter.patch('/lessons/:id',
    credentialsHandler,
    lessonValidator,
    validationErrorHandlerUtil,
    courseController.updateSelectedLesson);

courseRouter.get('/courses',
    credentialsHandler,
    courseController.getUserCourses);

courseRouter.get('/courses/:id/view',
    credentialsHandler,
    courseOwnerHandler,
    courseController.viewCourse);

