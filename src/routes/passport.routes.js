import express from 'express';
import * as passportController from '../controllers/passport.controller.js';
import validationErrorHandlerUtil from '../utils/validators/validationErrorHandler.util.js';
import passportValidator from '../utils/validators/passport/passport.validator.js';

export const passportRouter = express.Router();

passportRouter.get('/profile',
    passportController.getProfile);

passportRouter.put('/profile',
    passportValidator,
    validationErrorHandlerUtil,
    passportController.changeProfile);
