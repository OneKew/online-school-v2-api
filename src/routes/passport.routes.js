import express from "express";
import * as passportController from "../controllers/passport.controller.js";
import {checkCredentials} from "../services/auth.service.js";


export const passportRouter = express.Router()

passportRouter.get('/profile', checkCredentials, passportController.getProfile)

passportRouter.put('/profile', checkCredentials, passportController.changeProfile)
