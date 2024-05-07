import React, {/*{useState}*/} from 'react';
import "./SignInFormD.css";
import { Link } from 'react-router-dom';

import user_icon from "./images/loginsignup/person.png"
import email_icon from "./images/loginsignup/email.png"
import password_icon from "./images/loginsignup/password.png"
import location_icon from "./images/loginsignup/loc.png"

const SignInFormO = () => {
  return (
  <div className='login-container'>
    <div className='header'>
        <div className='text'>Register</div>
        <div className='underline'></div>
    </div>
<div className='login-inputs'>
    <div className='login-input'>
        <img src={user_icon} alt="person" />
        <input type='text' placeholder='Username'></input>
    </div>
    <div className='login-input'>
        <img src={email_icon} alt="Envelope" />
        <input type='email' placeholder='Email'></input>
    </div>
    <div className='login-input'>
        <img src={location_icon} alt="location" />
        <input type='text' placeholder='Location'></input>
    </div>
    <div className='login-input'>
        <img src={password_icon} alt="Password" />
        <input type='password' placeholder='Password'></input>
    </div>

</div>
<div className='forgot-password'>Already Registered? <span>Click Here!</span></div>
<div className='submit-container'>
    <div className='submit'>Sign Up</div>
    <Link to='/login'><div className='submit'>Log In</div></Link>
    </div>
  </div>);
};

export default SignInFormO;