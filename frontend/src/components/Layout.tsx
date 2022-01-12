import { Container } from '@mui/material';
import Navbar from './Navbar';

export default function Layout({ children }: { children: any }) {
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        {children}
      </Container>
    </div>
  );
}
