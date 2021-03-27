import React from'react'
import { Link } from "react-router-dom"
import Hamburger from './Hamburger'
import RightNav from './RightNav'
import './nav.css'

//const Nav = styled.nav`
//
//`

const Nav = () => {
    return ( 
        <div className="_nav">
           <Link>
              <img className="navlogo" src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_250/v1616622334/website_logo_transparent_background_lzgkuz.png" alt="jorge soto.coder"></img>
           </Link>
           <div className="menu-bar">
              <RightNav />
           </div>
           <Hamburger />
        </div>
    );
  };



export default Nav