import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  Container,
  Box,
} from '@mui/material';
import NotificationsNavbar from './NotificationsNavbar';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <NotificationsNavbar />
          <Box>
            <Button sx={{ color: 'white' }}>LOGIN</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
