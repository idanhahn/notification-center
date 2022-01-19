const express = require('express');

const notificationController = require('../controllers/notification.controller');

const router = express.Router();

router.get('/', notificationController.getNotifications);

router.post('/', notificationController.createNotification);

router.get('/:id', notificationController.readNotification);

router.delete('/:id', notificationController.deleteNotification);

module.exports = router;
