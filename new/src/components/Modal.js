import React, { useRef, useEffect, useCallback } from 'react';
import {useNavigate} from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import './Modal.css';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const ModalWrapper = styled.div`
  width: 800px;
  height: 450px;
  @media screen and (max-width: 960px) {
    height: 320px;
    width: 100%;
    // height: auto;
  }
  @media screen and (max-width: 460px) {
    width: 300px;
    height: 290px;
  }
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display:flex;

  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;

`;

const ModalImg = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 0 0 10px;
  background: #000;
  @media screen and (max-width:960px){
    display: none;
  }
  
`;

const ModalContent = styled.div`
display: column;
  flex-direction: column;
  button {
    
    background: #1ea27e;
    width: 100px;
    height: 80px;
    border-radius: 4px;

  }

  h2{
    margin-top:5rem;
    text-align: center;
  }
  p{
    margin-top: 3rem;
    text-align: center;
    margin-right: 1.5rem;
    margin-left:1.5rem;
    
  }

  .mobile{
    display:none;
  }
  div{
    margin-top: 1.5rem;
  }
  button + button {
    margin-left: 10px;
  }
  
  justify-content: center;
  align-items: center;
  // line-height: 2.0;
  color: #141414;
  

  @media screen and (max-width: 960px) {

    margin-top: 25px;
    h2{
      margin-right: 0;
      font-size: 20px;
      margin-top: 1rem;
    }
    p{
      margin-top: 1rem;
    }
    div{
      margin-top:0.25rem;
    }
  }
  @media screen and (max-width: 460px) {
    width: 300px;
    h2{
      margin-top: 1.75rem;
    }
    .desktop{
      display:none;
    }
    .mobile{
      display: block;
      
        margin-top:1.5rem;
      

    }
    div{
      margin-top:0.75rem;
    }
  }

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    setShowModal(false);
    navigate(path);
  }
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });


  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <>
        <Background ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require('./images/modal.jpeg')} alt='camera' />
              <ModalContent>
                <h2>Ready to make an impact?</h2>
                <p className='desktop'>Too many in the world suffer from hunger and lack access to education. By 2050, 10 billion people presents challenges if trends continue. Hundreds of millions of children miss school each year due to poverty and hunger. Over half of Pakistan struggles with food insecurity. Together we can address these issues and improve lives through food and learning.</p>
                <p className='mobile'>Too many in the world suffer from hunger and lack access to education. By 2050, 10 billion people presents challenges if trends continue. </p>
                <div className='modal-container'>
                <div className="submit-modal" onClick={() => handleClick('/signup-organization')}>
    NGO
  </div>

  <div className="submit-modal" onClick={() => handleClick('/signup-donor')}>
   Donor
  </div>
                </div>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
        </>
      ) : null}
    </>
  );
};