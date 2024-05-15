import React from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer=()=>{
    return (
<div className="footer">
<div className="sb_footer section_padding">
<div className="sb_footer_links">
    <div className="sb_footer_links_div">   
    <h4>ABOUT US</h4>
    <a href="/blah"><p>
Satiate fights hunger and food waste by redirecting surplus food to those in need. Starting in 2024, we plan to partner with local businesses and volunteers to distribute nutritious food to shelters and food banks. Join us in creating a hunger-free community. Together, we make a difference.</p></a>
    {/* <a href="/blah"><p>healthplan</p></a>
    <a href="/blah"><p></p>Individual</a> */}
    </div>
    <div className="sb_footer_links_div">   
    <h4>OUR ADDRESS</h4>
    <a href="/blah"><p>165 D2 Johar Town,Lahore.</p></a>
   
    {/* <a href="blah"><p></p>Individual</a> */}
    </div>
    <div className="sb_footer_links_div">  
    <h4>CALL US</h4>
    <a href="/blah"><p>+92 3232159449</p></a>
    <a href="/blah"><p> 042 13456789</p></a> 
    {/* <a href="/blah"><p>healthplan</p></a>
    <a href="/blah"><p></p>Individual</a> */}
    </div>
    <div className="sb_footer_links_div">   
    <h4>Email</h4>
    <a href="/blah"><p>fatimanasir411@gmail.com</p></a>
    {/* <a href="/blah"><p>healthplan</p></a>
    <a href="/blah"><p></p>Individual</a> */}
    </div>
    <div className="sb_footer_links_div">
    <h4>Social Media</h4>
    <div className="socialMedia">
        <div className='socialMedia_icon'>
    <p><FontAwesomeIcon icon={faFacebook} /></p></div>
    <div className='socialMedia_icon'>
    <p><FontAwesomeIcon icon={faTwitter} /></p></div>
    <div className='socialMedia_icon'>
    <p><FontAwesomeIcon icon={faLinkedin} /></p></div>
    <div className='socialMedia_icon'>
    <p><FontAwesomeIcon icon={faInstagram} /></p></div>
    </div>
    </div>
</div>
<hr></hr>
<div className="sb_footer_below"> 
<div className="sb_footer_copyright">
    <p>
        @{new Date().getFullYear()} All rights reserved.
    </p>
</div>
<div className="sb_footer_below_links"> 
    <a href="/blah"><div><p>Terms and Conditions</p></div></a>
    <a href="/blah"><div><p>Privacy</p></div></a>
    <a href="/blah"><div><p>Security</p></div></a>
    <a href="/blah"><div><p>Cookie Declaration</p></div></a>
    
    </div>
    </div>
        </div>
        </div>  
        
    )
    }
export default Footer;