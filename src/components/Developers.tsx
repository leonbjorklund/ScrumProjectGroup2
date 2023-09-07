import { Box, SxProps, Theme, Typography } from '@mui/material';
import { devs } from '../assets/devs';
import DevCard from './DevCard';

export default function Developers() {
  return (
    <Box sx={DevBoxStyleSX}>
      <Typography sx={TitleStyleSX} variant='h2' color={'secondary'} id='developers'>
        Our Team
      </Typography>
      <Box sx={DevsStyleSX}>
        {devs.map(dev => (
          <DevCard key={dev.id} dev={dev} />
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
  padding: '1rem 0',
  fontWeight: 'bold',
  paddingBottom: '1rem',
  fontSize: '34px',
  [theme.breakpoints.down('md')]: {
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  },
});

const DevsStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'start',
  padding: '1rem 10px',
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
