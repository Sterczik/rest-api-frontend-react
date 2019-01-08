import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import validationSchema from './validationSchema';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const LoginPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Login"
      defaultTitle="Login"
    >
      <meta name="description" content="Login" />
    </Helmet>
    <PageHeading title="Login" />
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
      <div className="form__buttons">
        <Button type="submit" color="secondary">Login</Button>
        <Link to="/forgot-password">
          Forgot password
        </Link>
      </div>
    </Form>
  </div>
);

const LoginPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: '',
      password: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.login(values.email, values.password);
  }
})(LoginPage);

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(authActions.login(email, password))
});

export default connect(undefined, mapDispatchToProps)(LoginPageFormik);
