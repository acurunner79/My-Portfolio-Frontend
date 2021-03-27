import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-around;
`

const Img = styled.img`
max-width: 50px;
max-height: 50px;
padding: 10px;
`


const Skills = () => {
    return (
        <div className="skills-container">
            <Section className="skills-icons">
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795551/html5-brands_zkxmza.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795551/css3-alt-brands_y3qkg4.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795551/bootstrap-brands_uzbikh.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795551/node-brands_jthv8r.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795551/react-brands_yolob8.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/8416740941580802960_veoj9v.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/npm-brands_iittov.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13248968591579517872_n86pje.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/8609334331551942134_uokmqg.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/13642417491551942639_rk0uow.svg"/>
                <Img src="https://res.cloudinary.com/acurunner79/image/upload/v1616795549/17459301571551942128_xtxqcr.svg"/>
            </Section>
        </div>
    )
}

export default Skills