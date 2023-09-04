import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format')
    .matches(/@/, 'Email must contain @'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters long'),
});

export default validationSchema;
