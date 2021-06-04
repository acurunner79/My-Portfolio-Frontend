import React from 'react'
import styled from 'styled-components'
import Skills from './Skills'
import './home.css'

const Div = styled.div`
  display: flex;
  align-items: center;
`
const P = styled.p`
  margin: 0 auto;
  padding: auto;
  text-align: center;
  min-width: 350px;
  max-width: 768px;
  font-size: 25px;
  /* background: #fa914d; */
  border-radius: 4px;
  border-right: 2px solid #32bacc;
  border-left: 2px solid #32bacc;
  border-bottom: 2px solid #32bacc;
`

const Home = () => {
    return(
        <div className="main-container">
            <h1>Jorge Soto</h1>
            <h1>Full-Stack Web Developer</h1>
            <img src="https://res.cloudinary.com/acurunner79/image/upload/v1609628595/a41da708-81e9-4ec3-9364-9d8748f7063d-abefd9c3-2fd7-4408-9b0a-a57280c0ca82-v1_iaim8e.png" alt="Jorge Soto"></img>
        <Div>
            <P>Full-stack web developer and professional dancer who is always looking for ways to improve in all aspects. I use React to develop responsive applications with cleaner code. Eager to create unique web applications that challenge me to deliver an even greater product</P>
        </Div>
            <div className="click-icons">
              {/* <h1>Lets connect!</h1> */}
              <div id="home-icons">
                <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1cHCoiVcES6uHkpnJ37Y4np6dteilCvuEUfaUDPhMQdY/edit?usp=sharing"><h2>Resume</h2><img className="icon" src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1617133179/resume-clipart-icon-web-icons-png-intended-for-my-12-300x300_mgu8pb.png" alt="resume-icon"></img>   
                </a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jorgelsotojr/"><h2>Linkedin</h2><img className="icon" src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1617132616/social-linkedin-button-blue-icon--social-bookmark-iconset--yootheme-5_aoha9j.png" alt="linkedin-icon"></img>
                </a>
              </div>
            </div>
        <Skills />
        </div>
    )
}


export default Home