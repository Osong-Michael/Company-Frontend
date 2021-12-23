import {
    signingUp,
    signUpSuccess,
    signUpError,
    loggingIn,
    logInSuccess,
    logInError,
    userIsLoggedOut,
    userIsLoggedInFalse,
    userIsLoggedIn,
  } from './index';
  import API from './api';
  
  function signUpUser(credentials) {
    return async dispatch => {
      dispatch(signingUp());
      await API.post('users',
      {
        user: {
          email: credentials.email,
          password: credentials.password,
        }
      })
        .then(res => {
          if (res.data.auth_token === undefined) {
            dispatch(signUpError(res.data.errors));
          } else {
            dispatch(signUpSuccess(res.data));
            localStorage.setItem('user', JSON.stringify(res.data));
          }
          return res.data;
        })
        .catch(error => {
          dispatch(signUpError(error));
        });
    };
  };
  
  function logInUser(credentials) {
    return async dispatch => {
      dispatch(loggingIn());
      await API.post('users/login',
        {
          user: {
            email: credentials.email,
            password: credentials.password,
          }
        })
        .then(res => {
          console.log('RES', res)
          if (res.data.auth_token === undefined) {
            dispatch(logInError(res.data.errors));
          } else {
            dispatch(logInSuccess(res.data));
            localStorage.setItem('user', JSON.stringify(res.data));
          }
          return res.data;
        })
        .catch(error => {
          console.log('ERR', error)
          dispatch(logInError(error));
        });
    };
  }
  
  const checkStatus = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return dispatch => {
      if (user !== null) {
        dispatch(userIsLoggedIn(user));
        return user;
      }
      dispatch(userIsLoggedInFalse());
      return {
        type: 'USER_NOT_LOGGED_IN',
        loggedIn: false,
      };
    };
  };
  
  function logUserOut() {
    localStorage.removeItem('user');
    return dispatch => {
      dispatch(userIsLoggedOut('Logged Out'));
    };
  };
  
  function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.auth_token) {
      return { Authorization: user.auth_token };
    }
    return {};
  };
  
  export {
    logInUser,
    signUpUser,
    checkStatus,
    logUserOut,
    authHeader,
  };
  