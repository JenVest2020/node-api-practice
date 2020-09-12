import React from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
       <Navigation />
      <Route exact path='/'>
        <HomePage />
      </Route>
     
      
    </div>
    

  );
}

export default App;
