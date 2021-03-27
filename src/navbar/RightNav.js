import React from 'react'
import { Link } from "react-router-dom"
import './rightNav.css'


const RightNav = (props) => {
  
    return (     
    <div className="links-container">
        <Link to="/">
          <li className="links" onClick={props.handleClick}>
            Home
          </li>
        </Link>
        <Link to="/my_projects">
          <li className="links" onClick={props.handleClick}>
            Projects
          </li>
        </Link>
        <Link to="/linkedin">
          <li className="links" onClick={props.handleClick}>
            Linkedin
          </li>
        </Link>
        <Link to="/about">
          <li className="links" onClick={props.handleClick}>
            About
          </li>
        </Link>
    </div>
    )
}

export default RightNav
