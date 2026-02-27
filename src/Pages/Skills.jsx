import React from 'react';
import { Link } from 'react-router-dom';

function Skills() {
  return (
    <div className="skills-page">

      {/* HERO */}
      <section className="skills-hero">
        <h1 className="gradient-text">Technology Architecture</h1>
        <p>
          All platforms under Doneswari Technologies are built using a
          modern MERN stack architecture with cloud-native deployment,
          secure payment integration, and scalable infrastructure.
        </p>

        <Link to="/" className="btn-glow">
          ← Back to Home
        </Link>
      </section>

      {/* STACK SECTION */}
      <section className="stack-section">

        {/* MERN */}
        <div className="stack-card">
          <h2>MERN Stack Core</h2>
          <ul>
            <li><strong>MongoDB</strong> – NoSQL cloud database</li>
            <li><strong>Express.js</strong> – Backend API layer</li>
            <li><strong>React.js</strong> – Frontend architecture</li>
            <li><strong>Node.js</strong> – Server runtime</li>
          </ul>
        </div>

        {/* CLOUD INFRA */}
        <div className="stack-card">
          <h2>Cloud & Deployment</h2>
          <ul>
            <li><strong>Azure</strong> – Cloud hosting & infrastructure</li>
            <li><strong>MongoDB Atlas</strong> – Managed database</li>
            <li><strong>Cloudinary</strong> – Image & media storage</li>
          </ul>
        </div>

        {/* PAYMENTS */}
        <div className="stack-card">
          <h2>Payments & Monetization</h2>
          <ul>
            <li><strong>Razorpay</strong> – Secure payment gateway</li>
            <li>UPI Integration</li>
            <li>Revenue Distribution Logic</li>
            <li>Subscription & Certification Models</li>
          </ul>
        </div>

        {/* SYSTEM DESIGN */}
        <div className="stack-card">
          <h2>System Capabilities</h2>
          <ul>
            <li>Role-Based Authentication</li>
            <li>Admin Dashboards</li>
            <li>Internship Certification System</li>
            <li>Automated PDF Generation Engine</li>
            <li>Institutional Approval Workflows</li>
          </ul>
        </div>

      </section>

    </div>
  );
}

export default Skills;