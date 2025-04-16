import React, {useState, useEffect} from 'react'
import'./About.css'

const About = () => {
   const [showAnimation, setShowAnimation] = useState(false);
  
    useEffect(() => {
      // Trigger the animation after a delay
      const timer = setTimeout(() => setShowAnimation(true), 100);
      return () => clearTimeout(timer);
    }, []);
  return (
    <section className='about'>
      <div className={`about-header ${showAnimation ? "animate": ""}`}>
      <div className='about-img'>
      <img src="./dani.jpg" alt="" />
      </div>
      <div className='about-content'>
        <h2 className='heading'>About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <h4>React Expert / JavaScript Expert/ HTML/CSS</h4>
        <p>I'm very ambitious front-end Developer looking for a role in
        established IT company with the opportunity to work with the latest
        technologies on challenging and diverse projects.
      </p>
      <p>  I specialize in crafting responsive and interactive web interfaces using technologies like
      HTML, CSS, JavaScript, and frameworks like React. I’m always eager to learn, grow, and take on
      exciting challenges in the tech world.
      </p>
      <p>If I need to define myself in one sentence that would be a sport fanatic, and tech-obsessed!!.</p>
      <a target='_blank' rel='noreferrer'
       href="https://github.com/Okwuy" className='btn'>Read More</a>
      </div>
      </div>
    </section>
  )
}

export default About