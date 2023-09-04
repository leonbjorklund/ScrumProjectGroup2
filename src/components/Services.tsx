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
        <Typography sx={TitleStyleSX} variant='h2' color={'secondary'}>
          Company services
        </Typography>
        <List sx={{ ...TextStyleSX, display: 'flex', flexDirection: 'column' }}>
          {listItems.map(item => (
            <ListItem key={item} sx={ListItemStyleSX}>
              <CircleIcon sx={{ fontSize: 'small', marginRight: '1rem' }} />
              <Typography sx={TextStyleSX} variant='body1'>
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
  alignItems: 'start',
  justifyContent: 'center',
  textAlign: 'center',
  backgroundColor: 'primary.main',
  color: 'white',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    alignItems: 'center',
  },
});

const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  color: 'white',
  padding: '1rem 0 1rem 4rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    padding: '1rem 0 1rem 2rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
});

const ListItemStyleSX: SxProps<Theme> = theme => ({
  paddingTop: '0',
  paddingLeft: '6rem',
  [theme.breakpoints.down('md')]: {
    paddingLeft: '2rem',
  },
});

const TextStyleSX: SxProps<Theme> = theme => ({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '26px',
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
    paddingRight: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '22px',
  },
});
