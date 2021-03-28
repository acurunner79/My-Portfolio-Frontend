import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;
`

const Img = styled.img`
max-width: 70px;
max-height: 50px;
padding: 10px;
`


const Skills = () => {
    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <Section className="skills-icons">
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616810126/html5-40-1175193_o6nbmb.png"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616810420/css_pgejuf.png"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616811593/javascript-seeklogo.com_ycqt1w.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616810562/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67_em9oix.png"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616810648/node-js-icon-8_y2mkji.png"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616810757/1280px-React-icon.svg_fhfvbk.png"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616811755/npm_kktekq.png"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13248968591579517872_n86pje.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/8609334331551942134_uokmqg.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13642417491551942639_rk0uow.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/17459301571551942128_xtxqcr.svg"/>
            </Section>
        </div>
    )
}

export default Skills