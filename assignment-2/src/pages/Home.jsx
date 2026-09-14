import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Loader2 } from "lucide-react"

export default function Home() {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="loading-screen">
                <Loader2 size={40} strokeWidth={1.5} style={{ animation: "spin 1s linear infinite" }} />
                INITIALIZING...
                <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </div>
        );
    }

    return (
        <div className="hero-section">
            <span className="hero-badge">B.Tech CSE • NIT Warangal</span>

            <h1>Hi, I'm <span className="gradient-text">Shreyash Sharma</span></h1>

            <p className="subtitle">
                B.Tech in Computer Science and Engineering at National Institute of Technology, Warangal.
            </p>
            <p className="subtitle">
                Passionate about backend development, distributed systems, and solving complex DSA problems.
            </p>

            <div className="hero-cta">
                <Link to="/projects" className="btn-primary">
                    View Projects <ArrowRight size={16} />
                </Link>
                <Link to="/contacts" className="btn-outline">
                    Contact Me
                </Link>
            </div>
        </div>
    );
}