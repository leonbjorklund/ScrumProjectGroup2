import { Box, Button, SxProps, TextField, Theme, Typography } from '@mui/material';
import { useFormik } from 'formik';
import validationSchema from '../assets/validationSchema';

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema,
    onSubmit: () => {
      console.log('Det funkar!');
      formik.resetForm();
    },
  });
  return (
    <Box sx={ContactFormStyleSX}>
      <Box sx={BackgroundImageStyleSX} />
      <Box component='form' noValidate onSubmit={formik.handleSubmit} sx={ContactFormStyleSX}>
        <Typography sx={TitleStyleSX} variant='h3'>
          Contact us
        </Typography>
        <TextField
          sx={TextFieldStyleSX}
          required
          variant='filled'
          label='Name'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          sx={TextFieldStyleSX}
          required
          variant='filled'
          label='E-mail'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={TextFieldStyleSX}
          required
          variant='filled'
          label='Message'
          multiline
          rows={5}
          name='message'
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />
        <Button variant='contained' type='submit' sx={ButtonStyleSX}>
          Send
        </Button>
      </Box>
    </Box>
  );
}

const ContactFormStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  height: "600px",
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
  width: '400px',
  backgroundColor: 'white',
  '& .MuiFormHelperText-root': {
    color: 'black', 
    fontFamily: 'Poppins, sans-serif',
  },
  '& .MuiInputBase-root::before, & .MuiInputBase-root::after': {
    borderBottomColor: 'black !important', 
  },
  '& .MuiInput-underline::before': {
    borderBottom: 'none', 
  },
  '& .MuiInput-underline::after': {
    borderBottom: 'none !important', 
  },
  [theme.breakpoints.down('sm')]: {
    width: '250px',
  },
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

const ButtonStyleSX: SxProps<Theme> = theme => ({
  backgroundColor: 'white',
  width: '150px',
  '&:hover': {
    color: 'white',
  },
  [theme.breakpoints.down('sm')]: {},
});
