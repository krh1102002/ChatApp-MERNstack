import React from 'react';
import logo from '../assets/images/chaticon.png'
import '../Styles/MainStyles.css'
import { Button, TextField } from '@mui/material';
const Login = () => {
    return (
        <div className="login-container">
            <div className="image-container">
                <img src={logo} alt="welcome-logo" />
            </div>
            <div className="login-box">
                <p>Login tou your account</p>
                <TextField id="standard-basic" label="Username" variant="outlined" />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                <Button variant="outlined">Login</Button>
            </div>
        </div>
    );
};

export default Login;