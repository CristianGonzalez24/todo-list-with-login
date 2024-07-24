import mongoose from 'mongoose';

const MONGODB_URI = `mongodb+srv://cristianfabgonzalez:5SuJh0WQA7mdv5rQ@cluster0.hqfkaju.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};
