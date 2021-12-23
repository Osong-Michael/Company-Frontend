import React, { useEffect, useMemo, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import SpinnerComp from '../Spinner';
import { getCompanies } from '../../Redux/actions/companyActions';
import TableContainer from '../Table';
import { dayOfMonth } from '../Helpers';

const Home = () => {
    const user = useSelector(state => state.authReducer.auth_token);
    const companies = useSelector(state => state.companyReducer.companies);
    const loading1 = useSelector(state => state.companyReducer.loading);
    const loading2 = useSelector(state => state.authReducer.loading);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) return navigate('/sign-in');
        dispatch(getCompanies())
    }, []);

    const columns = useMemo(
      () => [
        {
          Header: 'Company Name and Details',
          columns: [
            {
              Header: 'Name',
              accessor: 'name',
            },
            {
              Header: 'Business Structure',
              accessor: 'business_structure',
            },
            {
              Header: 'NAICS Code',
              accessor: 'naics_code',
            },
            {
              Header: 'Logo',
              accessor: 'avatar_url',
              disableFilters: true
            },
          ],
        },
        {
          Header: 'Adrress',
          columns: [
            {
              Header: 'State',
              accessor: 'addresses[0].state',
            },
            {
              Header: 'City',
              accessor: 'addresses[0].city',
            },
            {
              Header: 'Street Adress',
              accessor: 'addresses[0].street_address',
            },
          ],
        },
        {
         Header: 'Timestamps',
         columns: [
           {
            Header: 'Created on',
            accessor: 'created_at',
            Cell: ({ cell: { value } }) =>  dayOfMonth(value),
            disableFilters: true
           },
           {
            Header: 'Updated on',
            accessor: 'updated_at',
            Cell: ({ cell: { value } }) =>  dayOfMonth(value),
            disableFilters: true
           },
         ],
        },
      ],
      []
    );


  return (
    <Fragment>
      {(loading1 || loading2) && (
        <SpinnerComp />
      )}
      <Container style={{ marginTop: 100, marginBottom: 100 }}>
        <div><h1 style={{ textAlign: 'center', marginBottom: 70 }}>List of {companies.length} Companies</h1></div>
        <TableContainer columns={columns} data={companies} />
      </Container>
    </Fragment>
  );
};


export default Home;
