import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projectsData.find((p) => p.id === parseInt(id));

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
