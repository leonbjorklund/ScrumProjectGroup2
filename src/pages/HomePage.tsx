import { Box } from '@mui/material';
import About from '../components/About';
import Cases from '../components/Cases';
import ContactForm from '../components/ContactForm';
import Developers from '../components/Developers';
import Hero from '../components/Hero';
import Services from '../components/Services';

export default function HomePage() {
  return (
    <Box
      sx={{
        height: '100vh',
      }}
    >
      <Hero />
      <About />
      <Services />
      <Developers />
      <ContactForm />
      <Cases />
    </Box>
  );
}
