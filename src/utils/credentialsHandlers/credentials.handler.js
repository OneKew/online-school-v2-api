import jwt from 'jsonwebtoken';
import { jwtSecret } from '../../config/keys.config.js';

export default (req, res, next) => {
  const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
  if (token) {
    try {
      req.claims = jwt.verify(token, jwtSecret);
      return next();
    } catch (err) {
      return res.status(401).json({
        message: 'Invalid Grant.',
      });
    }
  } else {
    return res.status(401).json({
      message: 'Invalid Grant.',
    });
  }
};
