import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from'react-bootstrap/Button'
import './card.css'


const ProjectCard = () => {

    const [project, setProject] = useState(null)

    const getData = async () => {
        
        const projectCall = await fetch("https://shrouded-brook-86349.herokuapp.com/projects")
        const projectData = await projectCall.json()
        setProject(projectData)
        console.log('This is project data', projectData)
    }

    useEffect(() => getData(), [])

    const loaded = () => {
        return (
            <div className="card-container">
                {project?.map((info, index) => {
                    return (
                    <div key={index}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img className="project-image" src={info.img} />
                            <Card.Body>
                                <Card.Title>{info.name}</Card.Title>
                                <Card.Text className="card-text">
                                    {info.description}
                                </Card.Text>
                                <Button variant="secondary" href={info.url}>Open Project</Button>
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