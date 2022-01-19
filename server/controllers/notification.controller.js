const Notification = require('../models/notification');

const getNotifications = async (req, res) => {
  const notifications = await Notification.find();
  res.send(notifications);
};

const createNotification = async (req, res) => {
  const newNotification = new Notification({
    deletedAt: undefined,
    reatAt: undefined,
    recipient: req.body.recipient,
    content: req.body.content,
  });
  const response = await newNotification.save();
  res.send(response);
};

const readNotification = async (req, res) => {
  const updatedNotification = await Notification.findByIdAndUpdate(
    req.params.id,
    {
      readAt: new Date(),
    },
    { new: true }
  );
  res.send(updatedNotification);
};

const deleteNotification = async (req, res) => {
  const deletedNotification = await Notification.findByIdAndUpdate(
    req.params.id,
    {
      deletedAt: new Date(),
    },
    { new: true }
  );
  res.send(deletedNotification);
};

module.exports = {
  getNotifications,
  createNotification,
  readNotification,
  deleteNotification,
};
