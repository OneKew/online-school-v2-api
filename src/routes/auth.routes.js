import express from 'express';
import * as authController from '../controllers/auth.controller.js';
import validationErrorHandlerUtil from '../utils/validators/validationErrorHandler.util.js';
import authValidator from '../utils/validators/passport/auth.validator.js';

export const authRouter = express.Router();

authRouter.post('/login',
    validationErrorHandlerUtil,
    authController.login);

authRouter.post('/register',
    authValidator,
    validationErrorHandlerUtil,
    authController.registerUser);
