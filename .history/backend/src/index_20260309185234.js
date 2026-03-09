import dotenv from 'dotenv';
import connectDB from './config/database.js';

dotenv.config({
  path: './.env',
});

const startServer = async () => {
  try {
    await connectDB();
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app
  } catch (error) {}
};
