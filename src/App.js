import logo from './logo.svg';
import './App.css';
//import React, { useState } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import chatPage from './pages/chatPage';
import Footer from './components/footer';
import { HashRouter as Router } from 'react-router-dom'


// userstate setMenuSelected and assign colour to that state when true 

//library.add(fab, faCheckSquare, faCoffee)

const App = () => {
  return (
  <div className="App">
<Router>
<Navbar></Navbar>
<Route exact path='/' component={chatPage} />
<div>
      <Switch>
        
          <Route exact path='/chatPage' component={chatPage} />
      
      </Switch>
      </div>
      </Router>
      <Footer></Footer>
    </div>

  );
}

export default App;
