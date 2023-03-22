import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home/aboutme" className="navbar-logo">
            aboutme
          </Link>
          <Link to="/home/" className="navbar-logo">
            back home
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar

