// todo make handler
import { Types } from 'mongoose';
import { User } from '../../models/user.model.js';

export default async (req, res, next) => {
  try {
    const courseId = Types.ObjectId(req.params.id);
    const doc = await User.findById(req.claims.id, { courses: 1 });
    const { courses } = doc;

    if (courses.indexOf(courseId) !== -1) {
      return next();
    }
    res.status(403).json({
      message: 'You don\'t have permissions to the course.',
    }).end();
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      message: 'You don\'t have permissions to the course.',
    });
  }
};
