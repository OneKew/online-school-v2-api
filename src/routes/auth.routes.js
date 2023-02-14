import express from "express";
import * as authController from "../controllers/auth.controller.js";
import {registrationValidator} from "../services/auth.service.js";
import validationErrorHandlerUtil from "../utils/validationErrorHandler.util.js";


export const authRouter = express.Router()

authRouter.post('/login', validationErrorHandlerUtil, authController.login)

authRouter.post('/register', validationErrorHandlerUtil, registrationValidator, authController.registerUser)
