require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const notificationRoutes = require('./routes/notifications.route');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});

app.use('/api/notifications', notificationRoutes);

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.bpwoj.mongodb.net/notification-center?retryWrites=true&w=majority`,
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connected to database');
      app.listen(process.env.PORT, () => {
        console.log(`Server running on port: ${process.env.PORT}.`);
      });
    }
  }
);
