import React from 'react';
import logo from '../assets/images/chaticon.png'
const Welcome = () => {
    return (
       <div className='welcome-container'>
        <img src={logo} className='welcome-logo' alt="logo img" />
        <p>View and text directly to people present in the chat Rooms.</p>
       </div>
    );
};

export default Welcome;