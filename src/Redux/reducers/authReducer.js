import {
  SIGNING_UP,
  SIGNED_UP_SUCCESFUL,
  SIGNED_UP_FAILURE,
  LOGGING_IN,
  LOGGING_IN_SUCCESFUL,
  LOGGING_IN_FAILURE,
  CHECK_LOGIN_STATUS_FAIL,
  CHECK_LOGIN_STATUS,
  LOG_OUT_USER,
} from '../actions/index';

const initState = {
    user: {},
    loading: false,
    error: null,
    auth_token: '',
};
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case SIGNING_UP:
        return {
          ...state,
          loading: true,
        };
      case SIGNED_UP_SUCCESFUL:
        return {
          ...state,
          loading: false,
          user: action.user.user,
          auth_token: action.user.auth_token,
        };
      case SIGNED_UP_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case LOGGING_IN:
        return {
          ...state,
          loading: true,
        };
      case LOGGING_IN_SUCCESFUL:
        return {
          ...state,
          loading: false,
          user: action.user.user,
          auth_token: action.user.auth_token,
        };
      case LOGGING_IN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case CHECK_LOGIN_STATUS_FAIL:
        return {
          ...state,
          loading: false,
        };
      case CHECK_LOGIN_STATUS:
        return {
          ...state,
          loading: false,
          auth_token: action.user.auth_token,
        };
      case LOG_OUT_USER:
        return {
          ...state,
          loggedIn: action.status.logged_in,
        };
      default:
        return state;
    }
  };
  
  export const getStatus = state => state.auth.auth_token;
  export const getUser = state => state.auth.user;
  export const getLoading = state => state.auth.loading;
  export const getError = state => state.auth.error;
  
  export default authReducer;
  