import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import { authRouter } from './routes/auth.routes.js';
import { mongoURI } from './config/keys.config.js';
import { passportRouter } from './routes/passport.routes.js';
import { courseRouter } from './routes/course.routes.js';
import { adminRouter } from './routes/admin.routes.js';
import { taskRouter } from './routes/task.routes.js';
import adminCredentialsHandler from './utils/credentialsHandlers/adminCredentials.handler.js';
import credentialsHandler from './utils/credentialsHandlers/credentials.handler.js';

export const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('dev'));

mongoose.set('strictQuery', true);
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(console.log('MongoDB connected.'))
  .catch((error) => console.error(error));

app.use('/api/auth', authRouter);
app.use('/api', credentialsHandler, passportRouter, courseRouter, taskRouter);
app.use('/api/admin', adminCredentialsHandler, adminRouter);
