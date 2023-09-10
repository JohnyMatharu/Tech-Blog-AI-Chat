import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
// import the library

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Navbar extends React.Component {

  render() {    
    const { location } = this.props;
        const isHome = location.pathname === "/";
    return (
      <div className="nav">

     
    
      <div id ="section">  
         
             
              
            {/* only when not active it should turn to dark grey keeping in mind with hover effect */}
              <div className="chatPage">
              Customer Service
              </div>
      </div>
      
      </div>
      
    );
  }
} 
  
const NavbarWithRouter = withRouter(Navbar);

export default NavbarWithRouter;



      
      
//https://github.com/JohnnyMatharu/Workday-Scheduler/blob/main/index.html
