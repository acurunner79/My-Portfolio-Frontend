import {Switch, Route} from "react-router-dom"
import {useEffect, useState} from 'react'
import Nav from './navbar/Nav'
import Home from './components/Home'
import ProjectCard from './components/ProjectCard'
import Skills from './components/Skills'
import Landing from './components/Landing'
import About from './components/About'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  text-align: center;
  text-decoration: none !important;
  background: black;
  color: #32bacc;
  /* -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black; */
  /* font-family: 'Unica One'; */
  font-family: 'Rajdhani';
}

h1 {
  font-size: 60px;
  background: -webkit-linear-gradient(#fa914d, #32bacc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`
function App() {
  const [project, setProject] = useState(null)

const getData = async () => {
    
    const projectCall = await fetch("https://shrouded-brook-86349.herokuapp.com/projects")
    const projectData = await projectCall.json()
    setProject(projectData)
    console.log('This is project data', projectData)
}

useEffect(() => getData(), [])

  return (
    <div className="App">
      <GlobalStyle />
        <Switch>
          <Route exact path ="/">
            <Landing />
          </Route>
          <Route exact path ="/home">
            <Nav />
            <Home />
          </Route>
          <Route exact path="/my_projects">
            <Nav />
            <ProjectCard project={project}/>
            <Skills />
          </Route>
          <Route exact path="/contact">
            <Nav />
            <About/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
