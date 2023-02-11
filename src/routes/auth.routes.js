import express from "express";
import * as authController from "../controllers/auth.controller.js";
import {registrationValidator} from "../services/auth.service.js";


export const authRouter = express.Router()

authRouter.post('/login', authController.login)

authRouter.post('/register', registrationValidator, authController.registerUser)
