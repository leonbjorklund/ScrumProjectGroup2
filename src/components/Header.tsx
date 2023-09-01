import MenuIcon from '@mui/icons-material/Menu';
import { Link, SxProps, Theme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { images } from '../assets/images';
const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setTimeout(() => {
      setMobileOpen(prevState => !prevState);
    }, 10); // 300ms delay, adjust as needed
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={drawerStyleSX}>
      <img
        src={images.headerLogo}
        alt='header'
        style={{
          width: '150px',
          height: '100%',
          objectFit: 'cover',
          margin: '1rem',
        }}
      />
      <Link href='/' sx={linkStyleSX}>
        Home
      </Link>
      <Link href='developers' sx={linkStyleSX}>
        Developers
      </Link>
      <Link href='#' sx={linkStyleSX}>
        Contact
      </Link>
      <Link href='#' sx={linkStyleSX}>
        Login
      </Link>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={headerStyleSX} component='nav'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href='/' underline='none'>
              <img
                src={images.headerLogo}
                alt='header'
                style={{ width: '150px', height: '100%', objectFit: 'cover' }}
              />
            </Link>
          </Box>
          <Box sx={linkBoxStyleSX}>
            <Link href='/' sx={linkStyleSX}>
              Home
            </Link>
            <Link href='/developers' sx={linkStyleSX}>
              Developers
            </Link>
            <Link href='#' sx={linkStyleSX}>
              Contact
            </Link>
            <Link href='#' sx={linkStyleSX}>
              Login
            </Link>
          </Box>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ color: '#065E6F', mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor='right'
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            color: '#065E6F',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

const headerStyleSX: SxProps = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  height: '80px',
};

const linkBoxStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  gap: '2.5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

const linkStyleSX: SxProps<Theme> = theme => ({
  color: '#065E6F',
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

const drawerStyleSX: SxProps = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '.5rem',
};
