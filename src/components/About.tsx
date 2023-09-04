import { Box, SxProps, Theme, Typography } from '@mui/material';
import { images } from '../assets/images';

export default function About() {
  return (
    <Box sx={WhoWeAreBoxStyleSX}>
      <Box sx={TextBoxStyleSX}>
        <Typography sx={TitleStyleSX} variant='h3' color={'secondary'}>
          Who we are
        </Typography>
        <Typography sx={TextStyleSX} variant='h3'>
          A dedicated web-development team, crafting high-quality web apps tailored to our clients'
          needs. Excellence in every pixel, every line of code.
        </Typography>
      </Box>

      <Box sx={TeamImageStyleSX}>
        <img
          src={images.whoWeAre}
          alt='WhoWeAre'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
}

/* ----------------------
       CSS STYLING
---------------------- */

const WhoWeAreBoxStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  margin: '2rem 0',
  gap: '1.5rem',
  [theme.breakpoints.down('sm')]: {
    margin: '0',
    gap: '0',
    flexDirection: 'column-reverse',
  },
});

const TextBoxStyleSX: SxProps<Theme> = theme => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'center',
  textAlign: 'end',
  paddingLeft: '1rem',
  [theme.breakpoints.down('sm')]: {
    padding: '0 1rem',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
});

const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  paddingBottom: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem 0',
    fontSize: '30px',
  },
});

const TextStyleSX: SxProps<Theme> = theme => ({
  fontFamily: 'Poppins, sans-serif',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  },
});

const TeamImageStyleSX: SxProps<Theme> = theme => ({
  flex: 1,
  maxHeight: '100%',
  overflow: 'hidden',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
});
