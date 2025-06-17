import React from 'react';
import '../Style/css/projects.css';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects-page">
      {/* Page Header */}
      <header className="projects-header">
        <h1>My Project Showcase</h1>
        <p>
          A curated collection of my hands-on work in Data Analytics, Full Stack Development,
          and real-world entrepreneurial projects. Every project is a step in my learning and leadership journey.
        </p> <br />
        <Link to="/" className="back-button">⬅ Back to Home</Link>
      </header>

      <div className="projects-container">

        {/* Data Analytics Projects */}
        <div className="project-section">
          <h2>📊 Data Analytics Projects</h2>

          <div className="project-card">
            <h3> Customer Churn Prediction Using XGBoost</h3>
            <p>
              Predicts customer churn from the Telco dataset using machine learning models. Helps businesses take early action.
            </p>
            <ul>
              <li><strong>Dataset:</strong> Telco Customer Churn (Kaggle)</li>
              <li><strong>Algorithms:</strong> XGBoost (~85%), Logistic Regression (~81%)</li>
              <li><strong>Libraries:</strong> pandas, numpy, scikit-learn, seaborn</li>
            </ul>
            <a
              href="https://github.com/hisanthooosh/customer-churn-prediction-xgboost"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View GitHub Repo
            </a>
          </div>

          <h2>📊 Data Analytics Projects</h2>

          <div className="project-card">
            <h3>Interactive Business Insights Dashboard</h3>
            <p>
              Developed a Power BI dashboard to track sales, revenue, and product performance across regions, enabling executive-level decision-making.
            </p>
            <ul>
              <li><strong>Dataset:</strong> Telco Customer Churn (Kaggle)</li>
              <li><strong>Skills</strong> SQL · Microsoft Power BI</li>
            </ul>
            <a
              href="https://github.com/yourusername/customer-churn-prediction-xgboost"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View GitHub Repo
            </a>
          </div>

        </div>

        {/* Web Development Projects */}
        <div className="project-section">
          <h2>💻 Web Development Projects</h2>

          <div className="project-card">
            <h3>🌐 Personal Portfolio Website</h3>
            <p>
              A modern portfolio website made using React.js. Showcases my profile, resume, projects, and more with animations and interactivity.
            </p>
            <ul>
              <li><strong>Tech:</strong> React.js, JSX, CSS</li>
              <li><strong>Features:</strong> Resume viewer, dropdowns, scroll animations</li>
            </ul>
            <a
              href="https://github.com/yourusername/portfolio-react"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🔗 View GitHub Repo
            </a>
            <a
              href="https://your-portfolio-live-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🌐 Visit Live Site
            </a>
          </div>
        </div>

        {/* Real-World Projects */}
        <div className="project-section">
          <h2>🌍 Real-World Projects</h2>

          {/* WhatIsNxt */}
          <div className="project-card">
            <h3>🎯 WhatIsNxt.in – Career Roadmap Platform</h3>
            <p>
              A Google Sites-based platform that provides career roadmaps for 10th-grade students, helping them make informed decisions.
            </p>
            <ul>
              <li><strong>Impact:</strong> 2,000+ organic views</li>
              <li><strong>Role:</strong> Project Head (Led a team of 5)</li>
              <li><strong>Problem Solved:</strong> Addressed early career guidance gap</li>
              <li><strong>Skills:</strong> Google Sites, content planning, team coordination, digital outreach</li>
            </ul>
            <a
              href="https://www.whatisnxt.in"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🌐 Visit whatisnxt.in
            </a>
          </div>

          {/* LrnBuddy */}
          <div className="project-card">
            <h3>📚 LrnBuddy.in – Notes Subscription Platform</h3>
            <p>
              A WordPress-based site offering academic notes on a subscription model for Mohan Babu University students.
            </p>
            <ul>
              <li><strong>Impact:</strong> 370+ users in 50 days, ₹3,700 revenue</li>
              <li><strong>Role:</strong> Project Head (Led a team of 10)</li>
              <li><strong>Skills:</strong> WordPress, product development, content creation, user engagement</li>
            </ul>
            <a
              href="https://www.lrnbuddy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              🌐 Visit lrnbuddy.in
            </a>
          </div>
        </div>
      </div>


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

export default Projects;
