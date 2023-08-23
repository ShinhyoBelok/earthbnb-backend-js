require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected successfully to mongoDB");
  } catch (error) {
    console.log(`Failed to connect: ${error}`);
  }
}

connectDB();