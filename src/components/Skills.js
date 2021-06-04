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
                    <FaReact  size="70" color="light blue"/>
                    <p>React</p>
                </section>
                <section className="icons">
                    <FaHtml5 size="70" color="orange"/>
                    <p>HTML5</p>
                </section>
                <section className="icons">
                    <FaCss3 size="70" color="blue"/>
                    <p>CSS3</p>
                </section>
                <section className="icons">
                    <FaJs size="70" color="#c8ce0a"/>
                    <p>JavaScript</p>
                </section>
                <section className="icons">
                    <FaBootstrap size="70" color="purple"/>
                    <p>Bootstrap</p>
                </section>
                <section className="icons">
                    <FaNode size="70" color="green"/>
                    <p>NodeJS</p>
                </section>
                <section className="icons">
                    <FaNpm size="70" color="red"/>
                    <p>NPM</p>
                </section>
            </div>
            </div>
            <div className="skills-container">
                <h1>Back-End</h1>
                <div className="back-end">
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13248968591579517872_n86pje.svg"/>
                        <p>Ruby</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/8609334331551942134_uokmqg.svg"/>
                        <p>PostgreSQL</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13642417491551942639_rk0uow.svg"/>
                        <p>Ruby On Rails</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622768279/mongodb-5-1175140_iz9zst.png"/>
                        <p>MongoDB</p>
                    </section>
                </div>
            </div>
            <div className="skills-container">
                <h1>Tech Stuff</h1>
                <div className="tech-stuff">
                    <section className="icons">
                        <FaGithub size="70" color="#d000ff"/>
                        <p>GitHub</p>
                    </section>
                    <section className="icons">
                        <FaWindows size="70"/>
                        <p>Windows</p>
                    </section>
                    <section className="icons">
                        <FaUbuntu size="70" color="orange"/>
                        <p>Ubuntu</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622747987/3525127881551941184-512_xr1x1y.png"/>
                        <p>Linux</p>
                    </section>
                    <section className="icons">
                        <Img src="https://res.cloudinary.com/acurunner79/image/upload/c_scale,w_70/v1622747599/UnRAID-Icon_aycrd6.png"/>
                        <p>UnRAID</p>
                    </section>
                    <section className="icons">
                        <FaDocker size="70" />
                        <p>Dockers (UnRAID)</p>
                    </section>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills