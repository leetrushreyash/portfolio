import TechStack from "./TechStack"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

export default function ProjectCard(props) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="project-card">
            <h3>{props.title}</h3>

            {showDetails && (
                <>
                    <p>{props.description}</p>
                    <TechStack techs={props.techStack} />
                </>
            )}

            <div className="project-card-footer">
                <button
                    className="toggle-btn"
                    onClick={() => setShowDetails(!showDetails)}
                >
                    {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    {showDetails ? "Hide Details" : "View Details"}
                </button>

                <Link to={`/projects/${props.id}`}>
                    Full Info <ExternalLink size={13} />
                </Link>
            </div>
        </div>
    )
}