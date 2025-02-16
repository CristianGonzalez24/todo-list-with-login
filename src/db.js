import mongoose from 'mongoose';

process.loadEnvFile();

const MONGO_URI = process.env.MONGO_URI_LOCAL || process.env.MONGO_URI_ATLAS;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`MongoDB connection error: ${error.message}`);
    }
};