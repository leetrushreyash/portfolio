import { useState } from "react"
import { User, Mail, MessageSquare, Send, CheckCircle } from "lucide-react"

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const isFormValid = name.length > 0 && email.length > 0 && message.length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        fetch("http://localhost:5000/api/contact", {
            method: "POST",                   // 1. Tell it we are sending data
            headers: {
                "Content-Type": "application/json" // 2. Tell the server we are sending JSON
            },
            body: JSON.stringify({            // 3. Package up the data
                name: name,
                email: email,
                message: message
            })
        })
            .then(response => {
                if (response.ok) {
                    setSubmitted(true);
                    setName("");
                    setIsLoading(false)
                    setEmail("");
                    setMessage("");
                }
                else {
                    return response.json().then(errorData => {
                        throw new Error(errorData.error);
                    });
                }
            })
            .catch(error => {
                setIsLoading(false);
                setError(error.message);
            })


    };

    return (
        <div className="contact-section">
            <h2>Get In <span className="gradient-text">Touch</span></h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "30px" }}>
                Have a project idea or just want to connect? Fill out the form below.
            </p>

            {submitted && (
                <div className="success-message">
                    <CheckCircle size={18} />
                    Message sent! I'll get back to you soon.
                </div>
            )}

            {error && <p className="error-message" style={{color: "var(--primary-color)", marginBottom: "15px"}}>{error}</p>}
            {isLoading && <p style={{marginBottom: "15px"}}>Sending message...</p>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="contact-name"><User size={14} /> Name</label>
                    <input
                        id="contact-name"
                        type="text"
                        placeholder="Shreyash Sharma"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact-email"><Mail size={14} /> Email</label>
                    <input
                        id="contact-email"
                        type="email"
                        placeholder="shreyash@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="contact-message"><MessageSquare size={14} /> Message</label>
                    <textarea
                        id="contact-message"
                        placeholder="Write your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn-primary" disabled={!isFormValid}>
                    <Send size={16} />
                    Send Message
                </button>
            </form>
        </div>
    );
}