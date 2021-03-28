import React from 'react'
import { Link } from "react-router-dom"
import './landing.css'


const Landing = () => {
    return (
        <>
        <div>
        </div>
        <div className="container">
            <div className="logo">
                <img className="logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1616873759/website_logo_transparent_background_2_ahhr1g.png" alt="landing-logo"/>
            </div>
            
          <Link to="/home">
            <button className="button"><h3>Enter Site</h3></button>
          </Link>
        </div>
        </>
    )
}

export default Landing