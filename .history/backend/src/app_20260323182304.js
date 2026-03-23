import express from "express";

const app = express(); //create an express app

//routes import
import userRoute from "./routes/user.route.js";

//routes declaration
app.use("/api/users); 

export default app;