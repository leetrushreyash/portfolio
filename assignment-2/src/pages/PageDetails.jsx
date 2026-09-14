import { useParams, Link } from 'react-router-dom';

import { ArrowLeft, Code2 } from 'lucide-react';

import { useState, useEffect } from 'react';

export default function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/api/projects/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Project not found");
                }
                return response.json();
            })
            .then(project => {
                setProject(project);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <h2>Loading projects from server......</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }


    if (!project) {



        return (
            <div className="details-section">
                <h2>Project Not Found</h2>
                <p style={{ color: "var(--text-muted)" }}>That project doesn't exist.</p>
                <Link to="/projects" className="details-back">
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="details-section">
            <h1><span className="gradient-text">{project.title}</span></h1>

            <p><strong>Description</strong></p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>{project.description}</p>

            <p style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <Code2 size={16} /> <strong>Technologies Used</strong>
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "30px" }}>{project.techStack}</p>

            <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: "inline-flex", textDecoration: "none" }}>
                <Code2 size={16} /> View on GitHub
            </a>

            <br />
            <Link to="/projects" className="details-back" style={{ display: "inline-flex", marginTop: "30px" }}>
                <ArrowLeft size={16} /> Back to Projects
            </Link>
        </div>
    );
}
