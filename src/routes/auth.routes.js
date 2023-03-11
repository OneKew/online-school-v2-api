import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import validationErrorHandlerUtil from '../utils/validationErrorHandler.util.js';
import authValidator from '../utils/auth.validator.js';

export const authRouter = express.Router();

authRouter.post('/login',
    validationErrorHandlerUtil,
    authController.login);

authRouter.post('/register',
    authValidator,
    validationErrorHandlerUtil,
    authController.registerUser);
