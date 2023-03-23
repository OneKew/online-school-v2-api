import jwt from "jsonwebtoken";
import {jwtSecret} from "../../config/keys.config.js";

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    if (token) {
        try {
            const decoded = jwt.verify(token, jwtSecret);
            console.log(decoded)
            if (decoded.roles.includes('TEACHER')) {
                req.claims = decoded;
                return next();
            } else {
                return res.status(401).json({
                    message: 'Invalid Grant.',
                });
            }
        } catch (err) {
            console.log(err)
            return res.status(401).json({
                message: 'Invalid Grant.',
            });
        }
    } else {
        return res.status(500).json();
    }
};