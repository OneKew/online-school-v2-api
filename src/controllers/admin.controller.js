import adminService from "../services/admin.service.js";

export const getUsers = async (req, res) => {

}

export const getSelectedUser = async (req, res) => {

}

export const deleteSelectedUser = async (req, res) => {

}

export const updateUserClaims = async (req, res) => {

}

export const signUpForTheCourse = async (req, res) => {
    try {
        const updatedUser = await adminService.signUpForTheCourse(req.body.courses, req.params.id)
        res.json(updatedUser)
    } catch (e) {
        console.log(e)
        res.status(500).json(e.message)
    }
}
