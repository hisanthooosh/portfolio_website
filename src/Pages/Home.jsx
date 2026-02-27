import React from 'react';
import '../App.css';
import profileImage from '../Image/1732697172599.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">

            {/* Header */}
            <header className="header">
                <div className="logo-dropdown">
                    <img src={profileImage} alt="Santhosh Gangasani" className="logo-image" />
                    <span className='name'>Santhosh Gangasani</span>
                </div>

                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Products</Link>
                    <Link to="/skills">Tech Stack</Link>
                    <Link to="/education">Journey</Link>
                    <Link to="/achievements">Recognition</Link>
                </nav>
            </header>

            <section className="main-section" id="home">
                <div className="text-content fade-up">
                    <h1 className="gradient-text">
                        Founder & SaaS Product Architect
                    </h1>

                    <h2 className="subtitle">
                        Building the Digital Backbone of Modern Education
                    </h2>

                    <p>
                        Founder of Doneswari Technologies LLP — building AICTE-approved,
                        DPIIT-recognized SaaS platforms for institutional automation.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/projects" className="btn-primary">
                            Explore Products
                        </Link>

                        <a
                            href="https://doneswaritechnologies.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow"
                        >
                            Visit Company
                        </a>
                    </div>
                </div>

                <div className="image-container fade-in">
                    <img src={profileImage} alt="Santhosh Gangasani" />
                </div>
            </section>

            {/* Credibility Section */}
            <section className="credibility-section">
                <h2>Institutional Recognition</h2>

                <div className="credibility-grid">
                    <div className="credibility-card">
                        <h3>MCA Registered LLP</h3>
                        <p>Legally incorporated under Ministry of Corporate Affairs, Government of India.</p>
                    </div>

                    <div className="credibility-card">
                        <h3>DPIIT Recognized Startup</h3>
                        <p>Official Startup India recognition validating innovation and scalability.</p>
                    </div>

                    <div className="credibility-card">
                        <h3>MSME (Udyam) Registered</h3>
                        <p>Government-recognized enterprise eligible for structured expansion.</p>
                    </div>

                    <div className="credibility-card">
                        <h3>AICTE Internship Approved</h3>
                        <p>Authorized internship provider aligned with national education standards.</p>
                    </div>
                </div>
            </section>

            <section className="vision-section">
                <div className="vision-content">
                    <h2 className="vision-title">
                        🌍 My Vision
                    </h2>

                    <h3 className="vision-heading">
                        Building the Digital Backbone of Modern Education
                    </h3>

                    <p className="vision-text">
                        I am building scalable SaaS infrastructure that bridges academic
                        compliance with student success — transforming traditional institutions
                        into intelligent, automated ecosystems.
                    </p>

                    <p className="vision-subtext">
                        By combining automation, structured internship systems, and
                        NEP-aligned career intelligence, the goal is to make Tier-2 and
                        Tier-3 institutions future-ready and globally competitive.
                    </p>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-container">

                    {/* Column 1 – Company */}
                    <div className="footer-col">
                        <h3 className="footer-logo">Doneswari Technologies LLP</h3>
                        <p className="footer-description">
                            A DPIIT-recognized, AICTE-approved SaaS company building
                            automation infrastructure and career intelligence systems
                            for modern educational institutions.
                        </p>
                    </div>

                    {/* Column 2 – Recognition */}
                    <div className="footer-col">
                        <h4>Institutional Status</h4>
                        <ul>
                            <li>MCA Registered LLP</li>
                            <li>DPIIT Recognized Startup</li>
                            <li>MSME (Udyam) Registered</li>
                            <li>AICTE Internship Approved</li>
                        </ul>
                    </div>

                    {/* Column 3 – Connect */}
                    <div className="footer-col">
                        <h4>Connect</h4>
                        <div className="footer-links">
                            <a href="https://github.com/hisanthooosh" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/santhosh-gangasani-8461a72a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="mailto:doneswarisoftwaresolutions@gmail.com">Email</a>
                        </div>
                    </div>

                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    © 2026 Santhosh Gangasani · Founder & Product Architect · Andhra Pradesh, India
                </div>
            </footer>

        </div>
    );
}

export default Home;