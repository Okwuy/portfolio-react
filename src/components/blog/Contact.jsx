import { useRef, useState , useEffect} from 'react'
import'./Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const refForm = useRef();

  const [showAnimation, setShowAnimation] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => setShowAnimation(true), 100);
      return () => clearTimeout(timer);
    }, []);

  const sendEmail = (e) => {
       e.preventDefault();

       emailjs.sendForm(
        'service_8n6ycjl', 
        'template_lua24kq', 
        e.target, 
        'cVlGvBLHGOwSD09a-'
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
      })
      .catch((error) => {
        console.log("Error sending email:", error.text);
      });
  }

  return (
    <section className='contact'>
      <div className={`contact-header ${showAnimation ? "animate": ""}`}>
      <h2 className='heading'>Contact <span>Me</span></h2>
      <form ref={refForm} onSubmit={sendEmail}>
        <div className='input-box'>
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email Address' />
        </div>
        <div className='input-box'>
          <input type="number" placeholder='Mobile Number' />
          <input type="text" placeholder='Email Subject' />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
        <button className='btn' type='submit'>Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact