import jwt from "jsonwebtoken";
import {jwtSecret} from "../../config/keys.config.js";

export default (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    if (token) {
        try {
            const decoded = jwt.verify(token, jwtSecret);
            if (decoded.roles.includes('ADMIN')) {
                req.claims = decoded
                next();
            }
        } catch (err) {
            return res.status(401).json({
                message: 'Invalid Grant.'
            });
        }
    } else {
        return res.status(401).json({
            message: 'Invalid Grant.'
        });
    }
}