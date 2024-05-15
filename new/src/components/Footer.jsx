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
    <h4>For business</h4>
    <a href="/blah"><p>Employer</p></a>
    <a href="/blah"><p>healthplan</p></a>
    <a href="/blah"><p></p>Individual</a>
    </div>
    <div className="sb_footer_links_div">   
    <h4>For business</h4>
    <a href="/blah"><p>Employer</p></a>
    <a href="/blah"><p>healthplan</p></a>
    <a href="blah"><p></p>Individual</a>
    </div>
    <div className="sb_footer_links_div">   
    <h4>For business</h4>
    <a href="/blah"><p>Employer</p></a>
    <a href="/blah"><p>healthplan</p></a>
    <a href="/blah"><p></p>Individual</a>
    </div>
    <div className="sb_footer_links_div">   
    <h4>For business</h4>
    <a href="/blah"><p>Employer</p></a>
    <a href="/blah"><p>healthplan</p></a>
    <a href="/blah"><p></p>Individual</a>
    </div>
    <div className="sb_footer_links_div">
    <h4>For business</h4>
    <div className="socialMedia">
    <p><FontAwesomeIcon icon={faFacebook} /></p>
    <p><FontAwesomeIcon icon={faTwitter} /></p>
    <p><FontAwesomeIcon icon={faLinkedin} /></p>
    <p><FontAwesomeIcon icon={faInstagram} /></p>
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