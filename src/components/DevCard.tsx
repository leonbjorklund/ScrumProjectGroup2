import { Box, Button, SxProps, Theme, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Dev } from '../assets/devs';

interface DevCardProps {
  dev: Dev;
}

export default function DevCard({ dev }: DevCardProps) {
  const scrollDown = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -150,
    });
  };

  return (
    <Box sx={DevCardStyleSX}>
      <Box>
        <Box sx={DevImgStyleSX}>
          <img src={dev.img} alt='profilepic' style={{ height: '170px' }} />
        </Box>
        <Typography sx={DevNameStyleSX} variant='h1'>
          {dev.firstname + ' ' + dev.lastname}
        </Typography>
        <Typography sx={DevRoleStyleSX} variant='h1'>
          {dev.role}
        </Typography>
        <Typography sx={DevAboutStyleSX} variant='body1'>
          {dev.about}
        </Typography>
      </Box>

      <NavLink to={`/developers/${dev.firstname}`}>
        <Button onClick={() => scrollDown('profileCard')} sx={ButtonStyleSX}>
          Developers
        </Button>
      </NavLink>
    </Box>
  );
}

const DevCardStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '500px',
  alignItems: 'center',
  textAlign: 'center',
  width: '245px',
  margin: '1rem 0',
  padding: '1rem',
  borderRadius: '10px',
  transition: 'all .1s ease-in-out',
  '&:hover': {
    boxShadow: '1px 1px 15px #065E6F',
    transform: 'scale(1.03)',
  },
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    height: '100%',
    margin: '3rem 0',
  },
});
const DevImgStyleSX: SxProps<Theme> = theme => ({
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
});
const DevNameStyleSX: SxProps<Theme> = theme => ({
  fontSize: '21px',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
});
const DevRoleStyleSX: SxProps<Theme> = theme => ({
  fontSize: '18px',
  paddingTop: '.5rem',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
});
const DevAboutStyleSX: SxProps<Theme> = theme => ({
  fontSize: '14px',
  paddingTop: '2rem',
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
});
const ButtonStyleSX: SxProps<Theme> = theme => ({
  fontSize: '14px',
  padding: '.5rem 1rem',
  borderRadius: '55px',
  backgroundColor: '#065E6F',
  color: '#FFF',
  '&:hover': {
    color: '#065E6F',
    backgroundColor: '#FFF',
    border: '1px solid #3F6768',
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
});
