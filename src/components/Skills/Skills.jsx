import './Skills.css';

export default function Skills() {
  const skillObj = {
    'Programming Languages': ['JavaScript (ES6+)', 'SQL'],
    'Frameworks & Libraries': ['React.js', 'Node.js', 'Express.js', 'Bootstrap'],
    'Database Technologies': ['MongoDB', 'Mongoose', 'MySQL'],
    'Version Control': ['Git', 'GitHub'],
    'Development Tools': ['Visual Studio Code', 'Canva', 'Netlify'],
    'Markup & Styling': ['HTML5', 'CSS3'],
  };

  return (
    <section id="skills" className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillObj).map(([category, skills], index) => (
          <div className="skill-card" key={index}>
            <h4 className="skill-category">{category}</h4>
            <ul className="skill-list">
              {skills.map((skill, idx) => (
                <li key={idx} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
