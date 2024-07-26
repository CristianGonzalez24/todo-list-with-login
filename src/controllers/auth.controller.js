import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createdAccessToken } from '../libs/jwt.js';

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: passwordHash, });
        const userSaved = await user.save();
        const token = await createdAccessToken({id: userSaved._id});
        res.cookie('jwt', token);
        res.json({
            id: userSaved._id,
            name: userSaved.name,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = (req, res) => {
    res.send('login');
}