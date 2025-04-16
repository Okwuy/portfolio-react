import React from 'react'
import'./Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-text'>
        <p>Copyright &copy; 2025 By Danilo | All Rights Reserved</p>
      </div>
      <div className='footer-icon'>
        <a href=""><FontAwesomeIcon icon={faTwitter}/></a>
      </div>
    </div>
  )
}

export default Footer