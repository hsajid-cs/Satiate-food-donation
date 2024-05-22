import React from 'react'
import Accordian from './Accordian'
import './FAQ.css'

const FAQ = () => {
  return (
    <>
<div className="faq-body">
      <div className='faq-container'>
            <div className='header'>
        <div className='text' style={{textAlign:'center'}}>Frequently Asked Questions</div>
        <div className='underline'></div>
        </div>
        <br/>
        <Accordian/> 
        </div>
        </div>
    </>
  )
}

export default FAQ