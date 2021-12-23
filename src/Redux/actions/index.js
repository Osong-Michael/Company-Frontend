const SIGNING_UP = 'SIGNING_UP';
const SIGNED_UP_SUCCESFUL = 'SIGNED_UP_SUCCESFUL';
const SIGNED_UP_FAILURE = 'SIGNED_UP_FAILURE';
const LOGGING_IN = 'LOGGING_IN';
const LOGGING_IN_SUCCESFUL = 'LOGGING_IN_SUCCESFUL';
const LOGGING_IN_FAILURE = 'LOGGING_IN_FAILURE';
const CHECK_LOGIN_STATUS_FAIL = 'CHECK_LOGIN_STATUS_FAIL';
const CHECK_LOGIN_STATUS = 'CHECK_LOGIN_STATUS';
const LOG_OUT_USER = 'LOG_OUT_USER';
const FETCH_ALL_COMPANIES_START = 'FETCH_ALL_COMPANIES_START';
const FETCH_ALL_COMPANIES_SUCCESS = 'FETCH_ALL_COMPANIES_SUCCESS';
const FETCH_ALL_COMPANIES_FAILED = 'FETCH_ALL_COMPANIES_FAILED';



function signingUp() {
  return {
      type: SIGNING_UP,
  };
};
  
function signUpSuccess(user) {
  return {
    type: SIGNED_UP_SUCCESFUL,
    user,
  };
};
  
function signUpError(error) {
  return {
    type: SIGNED_UP_FAILURE,
    error,
  };
};
  
function loggingIn() {
  return {
    type: LOGGING_IN,
  };
};
  
function logInSuccess(user) {
  return {
    type: LOGGING_IN_SUCCESFUL,
    user,
  };
};
  
function logInError(error) {
  return {
    type: LOGGING_IN_FAILURE,
    error,
  };
};
  
function userIsLoggedInFalse() {
  return {
    type: CHECK_LOGIN_STATUS_FAIL,
  };
};
  
function userIsLoggedIn(user) {
  return {
    type: CHECK_LOGIN_STATUS,
    user,
  };
};
  
function userIsLoggedOut(status) {
  return {
    type: LOG_OUT_USER,
    status,
  };
};

function fetchingCompaniesStart() {
  return {
    type: FETCH_ALL_COMPANIES_START,
  };
};

function fetchingCompaniesSuccess(companies) {
  return {
    type: FETCH_ALL_COMPANIES_SUCCESS,
    companies
  };
};

function fetchingCompaniesFail(error) {
  return {
    type: FETCH_ALL_COMPANIES_FAILED,
    error
  };
};

export {
    SIGNING_UP,
    SIGNED_UP_SUCCESFUL,
    SIGNED_UP_FAILURE,
    LOGGING_IN,
    LOGGING_IN_SUCCESFUL,
    LOGGING_IN_FAILURE,
    CHECK_LOGIN_STATUS_FAIL,
    CHECK_LOGIN_STATUS,
    LOG_OUT_USER,
    FETCH_ALL_COMPANIES_START,
    FETCH_ALL_COMPANIES_SUCCESS,
    FETCH_ALL_COMPANIES_FAILED,
    signingUp,
    signUpSuccess,
    signUpError,
    loggingIn,
    logInSuccess,
    logInError,
    userIsLoggedIn,
    userIsLoggedInFalse,
    userIsLoggedOut,
    fetchingCompaniesStart,
    fetchingCompaniesSuccess,
    fetchingCompaniesFail,
  };