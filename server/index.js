const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./routes/auth');

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://phuc1234:1234@mern-learnit.lhdka.mongodb.net/mern-learnit?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true, //option to remove warning
      }
    );

    console.log('mongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();

const app = express();

app.use('/api/auth', authRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));