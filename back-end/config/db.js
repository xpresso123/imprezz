const mongoose = require('mongoose');
const connectDB = () => {
  mongoose
    .connect(`${process.env.MONGODB_URI} ` ||" mongodb://localhost:27017/imprezz", )
    .then(() => console.log('🔥 Connected to MongoDB'))
    .catch(err => {
      console.error('💩 Failed to connect to MongoDB', err);
      process.exit(1);
    });
};
module.exports = connectDB;
