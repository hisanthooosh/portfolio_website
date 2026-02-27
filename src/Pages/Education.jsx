import React from 'react';
import mbu from "../Image/mbu.png";
import vjm from "../Image/vijm.png";
import mar from "../Image/marry.png";
import { Link } from 'react-router-dom';

function Education() {
  return (
    <div className="education-page">

      <header className="education-header">
        <h1 className="gradient-text">Academic Journey</h1>
        <p>
          The foundation that shaped my technical expertise and entrepreneurial mindset.
        </p>

        <Link to="/" className="btn-glow">
          ← Back to Home
        </Link>
      </header>

      <div className="education-timeline">

        {/* MCA */}
        <div className="education-card">
          <div className="edu-logo">
            <img src={mbu} alt="Mohan Babu University" />
          </div>
          <div className="edu-details">
            <h2>MCA – Mohan Babu University, Tirupati</h2>
            <p><strong>Duration:</strong> 2024 – 2026 (Pursuing)</p>
            <p><strong>Current CGPA:</strong> 84%</p>
          </div>
        </div>

        {/* BCA */}
        <div className="education-card">
          <div className="edu-logo">
            <img src={vjm} alt="Vijayam Degree College" />
          </div>
          <div className="edu-details">
            <h2>BCA (AI & DS) – Vijayam Degree College, Tirupati</h2>
            <p><strong>University:</strong> SV University</p>
            <p><strong>Duration:</strong> 2021 – 2024</p>
            <p><strong>Final CGPA:</strong> 84%</p>
          </div>
        </div>

        {/* Intermediate */}
        <div className="education-card">
          <div className="edu-logo">
            <img src={vjm} alt="Vijayam Jr College" />
          </div>
          <div className="edu-details">
            <h2>Intermediate (MPC) – Vijayam Jr College, Chittoor</h2>
            <p><strong>Marks:</strong> 716 / 1000</p>
            <p><strong>Duration:</strong> 2019 – 2021</p>
          </div>
        </div>

        {/* 10th */}
        <div className="education-card">
          <div className="edu-logo">
            <img src={mar} alt="St. Mary’s School" />
          </div>
          <div className="edu-details">
            <h2>10th Class – St. Mary’s School, Bangarupalyam</h2>
            <p><strong>CGPA:</strong> 9.7</p>
            <p><strong>Completed:</strong> 2019</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Education;