import React, {useState, useEffect} from 'react'
import'./Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
    const [showAnimation, setShowAnimation] = useState(false);
  
    useEffect(() => {
      // Trigger the animation after a delay
      const timer = setTimeout(() => setShowAnimation(true), 100);
      return () => clearTimeout(timer);
    }, []);
  return (
    <section className='portfolio'>
      <div className={`portfolio-header ${showAnimation ? "animate": ""}`}>
        <h2 className='heading'>Latest <span>Project</span></h2>

        <div className='portfolio-container'>
            <div className='portfolio-box'>
              <img src="./dani1.jpg" alt="" />
              <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>If I need to define myself in one sentence that would be a sport fanatic, and tech-obsessed!!.</p>
                    <a href=""><FontAwesomeIcon icon={faExternalLink}/></a>
                    </div>
            </div>

            <div className='portfolio-box'>
              <img src="./image3.jpg" alt="" />
              <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>If I need to define myself in one sentence that would be a sport fanatic, and tech-obsessed!!.</p>
                    <a href=""><FontAwesomeIcon icon={faExternalLink}/></a>
                    </div>
            </div>

            <div className='portfolio-box'>
              <img src="./dani2.jpg" alt="" />
              <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>If I need to define myself in one sentence that would be a sport fanatic, and tech-obsessed!!.</p>
                    <a href=""><FontAwesomeIcon icon={faExternalLink}/></a>
                    </div>
            </div>

            <div className='portfolio-box'>
              <img src="./image5.jpg" alt="" />
              <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>If I need to define myself in one sentence that would be a sport fanatic, and tech-obsessed!!.</p>
                    <a href=""><FontAwesomeIcon icon={faExternalLink}/></a>
                    </div>
            </div>

            <div className='portfolio-box'>
              <img src="./image4.jpg" alt="" />
              <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>If I need to define myself in one sentence that would be a sport fanatic, and tech-obsessed!!.</p>
                    <a href=""><FontAwesomeIcon icon={faExternalLink}/></a>
                    </div>
            </div>

            <div className='portfolio-box'>
              <img src="./image6.jpg" alt="" />
              <div className='portfolio-layer'>
                    <h4>Web Design</h4>
                    <p>If I need to define myself in one sentence that would be a sport fanatic, and tech-obsessed!!.</p>
                    <a href=""><FontAwesomeIcon icon={faExternalLink}/></a>
                    </div>
            </div>

        </div>
        </div>
    </section>
  )
}

export default Portfolio