import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '../config.js';

export const authRequired = (req, res, next) => {
    // console.log(req.headers);
    const { token } = req.cookies;
    if(!token) return res.status(401).json({ message: 'Unauthorized' });

    jwt.verify(token, TOKEN_KEY, (err, user) => {
        if(err) return res.status(401).json({ message: 'Invalid token' });

        req.user = user;
        next();
    });
};