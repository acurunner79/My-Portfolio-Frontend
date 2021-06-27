import React from 'react'
import Card from 'react-bootstrap/Card'
import {Accordion} from 'react-bootstrap'
import './card.css'


const ProjectCard = ({project}) => {



    const loaded = () => {
        return (
            <div>
                <h1>Projects</h1>
            <div className="card-container">
                {project?.map((info, index) => {
                    return ( 
                        <div key={index}>
                        <h2>{info.name}</h2>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="project-image" src={info.img} />
                                <Accordion >
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <div className="button-container">
                                            <button className="card-button" variant="secondary" ><h4><a target="_blank" rel="noreferrer" href={info.url}>Go To Site</a></h4></button>
                                            <button className="card-button" variant="secondary" ><h4><a target="_blank" rel="noreferrer" href={info.github}>GitHub</a></h4></button>
                                        </div>
                                            <h4>Description</h4>
                                        <div class="center-con">
                                            <div class="round">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body className="descr-style">{info.description}</Card.Body>
                                    </Accordion.Collapse>
                                </Accordion>
                                    <Card.Body className="card-body">
                                        <Card.Title></Card.Title>
                                            <Card.Text className="card-text">
                                           {/* {info.description} */}
                                            </Card.Text>
                                </Card.Body>
                        </Card>
                    </div>
                    )
                })}
            </div>
            </div>
        )
    }

    const loading = () => {
        return (
            <div>Loading Projects...</div>
        )
    }

    return project ? loaded() : loading()

}


export default ProjectCard