import express from "express";
import * as passportController from "../controllers/passport.controller.js";
import validationErrorHandlerUtil from "../utils/validationErrorHandler.util.js";
import passportValidator from "../utils/passport.validator.js";
import credentialsValidator from "../utils/credentials.validator.js";


export const passportRouter = express.Router()

passportRouter.get('/profile', credentialsValidator, passportController.getProfile)

passportRouter.put('/profile', passportValidator, validationErrorHandlerUtil, credentialsValidator, passportController.changeProfile)
