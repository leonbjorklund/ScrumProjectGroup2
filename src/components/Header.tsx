import { AppBar, Box, Link, SxProps, Theme, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar sx={headerStyleSX}>
      <Box>
        <Typography sx={textStyleSX} variant='h2'>
          Header
        </Typography>
        <Link href='/Developers'>Devs</Link>
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
