import userRouter from './routes/user.route.js';
import express from 'express';

const app = express(); //create an express app

app.use(express.json()); //middleware to parse json body


//routes import
import userRoute from './routes/user.route.js';

//routes declaration
app.use('/api/v1/users', userRouter);

//example route: http://localhost:4000/api/v1/users/register
export default app;
c