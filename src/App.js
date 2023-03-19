import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Notfound from './pages/Notfound';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/davidwideweb" element={<Homepage/>} />
          <Route exact path="/davidwideweb/login" element={<Login/>} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
