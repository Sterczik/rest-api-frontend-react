import { snackbarActions as snackbar } from 'material-ui-snackbar-redux';
import { userService } from '../../../services/user';
import { history } from '../../../helpers/history';
import { authConstants } from './constants';

function logout() {
  userService.logout();

  return {
    type: authConstants.LOGOUT
  };
}

function register(email, name, password, passwordConfirm) {
  const registerInProcess = (user) => ({
    type: authConstants.REGISTER_IN_PROCESS,
    user
  });

  const registerSuccess = (message) => ({
    type: authConstants.REGISTER_SUCCESS,
    message
  });

  const registerFailure = (error) => ({
    type: authConstants.REGISTER_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(registerInProcess({ email }));

    userService.register(email, name, password, passwordConfirm)
      .then((data) => {
        if (data.success) {
          dispatch(registerSuccess());
          dispatch(snackbar.show({
            message: data.message
          }));
          history.push('/register-confirm');
        } else {
          dispatch(registerFailure());
          dispatch(snackbar.show({
            message: data.errors.message
          }));
        }
      })
      .catch((error) => {
        dispatch(registerFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
        history.push('/register-failure');
      });
  };
}

function login(email, password) {
  const loginInProcess = (user) => ({
    type: authConstants.LOGIN_IN_PROCESS,
    user
  });

  const loginSuccess = (user) => ({
    type: authConstants.LOGIN_SUCCESS,
    user
  });

  const loginFailure = (error) => ({
    type: authConstants.LOGIN_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(loginInProcess({ email }));

    userService.login(email, password)
      .then((data) => {
        if (data.success) {
          if (data.user.token) {
            localStorage.setItem('token', JSON.stringify(data.user.token));
          }
          dispatch(loginSuccess(data.user));
          history.push('/todos');
        } else {
          dispatch(loginFailure());
          dispatch(snackbar.show({
            message: data.errors.message
          }));
        }
      })
      .catch((error) => {
        dispatch(loginFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong'
        }));
      });
  };
}

function changePassword(oldPassword, newPassword, newPasswordConfirm) {
  const changePasswordInProcess = () => ({
    type: authConstants.CHANGE_PASSWORD_IN_PROCESS
  });

  const changePasswordSuccess = () => ({
    type: authConstants.CHANGE_PASSWORD_SUCCESS
  });

  const changePasswordFailure = () => ({
    type: authConstants.CHANGE_PASSWORD_FAILURE
  });

  return (dispatch) => {
    dispatch(changePasswordInProcess());

    userService.changePassword(oldPassword, newPassword, newPasswordConfirm)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          dispatch(changePasswordSuccess());
          history.push('/my-account');
          dispatch(snackbar.show({
            message: data.message
          }));
        } else {
          dispatch(changePasswordFailure());
          dispatch(snackbar.show({
            message: data.errors.message
          }));
        }
      })
      .catch((error) => {
        dispatch(changePasswordFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

function forgotPassword(email) {
  const forgotPasswordInProcess = () => ({
    type: authConstants.FORGOT_PASSWORD_IN_PROCESS
  });

  const forgotPasswordSuccess = () => ({
    type: authConstants.FORGOT_PASSWORD_SUCCESS
  });

  const forgotPasswordFailure = (error) => ({
    type: authConstants.FORGOT_PASSWORD_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(forgotPasswordInProcess());

    userService.forgotPassword(email)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          dispatch(forgotPasswordSuccess());
          history.push('/check-email');
        } else {
          dispatch(forgotPasswordFailure());
          dispatch(snackbar.show({
            message: data.errors.message
          }));
        }
      })
      .catch((error) => {
        dispatch(forgotPasswordFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

function resetPassword(newPassword, newPasswordConfirm) {
  const resetPasswordInProcess = () => ({
    type: authConstants.RESET_PASSWORD_IN_PROCESS
  });

  const resetPasswordSuccess = () => ({
    type: authConstants.RESET_PASSWORD_SUCCESS
  });

  const resetPasswordFailure = (error) => ({
    type: authConstants.RESET_PASSWORD_FAILURE,
    error
  });

  return (dispatch) => {
    dispatch(resetPasswordInProcess());

    userService.resetPassword(newPassword, newPasswordConfirm)
      .then((res) => {
        const data = res.data;
        if (data.success) {
          dispatch(resetPasswordSuccess());
          history.push('/login');
          dispatch(snackbar.show({
            message: data.message
          }));
        } else {
          dispatch(resetPasswordFailure());
          dispatch(snackbar.show({
            message: data.errors.message
          }));
        }
      })
      .catch((error) => {
        dispatch(resetPasswordFailure(error));
        dispatch(snackbar.show({
          message: 'Something went wrong!'
        }));
      });
  };
}

export const authActions = {
  logout,
  register,
  login,
  changePassword,
  forgotPassword,
  resetPassword
};
