import { Box, Theme, Typography } from '@mui/material';
import { CSSProperties } from 'react';

export default function Hero() {
  return (
    <Box sx={{ position: 'relative' }}>
      <img
        style={heroImgSX}
        src='https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264602286-1eed5533-3b5a-48d0-998f-372a34762772.png'
        alt='Example Image'
      />
      <Box sx={heroTextSX}>
        <Typography variant='h3' component='h1'>
          Welcome! We are Fifth Element <br></br>
          <Typography variant='h4' component='h2'>
            web agency based in Gothenburg
          </Typography>
        </Typography>
        <Typography style={scrollTextSX} variant='body1'>
          Scroll down to meet us
        </Typography>
      </Box>
    </Box>
  );
}

/* ----------------------
       CSS STYLING
---------------------- */

const heroImgSX: CSSProperties = {
  width: '100%',
  display: 'flex',
  height: 'auto',
  objectFit: 'cover',
  objectPosition: 'center',
  marginBottom: '20px',
};
const heroTextSX = (theme: Theme) => ({
  position: 'absolute',
  width: '100%',
  color: '#ffffff',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
});
const scrollTextSX: CSSProperties = {
  // position: 'relative',
  display: 'flex',
  justifyContent: 'flex-end',
  // right: 0,
  color: '#fff',
  textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
};
