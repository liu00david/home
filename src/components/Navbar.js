import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home/aboutme" className="navbar-logo">
            DAVID navbar aboutme
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar

