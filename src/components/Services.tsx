import CircleIcon from '@mui/icons-material/Circle';
import { Box, List, ListItem, SxProps, Theme, Typography } from '@mui/material';
import { images } from '../assets/images';

export default function Services() {
  const listItems = ['E-commerce', 'Consultation', 'Websites', 'UI/UX design', 'SEO'];

  return (
    <Box sx={CompanyServicesStyleSX}>
      <Box sx={ServicesImageStyleSX}>
        <img src={images.companyServices} alt='WhoWeAre' style={{maxWidth: '100%', maxHeight: "100%"}} />
      </Box>
      <Box sx={TextBoxStyleSX}>
        <Typography sx={TitleStyleSX} variant='h3' color={'secondary'}>
          Company services
        </Typography>
        <List sx={{...TextStyleSX, display: "flex", flexDirection: "column"}}>
          {listItems.map(item => (
            <ListItem key={item}>
              <CircleIcon sx={{ fontSize: 'small', marginRight: "1rem" }} />
              <Typography variant='h3'>{item}</Typography>
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
  display: 'flex',
  padding: '2rem 0',
  marginTop: '2rem',
  height: '465px',
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
});

const TextBoxStyleSX: SxProps<Theme> = theme => ({
  display: 'flex',
  flexDirection: 'column',
  paddingRight: '1rem',
  width: '100%',
  height: '465px',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.main',
  color: 'white',
  [theme.breakpoints.down('md')]: {},
});

const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  color: 'white',
  [theme.breakpoints.down('md')]: {},
});

const TextStyleSX: SxProps<Theme> = theme => ({
  fontSize: '26px',
  paddingRight: '1rem',
  width: '100%',
  fontFamily: 'Poppins, sans-serif',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
});

const ServicesImageStyleSX: SxProps<Theme> = theme => ({
  height: '100%',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down('md')]: {
  },
});
