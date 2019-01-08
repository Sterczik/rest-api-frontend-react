import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});
