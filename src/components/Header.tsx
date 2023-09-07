import MenuIcon from '@mui/icons-material/Menu';
import { Button, SxProps, Theme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { images } from '../assets/images';
const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const scrollDown = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
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
      <NavLink to='/'>
        <Button sx={linkStyleSX}>Home</Button>
      </NavLink>
      <Button onClick={() => scrollDown('developers')} sx={linkStyleSX}>
        Developers
      </Button>
      <Button onClick={() => scrollDown('contact')} sx={linkStyleSX}>
        Contact
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar sx={headerStyleSX} component='nav'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to='/'>
              <img
                src={images.headerLogo}
                alt='header'
                style={{ width: '150px', height: '100%', objectFit: 'cover' }}
              />
            </NavLink>
          </Box>
          <Box sx={linkBoxStyleSX}>
            <NavLink to='/'>
              <Button sx={linkStyleSX}>Home</Button>
            </NavLink>
            <Button onClick={() => scrollDown('developers')} sx={linkStyleSX}>
              Developers
            </Button>
            <Button onClick={() => scrollDown('contact')} sx={linkStyleSX}>
              Contact
            </Button>
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
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem',
    gap: '1.5rem',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

const linkStyleSX: SxProps<Theme> = theme => ({
  color: '#065E6F',
  fontFamily: "'Poppins', serif",
  textDecoration: 'none',
  fontSize: '1.1rem',
  textTransform: 'none',
  fontWeight: '700',
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
