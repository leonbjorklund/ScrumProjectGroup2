import { Box, Button, SxProps, TextField, Theme, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { useLocation, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { devs } from '../assets/devs';
import validationSchema from '../assets/validationSchema';

export default function ContactForm() {
  const notify = () => {
    toast.success('Your message has been sent!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };
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
      notify();
    },
  });

  const location = useLocation();
  const { firstname } = useParams<{ firstname: string }>();
  const isHomePage = location.pathname === '/';
  const dev = devs.find(dev => dev.firstname === firstname);
  const title = isHomePage ? 'Contact us' : `Contact ${dev?.firstname}`;

  return (
    <Box sx={ContactFormStyleSX} id='contact'>
      <Box sx={BackgroundImageStyleSX} />
      <Box component='form' noValidate onSubmit={formik.handleSubmit} sx={ContactFormStyleSX}>
        <Typography sx={TitleStyleSX} variant='h3'>
          {title}
        </Typography>
        <div style={{ height: '75px' }}>
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
        </div>
        <div style={{ height: '75px' }}>
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
        </div>
        <div style={{ height: '170px' }}>
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
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </div>
        <Button variant='contained' type='submit' sx={ButtonStyleSX}>
          Send
        </Button>
        <ToastContainer />
      </Box>
    </Box>
  );
}

const ContactFormStyleSX: SxProps<Theme> = theme => ({
  width: '100%',
  height: '600px',
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
    color: 'black !important',
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
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'black !important',
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
  fontSize: '30px',
  [theme.breakpoints.down('md')]: {
    paddingTop: '0rem',
    fontSize: '30px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '30px',
  },
});

const ButtonStyleSX: SxProps<Theme> = theme => ({
  backgroundColor: 'secondary.main',
  color: 'white',
  width: '150px',
  '&:hover': {
    color: 'secondary.main',
    backgroundColor: 'white',
  },
  [theme.breakpoints.down('sm')]: {},
});
