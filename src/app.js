import express from "express";
import {authRouter} from "./routes/auth.routes.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import {mongoURI} from "./config/keys.config.js";
import {passportRouter} from "./routes/passport.routes.js";
import {courseRouter} from "./routes/course.routes.js";
import {adminRouter} from "./routes/admin.routes.js";
import {assignmentRouter} from "./routes/assignment.routes.js";

export const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use(cors())
app.use(morgan('dev'))

mongoose.set('strictQuery', true);
mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then(console.log('MongoDB connected.'))
    .catch(error => console.error(error))

app.use('/api/auth', authRouter)
app.use('/api', passportRouter, courseRouter, assignmentRouter)
app.use('/api/admin', adminRouter)