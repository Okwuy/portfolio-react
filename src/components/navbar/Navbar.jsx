import React, { useState } from 'react'
import'./Navbar.css'
import { Link} from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='navbar'>
        <div>
          <a href="" className='logo'>Portfolio</a>
        </div>
        <div className='menu' onClick={() =>{
        setMenuOpen(!menuOpen)
        console.log(menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" :""}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/blog'>Contact</Link></li>
            <li><Link to='/menu'>Services</Link></li>
            <li><Link to='/testimonial'>Portfolio</Link></li>
        </ul>
    </div>
  )
}

export default Navbar