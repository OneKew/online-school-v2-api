import { User } from '../models/user.model.js';

class PassportService {
  async getUserData(reqBody) {
    const user = await User.findById(reqBody.id).catch(() => ({ message: `Can't find user with id: ${reqBody.id}` }));
    const { passwordHash, roles, ...userData } = user._doc;
    return userData;
  }

  async updateProfile(req) {
    const newUserData = {
      name: req.body.name,
      phone: req.body.phone,
    };
    return await User.findByIdAndUpdate(req.claims.id, newUserData, { new: true })
      .then((upd) => {
        const { _doc } = upd;
        if (_doc) {
          const { passwordHash, ...userData } = _doc;
          return userData;
        }
        return upd;
      })
      .catch(() => ({ message: `Error. Can't update user with id: ${req.claims.id}` }));
  }
}

export default new PassportService();
