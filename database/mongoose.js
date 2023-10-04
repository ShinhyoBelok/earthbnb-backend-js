require('dotenv').config();
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI)
    await mongoose.connect('mongodb://127.0.0.1:27017/earthbnb')
    console.log("Connected successfully to mongoDB");
  } catch (error) {
    console.log(`Failed to connect: ${error}`);
  }
}

connectDB();