import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withFormik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import validationSchema from './validationSchema';

import PageHeading from '../../components/PageHeading/PageHeading';
import { authActions } from '../App/auth/actions';

const ChangePasswordPage = ({
  values,
  errors,
  touched,
  handleChange
}) => (
  <div>
    <Helmet
      titleTemplate="Change Password Page"
      defaultTitle="Change Password Page"
    >
      <meta name="description" content="Change Password Page" />
    </Helmet>
    <PageHeading title="Change Password" />
    <Form className="form">
      <TextField
        id="oldPassword"
        name="oldPassword"
        label="Old password"
        type="password"
        value={values.oldPassword}
        onChange={handleChange}
        margin="normal"
        fullWidth
        helperText={touched.oldPassword ? errors.oldPassword : ''}
        error={touched.oldPassword && Boolean(errors.oldPassword)}
      />
      <TextField
        id="newPassword"
        name="newPassword"
        label="New password"
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
        label="New password"
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

const ChangePasswordPageFormik = withFormik({
  mapPropsToValues() {
    return {
      oldPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    };
  },
  validationSchema,
  handleSubmit(values, { props }) {
    props.changePassword(values.oldPassword, values.newPassword, values.newPasswordConfirm);
  }
})(ChangePasswordPage);

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldPassword, newPassword, newPasswordConfirm) => dispatch(authActions.changePassword(oldPassword, newPassword, newPasswordConfirm))
});

export default connect(undefined, mapDispatchToProps)(ChangePasswordPageFormik);
