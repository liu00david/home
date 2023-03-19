import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome to my website! david liu.</h1>
      <h2>This is my second line.</h2>
      <p>Check out <Link to="/home/aboutme">This is my about me page</Link>.</p>
    </div>
  );
}

export default Homepage;