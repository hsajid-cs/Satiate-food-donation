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
  height: 500px;
  @media (max-width: 768px) {
    width: 100%; 
    height: 300px;
  }
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: 10;
  border-radius: 10px;

`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;



  object-fit: cover;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
display: flex;
  flex-wrap: wrap;

  button {
    
    background: #1ea27e;
    width: 100px;
    height: 80px;
    border-radius: 4px;

  }

  button + button {
    margin-left: 10px;
  }
  
  justify-content: center;
  align-items: center;
  // line-height: 2.0;
  color: #141414;
  

  @media (max-width: 768px) {
    // line-height: 3.0;
    margin-top: 25px;
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
                <h1>Ready to make impact?</h1>
                <p>Help us turn excess into access for those in need</p>
                <div className='submit-container'>
                <div className="submit-modal" onClick={() => handleClick('/signup-organization')}>
    Register
  </div>

  <div className="submit-modal" onClick={() => handleClick('/signup-donor')}>
   Donate
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