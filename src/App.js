
import ChatPage from "./pages/ChatPage"
// import Time from "./pages/test1.js"
// import ChatPage2 from "./pages/ChatPage2"
import logo from './logo.svg';
import './App.css';
//import React, { useState } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/footer';
import { HashRouter as Router } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
  <div className="App">
<Router>
<Route exact path='/' component={ChatPage} />
{/* <Route exact path='/' component={Time} /> */}
<div>
      <Switch>
      {/* <Route exact path='/test1' component={Time} /> */}
          <Route exact path='/ChatPage' component={ChatPage} />
      
      </Switch>
      </div>
      </Router>
   
    </div>

  );
}

export default App;

