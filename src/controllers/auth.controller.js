import User from '../models/user.model.js';

export const register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        const userSaved = await user.save();
        res.json(userSaved);
    } catch (error) {
        console.log(error);
    }
};

export const login = (req, res) => {
    res.send('login');
}