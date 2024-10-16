import dotenv from 'dotenv';

dotenv.config();

export const TOKEN_KEY = process.env.JWT_SECRET;