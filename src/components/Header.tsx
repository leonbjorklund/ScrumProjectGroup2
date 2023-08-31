import { AppBar, Box, Link, SxProps, Theme } from '@mui/material';
import { images } from '../assets/images';

export default function Header() {
  return (
    <AppBar sx={headerStyleSX}>
      <Box sx={headerLogoStyleSX}>
        <Link href='/' underline='none'>
          <img
            src={images.headerLogo}
            alt='header'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Link>
      </Box>
      <Box sx={linkBoxStyleSX}>
        <Link href='/' sx={linkStyleSX}>
          Home
        </Link>
        <Link href='/developers' sx={linkStyleSX}>
          Devs
        </Link>
        <Link href='#' sx={linkStyleSX}>
          Contact
        </Link>
        <Link href='#' sx={linkStyleSX}>
          Login
        </Link>
      </Box>
    </AppBar>
  );
}

const headerStyleSX: SxProps = {
  backgroundColor: 'white',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const headerLogoStyleSX: SxProps<Theme> = theme => ({
  width: '150px',
  height: '100%',
  marginLeft: '2rem',
  paddingTop: '.4rem',
  [theme.breakpoints.down('md')]: {
    marginLeft: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    width: '125px',
  },
});

const linkBoxStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  gap: '3rem',
  marginRight: '4rem',
  [theme.breakpoints.down('md')]: {
    gap: '2.5rem',
    marginRight: '3rem',
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    gap: '1.5rem',
    marginRight: '2rem',
    fontSize: '.9rem',
  },
});

const linkStyleSX: SxProps<Theme> = theme => ({
  color: 'secondary.main',
  fontFamily: "'Poppins', serif",
  fontSize: '1.1rem',
  fontWeight: '700',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },

  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
});
