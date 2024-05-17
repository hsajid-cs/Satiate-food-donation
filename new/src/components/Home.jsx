import React from 'react'
import './Home.css'
import video from './images/action2overlay.mp4'

export const Home = () => {
  return (
    <>
    <div className='main'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
    </div>
    </>
  )
}
