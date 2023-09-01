import { Box, SxProps, Theme, Typography } from '@mui/material';
import { devs } from '../assets/devs';
import DevCard from './DevCard';

export default function Developers() {
  return (
    <Box sx={DevBoxStyleSX}>
      <Typography sx={TitleStyleSX} variant='h3' color={'secondary'}>
        Our team of developers
      </Typography>

      <Box sx={DevsStyleSX}>
        {devs.map(dev => (
          <DevCard key={dev.firstname} dev={dev} />
        ))}
      </Box>
    </Box>
  );
}

const DevBoxStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {},
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

const DevsStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'start',
  paddingTop: '3rem',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    paddingTop: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '1rem',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
