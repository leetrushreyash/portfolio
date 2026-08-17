import { Code2, Globe, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div>
                    <p style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: "700", color: "var(--accent-color)", marginBottom: "4px" }}>
                        SS_PORTFOLIO
                    </p>
                    <p className="footer-copy">© 2025 Shreyash Sharma. All rights reserved.</p>
                </div>

                <div className="footer-links">
                    <a href="https://github.com/leetrushreyash" target="_blank" rel="noreferrer">
                        <Code2 size={16} /> leetrushreyash
                    </a>
                    <a href="https://www.linkedin.com/in/shreyash-sharma-73aa0a374" target="_blank" rel="noreferrer">
                        <Globe size={16} /> LinkedIn
                    </a>
                    <a href="mailto:shreyash2006sharma@gmail.com">
                        <Mail size={16} /> Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
