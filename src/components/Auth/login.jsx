import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../Redux/actions/authActions';

const Login = () => {
    const [state, setState] = useState({ email: '', password: '' });
    const [err, setErr] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.auth_token);
    const error = useSelector(state => state.authReducer.error);

    const handleChange = e => {
        const values = {...state};
        values[e.target.name] = e.target.value;
        setState(values);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logInUser(state));
        setState({
            email: '',
            password: '',
        });
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (user) return navigate('/');
        error && setErr(true);
    }, [user, error]);

    return (
        <React.Fragment>
            {(error && err) && (
                <div style={{marginTop: 50}}>
                    <Alert variant="danger" onClose={() => setErr(false)} dismissible>
                        <p>{error}</p>
                    </Alert>
                </div>
            )}
            <div className="auth-wrapper">
                <form onSubmit={handleSubmit}>
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            name="password"
                            value={state.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
                    <p className="forgot-password text-right">
                        Don't have an account? <Link className="navbar-brand" to={"/sign-up"}>sign up?</Link>
                    </p>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;