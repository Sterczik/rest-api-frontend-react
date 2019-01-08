import { authConstants } from './constants';

const user = JSON.parse(localStorage.getItem('token'));
const initialState = user ? {
  loggedIn: true,
  loggingIn: false,
  user
} : {
  loggedIn: false,
  loggingIn: false,
  user: {},
  registerProcess: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.REGISTER_IN_PROCESS:
      return {
        ...state,
        registerProcess: true
      };
    case authConstants.REGISTER_SUCCESS:
      return {
        ...state,
        registerProcess: false
      };
    case authConstants.REGISTER_FAILURE:
      return {
        ...state,
        registerProcess: false
      };
    case authConstants.LOGIN_IN_PROCESS:
      return {
        loggingIn: true,
        loggedIn: false,
        user: {}
      };
    case authConstants.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        loggedIn: true,
        user: action.user
      };
    case authConstants.LOGIN_FAILURE:
      return {
        loggingIn: false,
        loggedIn: false,
        user: {}
      };
    case authConstants.CHANGE_PASSWORD_IN_PROCESS:
      return {
        ...state
      };
    case authConstants.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state
      };
    case authConstants.CHANGE_PASSWORD_FAILURE:
      return {
        ...state
      };
    case authConstants.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: {}
      };
    default:
      return state;
  }
};
