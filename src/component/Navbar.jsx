import React from 'react'
import{ Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/carriers">carriers</Link>
      </div>
      
    </nav>
  )
}

export default Navbar
