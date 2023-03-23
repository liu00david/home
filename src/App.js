import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Homepage from './pages/Homepage';
import Funstuff from './pages/Funstuff';
import Notfound from './pages/Notfound';

import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route exact path="/home" element={<Homepage/>} />
            <Route exact path="/home/aboutme" element={<Aboutme/>} />
            <Route exact path="/home/funstuff" element={<Funstuff/>} />
            <Route path="*" element={<Notfound/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
