import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="projects-page">

      {/* HEADER */}
      <section className="products-hero">
        <h1 className="gradient-text">Our Product Suite</h1>
        <h2>Software that Solves Real-World Friction</h2>
        <p>
          We build B2B and B2B2C SaaS platforms that eliminate manual
          inefficiencies in colleges and bridge the career guidance gap
          in schools.
        </p>

        <Link to="/" className="btn-glow">
          ← Back to Home
        </Link>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-container">

        {/* DT Skills */}
        <div className="product-card">
          <h3>DT Skills</h3>
          <span className="product-badge">ACTIVE PLATFORM • INDUSTRY TRAINING</span>

          <p>
            A structured, industry-focused learning platform helping
            students move from beginner to advanced level through
            real-world tasks and AICTE-approved internship certification.
          </p>

          <ul>
            <li>Beginner → Advanced Roadmap</li>
            <li>AICTE Internship Certificate</li>
            <li>Affordable ₹200 Model</li>
          </ul>

          <div className="product-links">
            <a href="#" className="btn-primary">Visit Platform</a>
          </div>
        </div>

        {/* Make My Report */}
        <div className="product-card">
          <h3>Make My Report</h3>
          <span className="product-badge">MVP DEVELOPED • HIGHER ED TECH</span>

          <p>
            A smart academic automation platform that eliminates
            MS Word dependency through a proprietary
            “Logic-to-Layout” engine generating print-ready PDFs.
          </p>

          <ul>
            <li>Live A4 Preview (WYSIWYG)</li>
            <li>Faculty Dashboard & Approval Workflow</li>
            <li>Automated PDF Generation</li>
          </ul>

          <div className="product-links">
            <a href="#" className="btn-primary">Request Demo</a>
          </div>
        </div>

        {/* WhatIsNxt */}
        <div className="product-card">
          <h3>WhatIsNxt</h3>
          <span className="product-badge">CONCEPT VALIDATION • K-12 EDTECH</span>

          <p>
            A structured career intelligence program for Grades 8–10,
            replacing generic counseling with guided exposure from
            IIT & AIIMS seniors.
          </p>

          <ul>
            <li>Job of the Month Exposure</li>
            <li>NEP 2020 Compliant</li>
            <li>Tier-2 & Tier-3 Focus</li>
          </ul>

          <div className="product-links">
            <a href="#" className="btn-primary">Learn More</a>
          </div>
        </div>

      </section>

      {/* TECH STACK */}
      <section className="tech-stack">
        <h2>Powered by Cloud-Native Technologies</h2>
        <div className="tech-grid">
          <div className="tech-item">MongoDB</div>
          <div className="tech-item">Express</div>
          <div className="tech-item">React</div>
          <div className="tech-item">Node.js</div>
        </div>
      </section>

    </div>
  );
}

export default Projects;