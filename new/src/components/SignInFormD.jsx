import React, {/*{useState}*/} from 'react';
import "./SignInFormD.css";
import { Link } from 'react-router-dom';

import user_icon from "./images/loginsignup/person.png"
import email_icon from "./images/loginsignup/email.png"
import password_icon from "./images/loginsignup/password.png"
import location_icon from "./images/loginsignup/loc.png"

// const API_endpoint = './https://api.openweathermap.org/data/2.5/onecall?'
// const API_key=`92fc613b7f106ab35db4146af4a9cdd4`
const SignInFormD = () => {
    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');
    // React.useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         console.log("Latitude is :", position.coords.latitude);
    //         console.log("Longitude is :", position.coords.longitude);
    //       });
    //       axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${API_key}`)
    //       .then((response) => {
    //         console.log(response.data);
    //       });
    // }, []);
  return (
  <div className='login-container'>
    <div className='header'>
        <div className='text'>Sign up as Donor</div>
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
<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
<div className='submit-container'>
    <div className='submit'>Sign Up</div>
    <Link to='/login'><div className='submit'>Log In</div></Link>
    </div>
  </div>);
};

export default SignInFormD;