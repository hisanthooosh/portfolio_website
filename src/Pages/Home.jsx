import React from 'react';
import '../Style/css/home.css';
import profileImage from '../Image/1732697172599.jpg'; // Make sure the path is correct
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo-dropdown">
                    <img src={profileImage} alt="logo" className="logo-image" />
                    <span className='name' >Santhosh Gangasani</span>

                </div>


                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/skills">Skills</Link>
                    <Link to="/achievements">Achivements</Link>
                    
                </nav>
            </header>

            <section className="main-section" id="home">
                <div className="text-content">
                    <h1>Hi, I'm <span>Santhosh Gangasani</span></h1>
                    <p>A passionate Full Stack Developer from India 🚀</p>
                    <p>I build responsive, modern web apps with love and logic.</p>

                    <div className="resume-button-container">
                        <p className="resume-intro">
                            Curious about my journey, experience, and achievements? 🎯<br />
                            Click below to explore my resume and get to know the developer behind the code.
                        </p>
                        <a
                            href="https://your-resume-link.com" // Replace with actual resume link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                        >
                            Visit My Resume
                        </a>
                    </div>
                </div>

                <div className="image-container">
                    <img src={profileImage} alt="Santhoosh" />
                </div>
            </section>
            <footer className="footer">
                <div className="footer-content">
                    <p>© 2025 Santhosh. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://github.com/hisanthooosh" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/santhosh-gangasani-8461a72a9/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:iamsanthoosh30@gmail.com">Email</a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default Home;
