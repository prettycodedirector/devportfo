import React from 'react';
import './About.css';

const aboutData = {
  Name: 'Devendiran E',
  Role: 'MERN Fullstack Web Developer / React UI Developer',
  Education: `BCA - Bachelor of Computer Applications\nPachaiyappa's College for Men (University of Madras), Chennai-30\nPercentage: 83%`,
};

const About = () => {
  return (
    <section id="about" className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <p>
          Hello! I’m <strong>{aboutData.Name}</strong>, a passionate Full-Stack Developer specializing in the <strong>MERN stack</strong>. I thrive on turning ideas into functional and polished web applications.
        </p>
        <p>
          I hold a Bachelor’s degree in Computer Applications and enjoy working with modern technologies to build scalable, efficient, and user-centric solutions.
        </p>
        <div className="about-details">
          <p><strong>Name:</strong> {aboutData.Name}</p>
          <p><strong>Role:</strong> {aboutData.Role}</p>
          <p><strong>Education:</strong><br />
            {aboutData.Education.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
