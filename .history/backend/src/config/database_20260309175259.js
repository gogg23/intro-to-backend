import mongoose from "mongoose"; 

const connectDB = async () => {

try {
   const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
   console.log('Database connected successfully');
} catch (error) {
    console.error('Database connection error:', error);
    throw error;
}