import React from 'react'
import { Link } from "react-router-dom"
import './landing.css'


const Landing = () => {
    return (
        <>
        <div>
          <Link to="/home">
            <button className="button">Hello</button>
          </Link>
        </div>
        <div className="container">
            <div className="logo">
                <img className="logo" src="https://res.cloudinary.com/acurunner79/image/upload/v1616873759/website_logo_transparent_background_2_ahhr1g.png" />
            </div>
            <div className="shadow"></div>
        </div>
        </>
    )
}

export default Landing