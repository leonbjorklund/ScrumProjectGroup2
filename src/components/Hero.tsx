import { Box, SxProps, Theme, Typography } from '@mui/material';
import { images } from '../assets/images';

export default function Hero() {
  return (
    <Box sx={heroContainerSX}>
      <Box sx={heroTextSX}>
        <Typography sx={header1SX} variant='h3'>
          Welcome! We are Fifth Element <br></br>
          <Typography sx={header2SX} variant='h4' component='h2'>
            web agency based in Gothenburg
          </Typography>
          <Typography sx={scrollTextSX} variant='h5'>
            Scroll down to meet our team
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

/* ----------------------
       CSS STYLING
---------------------- */

const bgImg = images.hero;

const heroContainerSX: SxProps<Theme> = theme => ({
  background: `url(${bgImg})`,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  minHeight: '500px',
  // padding: '15rem 0',
  [theme.breakpoints.down('md')]: {
    // padding: '8rem 0',
    fontsize: '1rem',
    color: 'red',
  },
});

const heroTextSX: SxProps<Theme> = {
  width: '100%',
  height: '100%',
  color: '#ffffff',
  textAlign: 'center',
  textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const header1SX: SxProps<Theme> = theme => ({
  fontSize: '3.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
});

const header2SX: SxProps<Theme> = theme => ({
  fontSize: '2rem',
  marginTop: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
});

const scrollTextSX: SxProps<Theme> = theme => ( {
  position: 'absolute',
  bottom: '0',
  left: '50%',
  transform: 'translateX(-50%)',
  marginBottom: '2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
    width: '100%',
  },
 
});
