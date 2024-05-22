import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./SignInFormD.css"
import user_icon from "./images/loginsignup/person.png"
import password_icon from "./images/loginsignup/password.png"
import axios from 'axios'
import {jwtDecode} from 'jwt-decode';


const LoginForm = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  
  
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function displayAllTokens() {
    const allTokens = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('token')) {
        const token = localStorage.getItem(key);
        try {
          const decodedToken = jwtDecode(token);
          console.log('Decoded Token:', decodedToken); // Log the decoded token
          const recipientId = decodedToken._id; // Extract recipient ID from the _id field
          allTokens.push({ key, token, recipientId });
        } catch (error) {
          console.error(`Error decoding token for key ${key}:`, error);
        }
      }
    }
    if (allTokens.length === 0) {
      console.log('No tokens found in local storage.');
    } else {
      console.log('All tokens in local storage:');
      allTokens.forEach(({ key, token, recipientId }) => {
        console.log(`${key}: ${token}, Recipient ID: ${recipientId}`);
      });
    }
  }

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    if(!selectedValue|| !username || !password){
      window.alert('Please fill in all fields.');
      return;
    }
    try {
      let endpoint;
      if (selectedValue === 'Donor') {
        endpoint = 'http://localhost:3002/fatima/donors/login-donor';
      } else if (selectedValue === 'Recipient') {
        endpoint = 'http://localhost:3002/fatima/recipients/login-recipient';
      } else if (selectedValue === 'Rider') {
        endpoint = 'http://localhost:3002/fatima/riders/login-rider';
      } else {
        setError('Please select a user type.');
        return;
      }

      const response = await axios.post(endpoint, { username, password });
      localStorage.setItem('token', response.data.token);
      console.log('Login response:', response.data);
      
      // Navigate to the appropriate dashboard
      if (selectedValue === 'Donor') {
        navigate('/dashboard-donor');
      } else if (selectedValue === 'Recipient') {
        navigate('/dashboard-recipient');
      } else if (selectedValue === 'Rider') {
        navigate('/dashboard-rider');
      }
    } catch (error) {
      alert('Login failed. Please check your credentials and try again.');
      console.error('Error logging in:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };
        
  return (
  <div className='login-container'>
    <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
    </div>
<div className='login-inputs'>
<select className="user-type" value={selectedValue} onChange={handleSelectChange}>
        <option value="">Select your role</option>
        <option value="Rider">Rider</option>
        <option value="Donor">Donor</option>
        <option value="Recipient">Organization</option>
      </select>
    <div className='login-input'>
        <img src={user_icon} alt="person" />
        <input type='text' placeholder='Username' value={username} onChange={handleUsernameChange}></input>
    </div>
    <div className='login-input'>
        <img src={password_icon} alt="Password" />
        <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange}></input>
    </div>

</div>
<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
<div className='submit-container'>
    <div className='submit' onClick={handleLoginEvent}>Log In</div>
    </div>
  </div>
  );
};

export default LoginForm;
