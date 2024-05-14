import React, {useEffect, useState} from 'react';
import "./SignInFormD.css";
import { Link } from 'react-router-dom';
import user_icon from "./images/loginsignup/person.png"
import email_icon from "./images/loginsignup/email.png"
import password_icon from "./images/loginsignup/password.png"
import location_icon from "./images/loginsignup/loc.png"
import axios from 'axios';

const API_ENDPOINT=`https://api.openweathermap.org/data/2.5/onecall?`;
const API_KEY=`92fc613b7f106ab35db4146af4a9cdd4`;

const SignInFormO = () => {
    const [latitude, setLatitude] = React.useState('');
    const [longitude, setLongitude] = React.useState('');
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        })
    },[latitude, longitude]);
    axios.get(`${API_ENDPOINT}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_KEY}`).then((response) => {
        console.log(response.data);
    })
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
        <input type='email' placeholder='Phone Number'></input>
    </div>
    <div className='login-input'>
        <img src={email_icon} alt="Envelope" />
        <input type='email' placeholder='Email'></input>
    </div>
    <div className='login-input'>
        <img src={location_icon} alt="location" />
        <input type='text' placeholder='Address'></input>
    </div>
    <div className='login-input'>
        <img src={password_icon} alt="Password" />
        <input type='password' placeholder='Password'></input>
    </div>

</div>
<div className='forgot-password'>Already Registered? <span><Link to='/login'>Click Here!</Link></span></div>
<div className='submit-container'>
    <div className='submit'>Sign Up</div>
    </div>
  </div>);
};

export default SignInFormO;