import React from 'react';
import kup from '../Image/kup.jpg';
import hyd from '../Image/hyd.png.jpg';
import { Link } from 'react-router-dom';

function Achivements() {
  return (
    <div className="achievements-page">

      {/* Header */}
      <header className="achievements-header">
        <h1 className="gradient-text">Recognitions & Milestones</h1>
        <p>
          Key moments that validated innovation, leadership, and startup vision.
        </p>

        <Link to="/" className="btn-glow">
          ← Back to Home
        </Link>
      </header>

      {/* Achievements Container */}
      <div className="achievements-container">

        {/* Achievement 1 */}
        <div className="achievement-card">
          <img src={kup} alt="Anvesan Award" className="achievement-image" />
          <div className="achievement-details">
            <h3>🏆 1st Prize – Anvesan 2025</h3>
            <p><strong>Awarded:</strong> 24th Jan 2025</p>
            <p><strong>Prize:</strong> ₹15,000</p>
            <p>
              Secured first place for presenting an innovative startup
              solution, recognized for practical implementation and
              scalable impact.
            </p>
          </div>
        </div>

        {/* Achievement 2 */}
        <div className="achievement-card">
          <img src={hyd} alt="With Chancellor" className="achievement-image" />
          <div className="achievement-details">
            <h3>🥇 Double Victory – Anvesan 2025</h3>
            <p><strong>Best Startup Idea:</strong> ₹15,000</p>
            <p><strong>State-Level Appreciation Award:</strong> ₹5,000</p>
            <p>
              Honored by Chancellor Dr. Mohan Babu Garu for innovation
              and institutional impact. A recognition of leadership,
              product clarity, and execution strength.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Achivements;