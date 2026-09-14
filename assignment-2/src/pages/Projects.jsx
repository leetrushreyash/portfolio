
import ProjectCard from "../components/ProjectCard"

import { useState, useEffect } from "react";




export default function Projects() {

    const [projects, setProjects] = useState([]);

    const [error, setError] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(response => response.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("error in fetching projects: ", error);
                setIsLoading(false);
                setError("Failed to fetch projects. Please try again later.");
            });
    }, []);


    if (isLoading) {
        return <h2>Loading projects from server......</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }


    return (
        <div className="projects-section">
            <h2>My <span className="gradient-text">Projects</span></h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
                Click "View Details" on a card to expand it, or "Full Info" to see the dedicated project page.
            </p>

            <div className="projects-grid">
                {projects.map((project) => {
                    return (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            link={project.link}
                        />
                    );
                })}
            </div>
        </div>
    );
}