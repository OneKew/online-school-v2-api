import {Course} from "../../models/course.model.js";

export default async (req, res, next) => {
    try {
        let idArr = req.body.courses || req.params.id;
        console.log(typeof idArr)
        if (typeof idArr != 'object') idArr = new Array(idArr)
        const courseIdArr = await Course.find({_id: {$in: idArr}}, '_id').then(value => {
            return value.map(v => v.id);
        })
        if (idArr.length !== courseIdArr.length) {
            const missingItems = idArr.filter(value => !courseIdArr.map(value => value.valueOf()).includes(value));
            throw new Error(`Course with ids: ${missingItems} can't be found.`);
        }
        next();
    } catch (e) {
        console.error(e)
        return res.status(404).json({
            message: e.message || 'Error'
        });
    }
};
