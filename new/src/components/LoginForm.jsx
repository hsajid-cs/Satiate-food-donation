import React,{useState} from 'react'
import "./SignInFormD.css"
import user_icon from "./images/loginsignup/person.png"
import password_icon from "./images/loginsignup/password.png"
import axios from 'axios'

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

  const handleLoginEvent = async (e) => {
    e.preventDefault();
    console.log('Selected Value:', selectedValue);
    console.log('Username:', username);
    console.log('Password:', password);

    try {
      let endpoint;
      if (selectedValue === 'Donor') {
        endpoint = 'http://localhost:3000/fatima/donors/login-donor';
      } else if (selectedValue === 'Recipient') {
        endpoint = 'http://localhost:3000/fatima/recipients/login-recipient';
      }
      else if (selectedValue === 'Rider') {
        endpoint = 'http://localhost:3000/fatima/riders/login-rider';}
         else {
       
        return;
      }

      const response = await axios.post(endpoint, {
        username,
        password
      });
      localStorage.setItem('token', response.data.token);
      console.log('Login response:', response.data);

      // Redirect or set state based on response
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error (e.g., display error message)
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
        <option value="">Who are you?</option>
        <option value="Rider">Rider</option>
        <option value="Donor">Donor</option>
        <option value="Recipien">Organization</option>
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
// import React,{useState} from 'react'
// import "./SignInFormD.css"
// import user_icon from "./images/loginsignup/person.png"
// import password_icon from "./images/loginsignup/password.png"
// import axios from 'axios'

// const LoginForm = () => {
//   const [selectedValue, setSelectedValue] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleSelectChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleLoginEvent = async (e) => {
//     e.preventDefault();
//     console.log('Selected Value:', selectedValue);
//     console.log('Username:', username);
//     console.log('Password:', password);

//     try {
//       let endpoint;
//       if (selectedValue === 'Donor') {
//         endpoint = 'http://localhost:3000/fatima/donors/login-donor';
//       } else if (selectedValue === 'Recipient') {
//         endpoint = 'http://localhost:3000/fatima/donors/signup-donor';
//       } else {
       
//         return;
//       }

//       const response = await axios.post(endpoint, {
//         username,
//         password
//       });

//       console.log('Login response:', response.data);
//       // Redirect or set state based on response
//     } catch (error) {
//       console.error('Error logging in:', error);
//       // Handle error (e.g., display error message)
//     }
//   };
        
//   return (
//   <div className='login-container'>
//     <div className='header'>
//         <div className='text'>Login</div>
//         <div className='underline'></div>
//     </div>
// <div className='login-inputs'>
// <select className="user-type" value={selectedValue} onChange={handleSelectChange}>
//         <option value="">Who are you?</option>
//         <option value="Rider">Rider</option>
//         <option value="Donor">Donor</option>
//         <option value="Recipien">Organization</option>
//       </select>
//     <div className='login-input'>
//         <img src={user_icon} alt="person" />
//         <input type='text' placeholder='Username' value={username} onChange={handleUsernameChange}></input>
//     </div>
//     <div className='login-input'>
//         <img src={password_icon} alt="Password" />
//         <input type='password' placeholder='Password' value={password} onChange={handlePasswordChange}></input>
//     </div>

// </div>
// <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
// <div className='submit-container'>
//     <div className='submit' onClick={handleLoginEvent}>Log In</div>
//     </div>
//   </div>
//   );
// };

// export default LoginForm;