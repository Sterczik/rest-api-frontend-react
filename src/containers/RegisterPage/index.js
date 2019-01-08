import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validationSchema from './validationSchema';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const RegisterPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Register"
      defaultTitle="Register"
    >
      <meta name="description" content="Register" />
    </Helmet>
    <PageHeading title="Register" />
    <Form className="form">
      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={values.email}
        onChange={handleChange}
        margin="normal"
        fullWidth
        helperText={touched.email ? errors.email : ''}
        error={touched.email && Boolean(errors.email)}
      />
      <TextField
        id="name"
        name="name"
        label="Your Name"
        type="text"
        value={values.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
        helperText={touched.name ? errors.name : ''}
        error={touched.name && Boolean(errors.name)}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        value={values.password}
        onChange={handleChange}
        margin="normal"
        fullWidth
        helperText={touched.password ? errors.password : ''}
        error={touched.password && Boolean(errors.password)}
      />
      <TextField
        id="passwordConfirm"
        name="passwordConfirm"
        label="Password Confirmation"
        type="password"
        value={values.passwordConfirm}
        onChange={handleChange}
        margin="normal"
        fullWidth
        helperText={touched.passwordConfirm ? errors.passwordConfirm : ''}
        error={touched.passwordConfirm && Boolean(errors.passwordConfirm)}
      />
      <div>
        <Button type="submit" color="secondary">Register</Button>
      </div>
    </Form>
  </div>
);

const RegisterPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      name: '',
      password: '',
      passwordConfirm: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.register(values.email, values.name, values.password, values.passwordConfirm);
  }
})(RegisterPage);

const mapDispatchToProps = (dispatch) => ({
  register: (email, name, password, passwordConfirm) => dispatch(authActions.register(email, name, password, passwordConfirm))
});

export default connect(undefined, mapDispatchToProps)(RegisterPageFormik);
