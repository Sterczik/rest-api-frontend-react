import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validationSchema from './validationSchema';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const ForgotPasswordPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Forgot Password Page"
      defaultTitle="Forgot Password Page"
    >
      <meta name="description" content="Forgot Password Page" />
    </Helmet>
    <PageHeading title="Forgot Password" />
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
      <div>
        <Button type="submit" color="secondary">Submit</Button>
      </div>
    </Form>
  </div>
);

const ForgotPasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      email: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.forgotPassword(values.email);
  }
})(ForgotPasswordPage);

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (email) => dispatch(authActions.forgotPassword(email))
});

export default connect(undefined, mapDispatchToProps)(ForgotPasswordPageFormik);
