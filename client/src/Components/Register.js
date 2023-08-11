import React from 'react';
import logo from '../assets/images/chaticon.png'
import '../Styles/MainStyles.css'
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className="login-container">
            <div className="image-container">
                <img src={logo} alt="welcome-logo" />
            </div>
            <div className="login-box">
                <p>Create your account</p>
                <TextField id="standard-basic" label="Username" variant="outlined" />
                <TextField id="standard-basic" label="Email" variant="outlined" type='email'/>
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                <Button variant="outlined" className='lrbtn'>Create Account</Button>
                <p className='dhaarl'>
                  Already have an account? <Link to="/">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;