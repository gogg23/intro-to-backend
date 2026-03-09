import mongoose from "mongoose"; 

const connectDB = async () => {

try {
   const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
   console.log("DB Connected Successfully");
} catch (error) {
   console.error("Database connection error:", error);
}