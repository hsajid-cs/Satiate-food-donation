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
    <h3>Site Links</h3>
    <a href="#"><p>About Us</p></a>
    <a href="#"><p>Directions</p></a>
    <a href="#"><p>Blog</p></a>
    <a href="#"><p>FAQ</p></a>
    </div>
    <div className="sb_footer_links_div">   
    <h3>For Business</h3>
    <a href="#"><p>Promotion</p></a>
    <a href="#"><p>Partner</p></a>
    <a href="blah"><p></p>Career</a>
    </div>
    <div className="sb_footer_links_div">   
    <h3><pre> </pre></h3>
    <a href="#"><p>Employer</p></a>
    <a href="#"><p>healthplan</p></a>
    <a href="#"><p></p>Individual</a>
    </div>
    {/* <div className="sb_footer_links_div">   
    <h3><pre> </pre></h3>
    <a href="#"><p>Employer</p></a>
    <a href="#"><p>healthplan</p></a>
    <a href="#"><p></p>Individual</a>
    </div> */}
    <div className="sb_footer_links_div">
    <h3>Contact Us</h3>
    <div className="socialmedia">
    <a><FontAwesomeIcon icon={faFacebook} /></a>
    <a><FontAwesomeIcon icon={faTwitter} /></a>
    <a><FontAwesomeIcon icon={faLinkedin} /></a>
    <a><FontAwesomeIcon icon={faInstagram} /></a>
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
    <a href="#"><div><p>Terms and Conditions</p></div></a>
    <a href="#"><div><p>Privacy</p></div></a>
    <a href="#"><div><p>Security</p></div></a>
    <a href="#"><div><p>Cookie Declaration</p></div></a>
    
    </div>
    </div>
        </div>
        </div>  
        
    )
    }
export default Footer;