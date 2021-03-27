
import Nav from './navbar/Nav'
import ProjectCard from './components/ProjectCard'
import Skills from './components/Skills'
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  text-align: center;
  background: black;
  color: #32bacc;
}

.main-container {
  display: block;
  padding-top: 80px;
  text-align: center;
}
`
const Div = styled.div`

`
const P = styled.p`
min-width: 350px;
max-width: 768px;
border: solid white;
border-width: 3px; 
text-align: center !important;
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <div className="main-container">
        <h1>Full-Stack Web Developer</h1>
        <img src="https://res.cloudinary.com/acurunner79/image/upload/v1609628595/a41da708-81e9-4ec3-9364-9d8748f7063d-abefd9c3-2fd7-4408-9b0a-a57280c0ca82-v1_iaim8e.png" alt="Jorge Soto"></img>
        <Div>
          <P>Aspiring Full-stack web developer and professional dancer who is always looking for ways to level up in all aspects. Passionate about applying structure in my everyday life, making me more efficient. Eager to create functional products shaped around consumer wants and needs influenced by industry-based feedback and research.</P>
        </Div>
        <Skills />
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
