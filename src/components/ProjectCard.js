import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from'react-bootstrap/Button'
import './card.css'


const ProjectCard = ({project}) => {


    const loaded = () => {
        return (
            <div className="card-container">
                {project?.map((info, index) => {
                    return (
                    <div key={index}>
                        <h2>{info.name}</h2>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="project-image" src={info.img} />
                            <Card.Body className="card-body">
                                <Card.Title></Card.Title>
                                <Card.Text className="card-text">
                                    {info.description}
                                </Card.Text>
                                <button className="card-button" variant="secondary" href={info.url}><h2>Open Project</h2></button>
                            </Card.Body>
                        </Card>
                    </div>

                    )
                })}
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