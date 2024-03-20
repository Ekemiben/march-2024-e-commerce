import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsApp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt=''/>
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About </li>
        <li>Contact Us</li>
      </ul>
      <div className='footer-social-icons'>
        <div className='footer-icons-container'>
            <img src={instagram_icon}alt=''></img>
        </div>
       
        <div className='footer-icons-container'>
            <img src={pinterest_icon}alt=''></img>
        </div>
        <div className='footer-icons-container'>
            <img src={whatsApp_icon}alt=''></img>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copy @ 2024</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
