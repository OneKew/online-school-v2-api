import adminService from '../services/admin.service.js';

export const getSelectedUser = async (req, res) => {
  try {
    const user = await adminService.getSelectedUser(req.params.id);
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export const deleteSelectedUser = async (req, res) => {
  try {
    await adminService.deleteSelectedUser(req.params.id);
    res.status(204);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await adminService.getUsers(req.body);
    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export const updateUserClaims = async (req, res) => {
  try {
    const user = await adminService.updateUserClaims(req.body, req.params.id);
    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export const createRoles = async (req, res) => {
  try {
    await adminService.updateRoles();
    res.json('Roles have been created.');
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};

export const signUpForTheCourse = async (req, res) => {
  try {
    const updatedUser = await adminService.signUpForTheCourse(req.body.courses, req.params.id);
    res.json(updatedUser);
  } catch (e) {
    console.log(e);
    res.status(500).json(e.message);
  }
};
