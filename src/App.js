import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Notfound from './pages/Notfound';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/home" element={<Homepage/>} />
          <Route exact path="/home/aboutme" element={<Aboutme/>} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
