import mongoose from "mongoose"; 

const connectDB = async () => {

    try {
       const connectionInstace = await mongoose.connect(process.env.MONGODB_URI, {
    }
        catch (error) {
}