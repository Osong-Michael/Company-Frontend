import {
    fetchingCompaniesStart,
    fetchingCompaniesSuccess,
    fetchingCompaniesFail,
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

export { getCompanies };