import React,{useState} from 'react'
import "./SignInFormD.css"

import user_icon from "./images/loginsignup/person.png"
import password_icon from "./images/loginsignup/password.png"

const LoginForm = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleLoginEvent = (e) => {
    e.preventDefault();
    console.log('Selected Value:', selectedValue);
    console.log('Username:', username);
    console.log('Password:', password);
  };
        
  return (
  <div className='login-container'>
    <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
    </div>
<div className='login-inputs'>
<select className="user-type" value={selectedValue} onChange={handleSelectChange}>
        <option value="">Who are you?</option>
        <option value="Rider">Rider</option>
        <option value="Donor">Donor</option>
        <option value="Organization">Organization</option>
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