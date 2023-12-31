import { Box, SxProps, Theme, Typography } from '@mui/material';
import { images } from '../assets/images';

export default function About() {
  return (
    <Box sx={WhoWeAreBoxStyleSX}>
      <Box sx={TextBoxStyleSX}>
        <Typography sx={TitleStyleSX} variant='h2' color={'secondary'}>
          Who we are
        </Typography>
        <Typography sx={TextStyleSX} variant='body1'>
          A dedicated web-development team, crafting high-quality web apps tailored to our clients'
          needs. Excellence in every pixel, every line of code.
        </Typography>
      </Box>

      <Box sx={TeamImageStyleSX}>
        <img
          src={images.whoWeAre}
          alt='WhoWeAre'
          style={{ width: '100%', height: '450px', objectFit: 'cover' }}
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

export const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  paddingBottom: '1rem',
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    fontSize: '28px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '26px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '1rem 0',
  },
});

const TextStyleSX: SxProps<Theme> = theme => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '26px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
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
