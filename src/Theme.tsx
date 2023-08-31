import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3F6768',
      contrastText: '#000000',
    },
    secondary: {
      main: '#065E6F',
    },
    background: {
      paper: '#f5f5f5',
      default: '#FFFFFF',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Poppins, sans-serif', 'Frank Ruhl Libre'].join(','),
    h1: {
      fontFamily: "'Poppins', serif",
    },
    h2: {
      fontFamily: "'Frank Ruhl Libre', serif",
      color: '#065E6F',
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '36px',
    },
    body1: {
      fontFamily: "'Frank Ruhl Libre', serif",
    },
  },
});
