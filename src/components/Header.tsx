import { AppBar, Box, Link, SxProps, Theme, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { images } from '../assets/images';

export default function Header() {
  const location = useLocation();

  return (
    <AppBar sx={headerStyleSX}>
      <Box>
        <Typography sx={textStyleSX} variant='h2'>
          Header
        </Typography>
        <img src={images.headerLogo} alt='header' />
        {location.pathname === '/' && <Link href='/developers'>Devs</Link>}
        {location.pathname === '/developers' && <Link href='/'>Home</Link>}
      </Box>
    </AppBar>
  );
}

/* ----------------------
       CSS STYLING
---------------------- */

const headerStyleSX: SxProps<Theme> = theme => ({
  backgroundColor: 'white',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: '20px',
  },
});

const textStyleSX: SxProps<Theme> = theme => ({
  color: 'red',
  fontFamily: 'poppins',
  [theme.breakpoints.down('md')]: {
    height: 'var(--header-height-md)',
  },
});
