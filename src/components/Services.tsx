import CircleIcon from '@mui/icons-material/Circle';
import { Box, List, ListItem, SxProps, Theme, Typography } from '@mui/material';
import { images } from '../assets/images';

export default function Services() {
  const listItems = ['E-commerce', 'Consultation', 'Websites', 'UI/UX design', 'SEO'];

  return (
    <Box sx={CompanyServicesStyleSX}>
      <Box sx={ServicesImageStyleSX}>
        <img
          src={images.companyServices}
          alt='Company services'
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
      <Box sx={TextBoxStyleSX}>
        <Typography sx={TitleStyleSX} variant='h3' color={'secondary'}>
          Company services
        </Typography>
        <List sx={{ ...TextStyleSX, display: 'flex', flexDirection: 'column' }}>
          {listItems.map(item => (
            <ListItem key={item}>
              <CircleIcon sx={{ fontSize: 'small', marginRight: '1rem' }} />
              <Typography sx={TextStyleSX} variant='h3'>
                {item}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

/* ----------------------
CSS STYLING
---------------------- */

const CompanyServicesStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  margin: '2rem 0',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
});

const ServicesImageStyleSX: SxProps<Theme> = theme => ({
  flex: 1,
  maxHeight: '100%',
  overflow: 'hidden',
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
});

const TextBoxStyleSX: SxProps<Theme> = theme => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'primary.main',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
});

const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  color: 'white',
  padding: '1rem 0',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
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
