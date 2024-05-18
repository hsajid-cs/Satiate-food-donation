import React from 'react'
import './Home.css'
import video from './images/action2overlay.mp4'

export const Home = () => {
  return (
    <>
    <div className='main'>
        <video src={video} autoPlay loop muted />
    </div> 
    </>
  )
}
