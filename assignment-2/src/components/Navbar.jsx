import { Link } from "react-router-dom"
import { Home, User, Briefcase, Mail, Sun, Moon } from "lucide-react"

export default function Navbar(props) {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <span className="navbar-brand">Shreyash</span>

                <nav className="nav-links">
                    <Link to="/"><Home size={15} /> Home</Link>
                    <Link to="/about"><User size={15} /> About</Link>
                    <Link to="/projects"><Briefcase size={15} /> Projects</Link>
                    <Link to="/contacts"><Mail size={15} /> Contact</Link>
                </nav>

                <button
                    className="toggle-btn"
                    onClick={() => {
                        if (props.currentTheme === 'light') props.themeRemoteControl('dark');
                        else props.themeRemoteControl('light');
                    }}
                >
                    {props.currentTheme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
                    {props.currentTheme === 'light' ? 'Dark' : 'Light'}
                </button>
            </div>
        </header>
    )
}
