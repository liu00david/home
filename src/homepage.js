import React from 'react';
import { Link } from 'react-router-dom';

function homepage() {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>Check out <Link to="/pagetwo">This is my second page</Link>.</p>
    </div>
  );
}

export default homepage;