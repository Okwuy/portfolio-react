import React,{useState, useEffect} from 'react'
import'./Gallery.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart, faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons'

const Gallery = () => {
   const [showAnimation, setShowAnimation] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setShowAnimation(true), 100);
      return () => clearTimeout(timer);
    }, []);
  return (
    <section className='services' id='services'>
      <div  className={`services-content ${showAnimation ? "animate": ""}`}>
      <h2 className='heading'>Our <span>Services</span></h2>
      <div className='service-container'>
        <div className='service-box'>
          <FontAwesomeIcon icon={faCode}/>
          <h3>Web Developer</h3>
          <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <a target='_blank' rel='noreferrer' href="https://github.com/Okwuy" className='btn'>Read More</a>
        </div>

        <div className='service-box'>
          <FontAwesomeIcon icon={faPaintBrush}/>
          <h3>Graphics Designer</h3>
          <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <a target='_blank' rel='noreferrer' href="https://github.com/Okwuy" className='btn'>Read More</a>
        </div>

        <div className='service-box'>
          <FontAwesomeIcon icon={faBarChart}/>
          <h3>Digital Marketing</h3>
          <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <a target='_blank' rel='noreferrer' href="https://github.com/Okwuy" className='btn'>Read More</a>
        </div>

        
      <div className='service-box'>
          <FontAwesomeIcon icon={faCode}/>
          <h3>Telegram Bot</h3>
          <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <a target='_blank' rel='noreferrer' href="https://github.com/Okwuy" className='btn'>Read More</a>
        </div>

        <div className='service-box'>
          <FontAwesomeIcon icon={faCode}/>
          <h3>E-Commerce Site</h3>
          <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <a target='_blank' rel='noreferrer' href="https://github.com/Okwuy" className='btn'>Read More</a>
        </div>

        <div className='service-box'>
          <FontAwesomeIcon icon={faCode}/>
          <h3>Web Code</h3>
          <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <a target='_blank' rel='noreferrer' href="https://github.com/Okwuy" className='btn'>Read More</a>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Gallery