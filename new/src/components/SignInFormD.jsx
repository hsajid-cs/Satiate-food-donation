import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignInFormD.css";
import user_icon from "./images/loginsignup/person.png"
import email_icon from "./images/loginsignup/email.png"
import password_icon from "./images/loginsignup/password.png"
import location_icon from "./images/loginsignup/loc.png"
import contact_icon from "./images/loginsignup/contact.png"


const SignInFormD = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };

      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        })
    }

  return (
  <div className='login-container'>
    <div className='header'>
        <div className='text'>Donor SignUp</div>
        <div className='underline'></div>
    </div>
<div className='login-inputs'>
<select className="user-type" value={selectedValue} onChange={handleSelectChange}>
        <option value="">Who are you?</option>
        <option value="Individual">Individual</option>
        <option value="Restaurant">Restaurant</option>
      </select>
    <div className='login-input'>
        <img src={user_icon} alt="person" />
        <input type='text' placeholder='Username'></input>
    </div>
    <div className='login-input'>
        <img src={email_icon} alt="Envelope" />
        <input type='email' placeholder='Email'></input>
    </div>
    <div className='login-input'>
        <img src={contact_icon} alt="Telephone" />
        <input type='text' placeholder='Phone Number'></input>
    </div>
    <div className='login-input'>
        <img src={location_icon} alt="location" />
        <input type='text' placeholder='Address'></input>
    </div>
    {selectedValue === "Restaurant" && (
                    <div className='login-input'>
                        <img src={location_icon} alt="location" />
                        <input type='text' placeholder='Restaurant Name'></input>
                    </div>
                )}
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

export default SignInFormD;