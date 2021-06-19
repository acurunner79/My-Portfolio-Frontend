import React from 'react'
import { Link } from "react-router-dom"
import './rightNav.css'


const RightNav = (props) => {
  
  
    return (     
    <div className="links-container">
        <Link to="/home">
          <li className="links" onClick={props.handleClick}>
            Home
          </li>
        </Link>
        <Link to="/my_projects">
          <li className="links" onClick={props.handleClick}>
            Projects
          </li>
          </Link> 
          <Link to="/contact">
            <li className="links" onClick={props.handleClick}>
              Contact
            </li>
          </Link>      
    </div>
    )
}

export default RightNav
