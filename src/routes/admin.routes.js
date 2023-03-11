import express from 'express';
import * as adminController from '../controllers/admin.controller.js';
import CourseExistingHandler from "../utils/credentialsHandlers/courseExisting.handler.js";
import AdminCredentialsHandler from "../utils/credentialsHandlers/adminCredentials.handler.js";

export const adminRouter = express.Router();

adminRouter.get('/users',
    AdminCredentialsHandler,
    adminController.getUsers);

adminRouter.post('/roles/new',
    AdminCredentialsHandler,
    adminController.createRoles);

adminRouter.get('/users/:id',
    AdminCredentialsHandler,
    adminController.getSelectedUser);

adminRouter.delete('/users/:id',
    AdminCredentialsHandler,
    adminController.deleteSelectedUser);

adminRouter.patch('/users/:id',
    AdminCredentialsHandler,
    adminController.updateUserClaims);

adminRouter.patch('/users/:id/courses',
    AdminCredentialsHandler,
    CourseExistingHandler,
    adminController.signUpForTheCourse);
