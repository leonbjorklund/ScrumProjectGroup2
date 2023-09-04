import { Box, SxProps, Theme, Typography } from '@mui/material';
import { images } from '../assets/images';

export default function Cases() {
  return (
    <Box style={{ marginTop: '2.5rem' }}>
      <Typography sx={textSX} variant='h3'>
        Cases
      </Typography>
      <Box sx={logoContainerSX}>
        <img style={{ height: '40px' }} src={svd} alt='logo of svd' />
        <img src={starBucks} alt='logo of starbucks' />
        <img src={swedBank} alt='logo of swedbank' />
        <img src={disney} alt='logo of disney' />
        <img src={kia} alt='logo of kia' />
      </Box>
    </Box>
  );
}

const svd = images.svd;
const starBucks = images.starBucks;
const swedBank = images.swedBank;
const disney = images.disney;
const kia = images.kia;

const logoContainerSX: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  paddingBottom: '2.5rem',
  gap: '2rem',
  '& img': {
    height: '59px',
  },
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
});

const textSX: SxProps<Theme> = {
  display: 'flex',
  fontSize: '26px',
  justifyContent: 'center',
};
