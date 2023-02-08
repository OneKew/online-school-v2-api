import express from "express";
import {authRouter} from "./routes/auth.routes.js";
import bodyParser from "body-parser";

export const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api/auth', authRouter)
