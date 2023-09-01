import { Box, SxProps, TextField, Theme, Typography } from '@mui/material';

export default function ContactForm() {
  return (
    <Box>
      <Box sx={ContactFormStyleSX}>
        <Typography sx={TitleStyleSX} variant='h3'>
          Contact us
        </Typography>
        <TextField sx={TextFieldStyleSX} required id='outlined-required' label='Name' />
        <TextField sx={TextFieldStyleSX} required id='outlined-required' label='E-mail' />
        <TextField sx={TextFieldStyleSX} required id='outlined-required' label='Message' />
      </Box>
    </Box>
  );
}

const ContactFormStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '1rem',
  padding: '1rem 0',
  backgroundImage:
    'url(https://github-production-user-asset-6210df.s3.amazonaws.com/45374596/264602128-f09ed321-6fe6-44da-b29f-44d34a1a6f1a.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  [theme.breakpoints.down('sm')]: {},
});

const TextFieldStyleSX: SxProps<Theme> = theme => ({
  backgroundColor: 'white',
  [theme.breakpoints.down('sm')]: {},
});

const TitleStyleSX: SxProps<Theme> = theme => ({
  fontWeight: 'bold',
  color: 'primary.main',
  padding: '1rem 0',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
  },
});
