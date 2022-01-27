import { useState, useEffect } from 'react';
import axios from 'axios';
import { IconButton, Badge, Popover, Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationItem from './NotificationItem';

export default function NotificationsNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notifications, setNotifications] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URI}/notifications`
        );
        setNotifications(response.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (notifications && notifications.length === 0) {
      setAnchorEl(null);
    }
  }, [notifications]);

  //const { data: notifications, isPending, error } = useFetch('notifications');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URI}/notifications/${id}`
      );
      setNotifications(notifications.filter((item) => item._id !== id));
    } catch (err) {
      setLoading(false);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <IconButton
        disabled={notifications && notifications.length === 0}
        onClick={handleClick}
      >
        <Badge
          badgeContent={notifications && notifications.length}
          color="secondary"
        >
          <NotificationsIcon
            sx={{
              color:
                notifications && notifications.length !== 0 ? 'white' : 'black',
            }}
          />
        </Badge>
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box
          sx={{
            padding: '8px',
          }}
        >
          {notifications &&
            notifications.map((notification) => (
              <NotificationItem
                key={notification._id}
                onDelete={() => handleDelete(notification._id)}
              >
                {notification}
              </NotificationItem>
            ))}
        </Box>
      </Popover>
    </Box>
  );
}
