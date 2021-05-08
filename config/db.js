const mongoose = require('mongoose');

// https://mongoosejs.com/docs/connections.html
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  console.log(`MongoDB подключена: ${conn.connection.host}`);
};

module.exports = connectDB;
