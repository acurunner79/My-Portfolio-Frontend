import React from 'react'
import { Link } from "react-router-dom"
import './rightNav.css'


const RightNav = (props) => {
  
    return (     
    <div className="links-container">
        <Link to="/">
          <li className="links" onClick={props.handleClick}>
            Home
            <div className="underline"></div>
          </li>
        </Link>
        <Link to="/my_garage">
          <li className="links" onClick={props.handleClick}>
            My Projects
            <div className="underline"></div>
          </li>
        </Link>
        <Link to="/build_a_car">
          <li className="links" onClick={props.handleClick}>
            Linkedin
            <div className="underline"></div>
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
