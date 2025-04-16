import React, {useState, useEffect} from 'react'
import'./Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowAnimation(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className='home' id='home'>
    <div className={`home-content ${showAnimation ? "animate": ""}`}>
      <div>
      <h2>Hello!, It's Me</h2>
      <h1>Nwachukwu Danilo</h1>
      <h2>And I'm a <span>Frontend Developer</span></h2>
      <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <div className='social-media'>
        <a target='_blank' rel='noreferrer'
         href="https://www.facebook.com/profile.php?id=100085307892509">
          <FontAwesomeIcon icon={faFacebook}/></a>
        <a target='_blank' rel='noreferrer'
         href="https://x.com/NwachukwuD26834"><FontAwesomeIcon icon={faTwitter}/></a>
        <a target='_blank' rel='noreferrer'
         href="https://www.instagram.com/danilonwachukwu/">
          <FontAwesomeIcon icon={faInstagram}/></a>
        <a target='_blank' rel='noreferrer'
         href="https://www.linkedin.com/in/nwachukwu-danilo-b1985a351">
          <FontAwesomeIcon icon={faLinkedin}/></a>
      </div>
      <a href="https://github.com/Okwuy" className='btn'>About Me</a>
      </div>
      <div className='home-img'>
        <img src="./dani.jpg" width="100%" />
      </div>
    </div>
    </section>
  )
}

export default Home