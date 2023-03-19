import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <h2>This is my second line.</h2>
      <p>Check out <Link to="/Login">This is my second page</Link>.</p>
    </div>
  );
}

export default Homepage;