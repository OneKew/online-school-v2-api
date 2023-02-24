import express from 'express';
import * as assignmentController from '../controllers/assignment.controller.js';

export const assignmentRouter = express.Router();

assignmentRouter.get('/assignments', assignmentController.getAssignments);

assignmentRouter.get('/modules/:id/assignments', assignmentController.getModuleAssignments);

assignmentRouter.get('/lessons/:id/assignments', assignmentController.getLessonAssignments);

assignmentRouter.post('/assignments', assignmentController.createAssignment);

assignmentRouter.get('/assignments/:id', assignmentController.getSelectedAssignment);

assignmentRouter.delete('/assignments/:id', assignmentController.deleteSelectedAssignment);
