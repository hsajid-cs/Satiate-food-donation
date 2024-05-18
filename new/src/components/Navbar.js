import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from './Button';
import { Modal } from './Modal';
import './Navbar.css';
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const PositionedModal = styled.div`
  position: fixed; 
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

function Navbar() {

  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(false);
  const [button1, setButton1] = useState(true);
  const [button2, setButton2] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navigate = useNavigate();
  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/login');    
    closeMobileMenu();
  }


  useEffect(() => {
    // Check if user is logged in (You should replace this with your actual authentication logic)
    const userIsLoggedIn = localStorage.getItem('token') !== null;
    setIsLoggedIn(userIsLoggedIn);
    
  }, []);
  const openModal = () => {
    setShowModal(prev => !prev);
  }
  const closeModal = e => {
      setShowModal(false);
  };

  const handleSignupLinkClick = (e) => {
    closeMobileMenu();
    e.preventDefault();
    openModal();
  }
  const handleSignupClick = (e) => {
    e.preventDefault();
    openModal();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton1(false);
      setButton2(false);
      document.querySelectorAll('.mobile-only').forEach(item => {
        item.style.display = 'block';})
    } else {
      setButton1(true); 
      setButton2(true); 
      document.querySelectorAll('.mobile-only').forEach(item => {
        item.style.display = 'none';})
    }
  }

  const handleLogout = (e) => {
    e.preventDefault();
    // Log out logic here
    setIsLoggedIn(false);
    navigate('/');
  };



    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to='/home' className='navbar-logo'>
          Satiate <i className='fa-solid fa-bowl-food' />
          </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {!isLoggedIn && window.innerWidth <= 960 && (
                <li className="nav-item mobile-only">
                  <div className="nav-links" onClick={handleSignupLinkClick}>
                    Sign Up  
                  </div>
                </li>
              )
            }

            {!isLoggedIn && window.innerWidth <= 960 && (
                <li className="nav-item mobile-only">
                  <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                     Log In
                  </Link>
                </li>
              )
            }

            {isLoggedIn && window.innerWidth <= 960 && (
                <li className="nav-item mobile-only">
                  <div className="nav-links" onClick={handleLogout}>
                     Log Out
                  </div>
                </li>
              )
            }
              <li className='nav-item'>
                <Link to='/stories' className='nav-links' onClick={closeMobileMenu}>
                  Stories
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                  About Us
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>
                  FAQ
                </Link>
              </li>

            </ul>
            
            
            {isLoggedIn ? (
              <>
              <div className='user-links-container'>
                  <Link to="/notifications" className='user-links'>
                    <i className="fas fa-bell" />
                  </Link>
                  <Link to="/profile" className='user-links'>
                    <i className="fas fa-user"  />
                  </Link>
                  
              </div>
              <div className='btn-wrapper'>
              {window.innerWidth >= 960 && button2 && 
                <Button className="logout-btn" buttonStyle='btn--outline' onClick={handleLogout}>
                  Log Out
                </Button>
              }
              </div>
              </>
            ) : (
              <div className="btn-wrapper"><Link to='/' onClick={handleLoginClick}> 
              {window.innerWidth >= 960 && button1 && <Button buttonStyle='btn--outline' >Log In</Button>} 
              </Link>
 
              {window.innerWidth >= 960 && button2 && 
                <Button buttonStyle='btn--outline' onClick={handleSignupClick}>
                  Sign Up
                </Button>
              }
              </div>
                )}
              
            </div>
    </nav>
    
    {showModal && (
        <>
        <Overlay onClick={closeModal} />
        <PositionedModal>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            <GlobalStyle />
            </PositionedModal>
        </>
    )}
    </>
  )
};

export default Navbar;