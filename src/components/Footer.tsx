import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Box, SxProps, Theme } from '@mui/material';
import { theme } from '../Theme';
import { images } from '../assets/images';

export default function Footer() {
  return (
    <Box sx={footerStyleSX}>
      <Box sx={contentStyleSX}>
        <Box sx={mapStyleSX}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.9744158048757!2d11.966787113131323!3d57.69990447375766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff36e37243e65%3A0x407a7ae10b08b087!2sVasaplatsen%2C%20G%C3%B6teborg!5e0!3m2!1sen!2sse!4v1693555079138!5m2!1sen!2sse'
            style={{ border: '0' }}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>
        <Box sx={contactStyleSX}>
          <Box sx={contactTextStyleSX}>
            <HomeIcon fontSize='small' /> Vasagatan 18B
          </Box>
          <Box sx={contactTextStyleSX}>
            <EmailIcon fontSize='small' /> FifthElement@FifthElement.com
          </Box>
          <Box sx={contactTextStyleSX}>
            <PhoneIphoneIcon fontSize='small' /> +46 702 337 341
          </Box>
        </Box>
      </Box>
      <Box sx={footerLogoStyleSX}>
        <img
          src={images.footerLogo}
          alt='footer'
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
}

const footerStyleSX: SxProps<Theme> = theme => ({
  backgroundColor: 'primary.main',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});
const contentStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  margin: '2rem',

  [theme.breakpoints.down('sm')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
});

const mapStyleSX: SxProps<Theme> = theme => ({
  borderRadius: '5px',
  width: '100%',

  height: '150px',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    maxWidth: '250px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  },
});

const contactStyleSX: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  color: 'white',
  fontFamily: theme.typography?.fontFamily?.split(',')[0].trim() || 'sans-serif',
};

const contactTextStyleSX: SxProps = {
  display: 'flex',
  alignItems: 'center',
  gap: '.5rem',
};

const footerLogoStyleSX: SxProps<Theme> = theme => ({
  width: '200px',
  marginRight: '2rem',
  [theme.breakpoints.down('md')]: {
    marginBottom: '1rem',
    marginRight: '0',
  },
});
