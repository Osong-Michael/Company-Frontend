import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../Redux/actions/authActions';

const SignUp = () => {
    const [state, setState] = useState({ email: '', password: '' });
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.auth_token);

    const handleChange = e => {
        const values = {...state};
        values[e.target.name] = e.target.value;
        setState(values);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signUpUser(state));
        setState({
            email: '',
            password: '',
        });
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (user) return navigate('/');
    }, [user]);


    return (
        <div className="auth-wrapper">
            <form onSubmit={handleSubmit}>
                <h3>Sign Up</h3>

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
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-3">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <Link className="navbar-brand" to={"/sign-in"}>sign in?</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;