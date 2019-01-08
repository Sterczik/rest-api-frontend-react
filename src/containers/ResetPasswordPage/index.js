import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validationSchema from './validationSchema';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const ResetPasswordPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Reset Password Page"
      defaultTitle="Reset Password Page"
    >
      <meta name="description" content="Reset Password Page" />
    </Helmet>
    <PageHeading title="Reset Password" />
    <Form className="form">
      <TextField
        id="newPassword"
        name="newPassword"
        label="New Password"
        type="password"
        value={values.newPassword}
        onChange={handleChange}
        margin="normal"
        fullWidth
        helperText={touched.newPassword ? errors.newPassword : ''}
        error={touched.newPassword && Boolean(errors.newPassword)}
      />
      <TextField
        id="newPasswordConfirm"
        name="newPasswordConfirm"
        label="Confirm New Password"
        type="password"
        value={values.newPasswordConfirm}
        onChange={handleChange}
        margin="normal"
        fullWidth
        helperText={touched.newPasswordConfirm ? errors.newPasswordConfirm : ''}
        error={touched.newPasswordConfirm && Boolean(errors.newPasswordConfirm)}
      />
      <div>
        <Button type="submit" color="secondary">Submit</Button>
      </div>
    </Form>
  </div>
);

const ResetPasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      newPassword: '',
      newPasswordConfirm: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.resetPassword(values.newPassword, values.newPasswordConfirm);
  }
})(ResetPasswordPage);

const mapDispatchToProps = (dispatch) => ({
  resetPassword: (newPassword, newPasswordConfirm) => dispatch(authActions.resetPassword(newPassword, newPasswordConfirm))
});

export default connect(undefined, mapDispatchToProps)(ResetPasswordPageFormik);
