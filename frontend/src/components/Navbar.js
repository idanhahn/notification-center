import {
  Typography,
  Button,
  IconButton,
  AppBar,
  Toolbar,
  Container,
  Box,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Box>
            <IconButton>
              <NotificationsIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
          <Box>
            <Button sx={{ color: 'white' }}>LOGIN</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
