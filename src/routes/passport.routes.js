import express from "express";
import * as passportController from "../controllers/passport.controller.js";
import {checkCredentials} from "../services/auth.service.js";
import validationErrorHandlerUtil from "../utils/validationErrorHandler.util.js";
import passportValidator from "../utils/passport.validator.js";


export const passportRouter = express.Router()

passportRouter.get('/profile', checkCredentials, passportController.getProfile)

passportRouter.put('/profile', passportValidator, validationErrorHandlerUtil, checkCredentials, passportController.changeProfile)
