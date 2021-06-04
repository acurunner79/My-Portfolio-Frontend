import React from 'react'
import styled from 'styled-components'
import './skills.css'
import { FaReact, FaHtml5, FaCss3, FaJs, FaBootstrap, FaNode, FaNpm, FaDocker, FaUbuntu, FaGithub, FaWindows  } from 'react-icons/fa'


const Img = styled.img`
width: 70px;
height: 70px;
padding: 10px 10px;
`


const Skills = () => {

    return (
        <>
        <div>
            <h1>Skills</h1>
        </div>
        <div className="skills-main">
            <div className="skills-container">
                <h1>Front-End</h1>
            <div className="front-end">
                <section className="icons">
                    <FaReact size="70" color="light blue"/>
                    <p className="hidden-text">React</p>
                </section>
                <section className="icons">
                    <FaHtml5 size="70" color="orange"/>
                    <p className="hidden-text">HTML5</p>
                </section>
                <section className="icons">
                    <FaCss3 size="70" color="blue"/>
                    <p className="hidden-text">CSS3</p>
                </section>
                <section className="icons">
                    <FaJs size="70" color="#c8ce0a"/>
                    <p className="hidden-text">JavaScript</p>
                </section>
                    <p className="hidden-text">This is where Im going to put some text that speaks about what I know. This is also a test to see how it would look with a couple beefy sentences. I wonder how many sentences and words I can put in here until it looks weird?</p>
                <section className="icons">
                    <FaBootstrap size="70" color="purple"/>
                    <p className="hidden-text">Bootstrap</p>
                </section>
                <section className="icons">
                    <FaNode size="70" color="green"/>
                    <p className="hidden-text">NodeJS</p>
                </section>
                <section className="icons">
                    <FaNpm size="70" color="red"/>
                    <p className="hidden-text">NPM</p>
                </section>
            </div>
            </div>
            <div className="skills-container">
                <h1>Back-End</h1>
                <div className="back-end">
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13248968591579517872_n86pje.svg"/>
                        <p className="hidden-text">Ruby</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/8609334331551942134_uokmqg.svg"/>
                        <p className="hidden-text">PostgreSQL</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13642417491551942639_rk0uow.svg"/>
                        <p className="hidden-text">Ruby On Rails</p>
                    </section>
                        <p className="hidden-text">This is where Im going to put some text that speaks about what I know. This is also a test to see how it would look with a couple beefy sentences. I wonder how many sentences and words I can put in here until it looks weird?</p>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622768279/mongodb-5-1175140_iz9zst.png"/>
                        <p className="hidden-text">MongoDB</p>
                    </section>
                </div>
            </div>
            <div className="skills-container">
                <h1>Tech Stuff</h1>
                <div className="tech-stuff">
                    <section className="icons">
                        <FaGithub size="70" color="#d000ff"/>
                        <p className="hidden-text">GitHub</p>
                    </section>
                    <section className="icons">
                        <FaWindows size="70"/>
                        <p className="hidden-text">Windows</p>
                    </section>
                    <section className="icons">
                        <FaUbuntu size="70" color="orange"/>
                        <p className="hidden-text">Ubuntu</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622747987/3525127881551941184-512_xr1x1y.png"/>
                        <p className="hidden-text">Linux</p>
                    </section>
                        <p className="hidden-text">This is where Im going to put some text that speaks about what I know. This is also a test to see how it would look with a couple beefy sentences. I wonder how many sentences and words I can put in here until it looks weird?</p>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622747599/UnRAID-Icon_aycrd6.png"/>
                        <p className="hidden-text">UnRAID</p>
                    </section>
                    <section className="icons">
                        <FaDocker size="70" />
                        <p className="hidden-text">Dockers (UnRAID)</p>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills