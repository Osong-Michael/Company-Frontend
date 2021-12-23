import {
    FETCH_ALL_COMPANIES_START,
    FETCH_ALL_COMPANIES_SUCCESS,
    FETCH_ALL_COMPANIES_FAILED,
  } from '../actions/index';

const initState = {
    companies:[],
    naics: [],
    loading: false,
    error: null,
};

const companyReducer = (state = initState, action) => {
    switch (action.type) {
      case FETCH_ALL_COMPANIES_START:
        return {
          ...state,
          loading: true,
        };
      case FETCH_ALL_COMPANIES_SUCCESS:
        return {
          ...state,
          loading: false,
          companies: action.companies,
        };
      case FETCH_ALL_COMPANIES_FAILED:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    };
};

export default companyReducer;