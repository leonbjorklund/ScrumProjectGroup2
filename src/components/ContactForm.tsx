import { Box, SxProps, TextField, Theme, Typography } from '@mui/material';

export default function ContactForm() {
  return (
    <Box sx={ContactFormStyleSX}>
      <Box sx={BackgroundImageStyleSX}></Box>
      <Typography sx={TitleStyleSX} variant='h3'>
        Contact us
      </Typography>
      <TextField sx={TextFieldStyleSX} required id='outlined-required' label='Name' />
      <TextField sx={TextFieldStyleSX} required id='outlined-required' label='E-mail' />
      <TextField sx={TextFieldStyleSX} required id='outlined-required' label='Message' />
    </Box>
  );
}

const ContactFormStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  minHeight: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '1rem',
  padding: '1rem 0',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {},
});

const BackgroundImageStyleSX: SxProps<Theme> = theme => ({
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage:
    'url(https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264602128-f09ed321-6fe6-44da-b29f-44d34a1a6f1a.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'brightness(0.6)',
  zIndex: -1,
  [theme.breakpoints.down('sm')]: {},
});

const TextFieldStyleSX: SxProps<Theme> = theme => ({
  backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {},
});

const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
  padding: '1rem 0',
  position: 'relative',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
  },
});
