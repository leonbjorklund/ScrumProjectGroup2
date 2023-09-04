import { Box } from '@mui/system';
import ContactForm from '../components/ContactForm';
import Developers from '../components/Developers';
import Portfolio from '../components/Portfolio';
import ProfileCard from '../components/ProfileCard';

export default function DevPage() {
  return (
    <Box>
      <ProfileCard />
      <Portfolio />
      <ContactForm />
      <Developers />
    </Box>
  );
}
