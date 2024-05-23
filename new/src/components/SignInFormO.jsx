import React, {useEffect, useState} from 'react';
import "./SignInFormD.css";
import { Link } from 'react-router-dom';
import user_icon from "./images/loginsignup/person.png"
import email_icon from "./images/loginsignup/email.png"
import password_icon from "./images/loginsignup/password.png"
import location_icon from "./images/loginsignup/loc.png"
import contact_icon from "./images/loginsignup/contact.png"

const SignInFormO = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    
    let currentPosition = null;

    const getCurrentPosition = (callback) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    currentPosition = [position.coords.latitude, position.coords.longitude];
                    callback(currentPosition);
                },
                (error) => {
                    console.error('Error getting current position:', error);
                    callback(null);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            callback(null);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };

      

        const handleAddressChange = (event) => {
            setAddress(event.target.value); };
        const handleEmailChange = (event) => {
            setEmail(event.target.value); };
        const handleContactChange = (event) => {
            setContact(event.target.value); };

            const handleSignup = async (e) => {
                e.preventDefault();
            
                if (!username || !password || !address || !email || !contact) {
                    // Display a dialog box or alert informing the user that a field is empty
                    alert('Please fill in all fields.');
                    return; // Exit the function early if any field is empty
                }

                const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
                if (password.length < 8) {
                    alert('Password must be at least 8 characters long.');
                    return;
                  }
            
                getCurrentPosition(async (coords) => {
                    try {
                        const response = await fetch('http://localhost:3002/fatima/recipients/signup-recipient', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                username,
                                contact,
                                address,
                                email,
                                password,
                                location: coords
                            }),
                        });
            
                        const data = await response.json();
                        alert("You have been successfully registered! Please login to continue.");
                        navigate('/login');
                        // Handle success response
                    } catch (error) {
                        console.error('Error:', error);
                        // Handle error
                    }
                });
            };
            
  return (
  <div className='login-container'>
    <div className='header'>
        <div className='text'>Register</div>
        <div className='underline'></div>
    </div>
<div className='login-inputs'>
    <div className='login-input'>
        <img src={user_icon} alt="person" />
        <input type='text' placeholder='Username' value={username} onChange={handleUsernameChange}></input>
    </div>
    <div className='login-input'>
        <img src={contact_icon} alt="Telephone" />
        <input type='text' placeholder='Phone Number' value={contact} onChange={handleContactChange}></input>
    </div>
    <div className='login-input'>
        <img src={email_icon} alt="Envelope" />
        <input type='email' placeholder='Email' value={email} onChange={handleEmailChange}></input>
    </div>
    <div className='login-input'>
        <img src={location_icon} alt="location" />
        <input type='text' placeholder='Address' value={address} onChange={handleAddressChange}></input>
    </div>
    <div className='login-input'>
        <img src={password_icon} alt="Password" />
        <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange}></input>
    </div>

</div>
<div className='forgot-password'>Already Registered? <span><Link to='/login'>Click Here!</Link></span></div>
<div className='submit-container'>
    <div className='submit' onClick={handleSignup}>Sign Up</div>
    </div>
  </div>);
};

export default SignInFormO;