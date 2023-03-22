import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/aboutme">About</Link>
        </li>
        <li>
          <Link to="/funstuff">Fun Stuff</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;