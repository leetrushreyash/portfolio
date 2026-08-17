import { projectsData } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
    return (
        <div className="projects-section">
            <h2>My <span className="gradient-text">Projects</span></h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "10px" }}>
                Click "View Details" on a card to expand it, or "Full Info" to see the dedicated project page.
            </p>

            <div className="projects-grid">
                {projectsData.map((project) => {
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