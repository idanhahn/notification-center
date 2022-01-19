const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
  {
    deletedAt: Date,
    readAt: Date,
    content: String,
    recipient: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Notification', NotificationSchema);
