import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  align-items: center;
`
const P = styled.p`
  margin: auto;
  text-align: center;
  min-width: 350px;
  max-width: 768px;
  font-size: 25px;

  .main-container {
  display: block;
  padding-top: 80px;
  text-align: center;
}
`


const Home = () => {
    return(
        <div className="main-container">
            <h1>Jorge Soto</h1>
            <h1>Full-Stack Web Developer</h1>
            <img src="https://res.cloudinary.com/acurunner79/image/upload/v1609628595/a41da708-81e9-4ec3-9364-9d8748f7063d-abefd9c3-2fd7-4408-9b0a-a57280c0ca82-v1_iaim8e.png" alt="Jorge Soto"></img>
        <Div>
            <P>Aspiring Full-stack web developer and professional dancer who is always looking for ways to level up in all aspects. Passionate about applying structure in my everyday life, making me more efficient. Eager to create functional products shaped around consumer wants and needs influenced by industry-based feedback and research.</P>
        </Div>
        </div>
    )
}


export default Home