const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_KEY;

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(uri, {
        dbName : 'mewsweb'
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // Exit process with failure
    }
  };


module.exports = {connectDB};
