import express from "express";

const app = express(); //create an express app

//routes import
import userRoute from "./routes/user.route.js";

//routes declaration
app.use("/api/v1/users", userRouter);  

//example route http://localhost:5000/api/v1/users/register
export default app; 