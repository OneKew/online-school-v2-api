import express from "express";
import {authRouter} from "./routes/auth.routes.js";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

export const app = express()

app.use()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(cors())
app.use(morgan('dev'))

app.use('/api/auth', authRouter)
