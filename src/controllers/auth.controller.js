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
        res.cookie('token', token);
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

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const userFind = await User.findOne({ email });
        if(!userFind) return res.status(400).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, userFind.password);
        if(!isMatch) return res.status(400).json({ message: 'Invalid password' });

        const token = await createdAccessToken({id: userFind._id});
        res.cookie('token', token);
        res.json({
            id: userFind._id,
            name: userFind.name,
            email: userFind.email,
            createdAt: userFind.createdAt,
            updatedAt: userFind.updatedAt,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const logout = (req, res) => {
    res.cookie('token', '', { expires: new Date(0) });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if(!userFound) return res.status(400).json({ message: 'User not found' });

    return res.json({ 
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
    });
    res.send('Profile');
}