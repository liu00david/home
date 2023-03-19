import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import homepage from './homepage';
import pagetwo from './pagetwo';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="/pagetwo" component={pagetwo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
