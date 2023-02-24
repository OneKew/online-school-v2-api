import assignmentService from '../services/assignment.service.js';

export const getAssignments = async (req, res) => {
  try {
    const assignments = await assignmentService.getAssignments(req.body);
    res.json(assignments);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const getModuleAssignments = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const getLessonAssignments = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const createAssignment = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const getSelectedAssignment = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};

export const deleteSelectedAssignment = async (req, res) => {
  try {

  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
};
