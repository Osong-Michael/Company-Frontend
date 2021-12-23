import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Auth/login';
import SignUp from './components/Auth/signup';
import { checkStatus, logUserOut } from './Redux/actions/authActions';
import SpinnerComp from './components/Spinner';
import Home from './components/Home';

function App() {
  const auth_token = useSelector(state => state.authReducer.auth_token);
  const loading1 = useSelector(state => state.companyReducer.loading);
    const loading2 = useSelector(state => state.authReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkStatus());
  }, []);

  const handleSignOut = () => {
    dispatch(logUserOut());
    window.location.reload();
  };
  

  return (
    <Router>
      {(loading1 || loading2) && (
          <SpinnerComp />
        )}
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>Companies</Link>
            <div className="d-flex">
              {!auth_token && (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              )}

              {auth_token && (
                <button type="button" className="btn btn-primary" onClick={handleSignOut}>Sign Out</button>
              )}
            </div>
          </div>
        </nav>

        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;