import { Box, SxProps, Theme, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { devs } from '../assets/devs';
import NotFound from '../components/NotFound.tsx';

export default function ProfileCard() {
  const params = useParams();

  const dev = devs.find(dev => dev.firstname === params.firstname);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  if (!dev) {
    return <NotFound />;
  }

  return (
    <Box sx={DevCardStyleSX}>
      <div id='profileCard' />
      <Box sx={DevImgStyleSX}>
        <img src={dev.img} alt='profilepic' />
      </Box>
      <Box sx={DevPresentationStyleSX}>
        <Typography sx={DevNameStyleSX} variant='h1'>
          {dev.firstname + ' ' + dev.lastname}
        </Typography>
        <Typography sx={DevRoleStyleSX} variant='h1'>
          {dev.role}
        </Typography>
        <Box sx={DevCompBoxStyleSX}>
          {dev.comp.map((comp, index) => (
            <Typography sx={DevCompStyleSX} variant='h1' key={index}>
              {comp}
            </Typography>
          ))}
        </Box>
        <Box sx={DevDescStyleSX}>
          <Typography variant='body1'>{dev.profileDesc}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

const DevCardStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  height: '400px',
  padding: '4rem 3rem',
  gap: '3rem',
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
const DevImgStyleSX: SxProps<Theme> = theme => ({
  '& img': {
    height: '170px',
  },
  [theme.breakpoints.down('md')]: {
    '& img': {
      height: '120px',
    },
  },
  [theme.breakpoints.down('sm')]: {},
});
const DevPresentationStyleSX: SxProps<Theme> = theme => ({
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
const DevNameStyleSX: SxProps<Theme> = theme => ({
  fontSize: '58px',
  [theme.breakpoints.down('md')]: {
    fontSize: '34px',
  },
  [theme.breakpoints.down('sm')]: {},
});
const DevRoleStyleSX: SxProps<Theme> = theme => ({
  fontSize: '40px',
  fontWeight: 'bold',
  color: '#065E6F',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {},
});
const DevCompBoxStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    marginTop: '.5rem',
    justifyContent: 'center',
  },
});
const DevCompStyleSX: SxProps<Theme> = theme => ({
  fontSize: '18px',
  paddingTop: '.5rem',
  margin: '.2rem .5rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
  },
  [theme.breakpoints.down('sm')]: {},
});
const DevDescStyleSX: SxProps<Theme> = theme => ({
  fontSize: '16px',
  width: '70%',
  paddingTop: '2rem',
  [theme.breakpoints.down('md')]: {
    width: '90%',
  },
  [theme.breakpoints.down('sm')]: {},
});
