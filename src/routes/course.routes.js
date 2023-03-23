import express from 'express';
import * as courseController from '../controllers/course.controller.js';
import courseValidator from '../utils/validators/course/course.validator.js';
import validationErrorHandlerUtil from '../utils/validators/validationErrorHandler.util.js';
import moduleValidator from '../utils/validators/course/module.validator.js';
import lessonValidator from '../utils/validators/course/lesson.validator.js';
import credentialsHandler from '../utils/credentialsHandlers/credentials.handler.js';
import courseOwnerHandler from '../utils/credentialsHandlers/courseUser.handler.js';
import CourseExistingHandler from "../utils/credentialsHandlers/courseExisting.handler.js";
import teacherCredentialsHandler from "../utils/credentialsHandlers/teacherCredentials.handler.js";

export const courseRouter = express.Router();

courseRouter.get('/courses/all',
    credentialsHandler,
    courseController.getCourses);

courseRouter.post('/courses',
    credentialsHandler,
    courseValidator,
    teacherCredentialsHandler,
    validationErrorHandlerUtil,
    courseController.createCourse);

courseRouter.get('/courses/:id',
    credentialsHandler,
    teacherCredentialsHandler,
    courseController.getSelectedCourse);

courseRouter.patch('/courses/:id',
    credentialsHandler,
    teacherCredentialsHandler,
    courseValidator,
    validationErrorHandlerUtil,
    courseController.updateSelectedCourse);

courseRouter.post('/courses/:id/modules',
    credentialsHandler,
    teacherCredentialsHandler,
    CourseExistingHandler,
    moduleValidator,
    validationErrorHandlerUtil,
    courseController.createModule);

courseRouter.get('/modules/:id',
    credentialsHandler,
    teacherCredentialsHandler,
    courseController.getSelectedModule);

courseRouter.patch('/modules/:id',
    credentialsHandler,
    teacherCredentialsHandler,
    moduleValidator,
    validationErrorHandlerUtil,
    courseController.updateSelectedModule);

courseRouter.post('/modules/:id/lessons',
    credentialsHandler,
    teacherCredentialsHandler,
    lessonValidator,
    validationErrorHandlerUtil,
    courseController.createLesson);

courseRouter.get('/lessons/:id',
    credentialsHandler,
    teacherCredentialsHandler,
    courseController.getSelectedLesson);

courseRouter.patch('/lessons/:id',
    credentialsHandler,
    teacherCredentialsHandler,
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

courseRouter.get('/courses/:id/students',
    courseController.getCourseStudents)

courseRouter.get('/courses/:id/students/:student-id',
    teacherCredentialsHandler,
    courseController.getStudent)