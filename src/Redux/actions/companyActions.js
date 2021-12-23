import {
    fetchingCompaniesStart,
    fetchingCompaniesSuccess,
    fetchingCompaniesFail,
    fetchingNaicsStart,
    fetchingNaicsSuccess,
    fetchingNaicsFail,
} from './index';
import { authHeader } from './authActions';
import API from './api';

function getCompanies() {
    return async dispatch => {
      dispatch(fetchingCompaniesStart());
      await API.get('companies', { headers: authHeader() })
        .then(res => {
            dispatch(fetchingCompaniesSuccess(res.data));
        })
        .catch(error => {
          dispatch(fetchingCompaniesFail(error.error));
        });
    };
};

function getNaics() {
  return async dispatch => {
    dispatch(fetchingNaicsStart());
    await API.get('naics', { headers: authHeader() })
      .then(res => {
          dispatch(fetchingNaicsSuccess(res.data));
      })
      .catch(error => {
        dispatch(fetchingNaicsFail(error.error));
      });
  };
};

export { getCompanies, getNaics };