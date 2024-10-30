import mongoose from 'mongoose';

process.loadEnvFile();

const MONGO_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};
