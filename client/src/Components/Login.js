import React from 'react';
import logo from '../assets/images/chaticon.png'
import '../Styles/MainStyles.css'
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="login-container">
            <div className="image-container">
                <img src={logo} alt="welcome-logo" />
            </div>
            <div className="login-box">
                <p>Login to your account</p>
                <TextField id="standard-basic" label="Username" variant="outlined" />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                <Button variant="outlined" className='lrbtn'>Login</Button>
                <p className='dhaarl'>
                  Don't have an account? <Link to="/register">signUp</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;