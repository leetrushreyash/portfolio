import { GraduationCap, Code2, Database, Brain, Trophy } from "lucide-react"

export default function About() {
    return (
        <div className="about-section">
            <h2>About <span className="gradient-text">Me</span></h2>

            <h3><GraduationCap size={20} /> Education</h3>
            <ul>
                <li>
                    <strong>National Institute of Technology, Warangal</strong> — B.Tech in Computer Science and Engineering (2024–2028)
                    <br /><span style={{ color: "var(--accent-color)", fontSize: "0.9rem" }}>CGPA: 8.93</span>
                </li>
                <li>
                    <strong>Adarsh Vidyalaya Mowa, Raipur</strong> — CBSE Board (Class XII) • 2024
                    <br /><span style={{ color: "var(--accent-color)", fontSize: "0.9rem" }}>Percentage: 94%</span>
                </li>
            </ul>

            <h3><Code2 size={20} /> Technical Skills</h3>
            <ul>
                <li><strong>Languages:</strong> Java, C++, Python (Scripting), SQL</li>
                <li><strong>Backend:</strong> Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs</li>
                <li><strong>Databases:</strong> PostgreSQL, H2 Database, Elasticsearch, Redis, Flyway</li>
                <li><strong>Developer Tools:</strong> Git, Maven, Docker, AWS (EC2, RDS), Swagger/OpenAPI, Linux, JUnit 5, Mockito</li>
                <li><strong>Core Concepts:</strong> JWT, RBAC, Concurrency, Asynchronous Programming</li>
                <li><strong>Coursework:</strong> Data Structures & Algorithms, OOP, OS, DBMS</li>
            </ul>

            <h3><Trophy size={20} /> Problem Solving</h3>
            <ul>
                <li>600+ DSA problems solved across arrays, DP, graphs, and trees (LeetCode / GFG)</li>
            </ul>

            <h3><Brain size={20} /> Positions of Responsibility</h3>
            <ul>
                <li>
                    <strong>Joint Secretary — Computer Science Society, NIT Warangal</strong> (2024 – Present)
                    <br />Spearheaded technical execution for Git boot camps and FinTech hackathons, driving engagement across 150+ student participants.
                </li>
            </ul>
        </div>
    )
}