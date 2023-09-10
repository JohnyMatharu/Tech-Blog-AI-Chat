import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import $ from 'jquery';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




/*

Local:            http://localhost:3000
On Your Network:  http://192.168.2.10:3000

Neil homework: redevelopment same portfolio, special bootstrap is given in resources
https://react-bootstrap.github.io/


Check you app when needs to be finally ready, push code and see if you need to reploy anything
is yes then start with npm run build and follow doc given by AskBcs

Code is still showing an error from package.json, its for the name of the app, now fixed for capital letter-
keep an eye

React router dom has been installed 
hashrouter too

Acceptance Criteria

HERE



The contact form should be similar to the one you built in the module project. 

Consider adding your email address and phone number on the Contact page.

Projects-follow same design as previous portfolio

Use mobile-first design.

Can use resources like Coolors (Links to an external site.) 

Application has a single Project component that’s used multiple times in the Portfolio section. Header and footer
are static irrespective of the page

Application must be deployed to GitHub Pages.


Repository contains high-quality README file with description, screenshot, and link to deployed application.

How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository, with a unique name and a README describing the project.

*/