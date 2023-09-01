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
        <img src={images.whoWeAre} alt='WhoWeAre' />
      </Box>
    </Box>
  );
}

/* ----------------------
       CSS STYLING
---------------------- */

const WhoWeAreBoxStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  padding: '2rem 0',
  gap: '1rem',
  height: '465px',
  width: '100%',
  [theme.breakpoints.down('md')]: {},
});

const TextBoxStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'end',
  paddingLeft: '1rem',
  width: '100%',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {},
});

const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  [theme.breakpoints.down('md')]: {},
});

const TextStyleSX: SxProps<Theme> = theme => ({
  paddingLeft: '1rem',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
});

const TeamImageStyleSX: SxProps<Theme> = theme => ({
  // backgroundImage:
  //   'url(https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264602797-07aeb851-4c9a-49d0-870d-030f3c1c08af.png)',
  // backgroundSize: 'cover',
  height: '100%',
  [theme.breakpoints.down('md')]: {
  },
});
