import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),

  name: Yup.string('Enter a name')
    .min(3, 'Name must contain at least 3 characters')
    .max(30, 'Name must contain maximum 30 characters')
    .required('Name is required'),

  password: Yup.string('')
    .min(6, 'Password must contain at least 6 characters')
    .max(30, 'Password must contain maximum 30 characters')
    .matches(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'Password must contain at least 1 number, 1 capital and 1 small letter')
    .required('Enter your password'),

  passwordConfirm: Yup.string('Enter your password')
    .required('Confirm your password')
    .oneOf([Yup.ref('password')], 'Password does not match')
});
