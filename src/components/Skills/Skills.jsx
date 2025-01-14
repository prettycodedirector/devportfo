import './Skills.css'

export default function Skills() {
  const skillObj = {
    ProgrammingLanguages: 'JavaScript (ES6+)',
    FrontEnd: 'React.js, HTML, CSS, Bootstrap',
    BackEnd: 'Node.js, Express.js',
    database: 'MongoDB, Mongoose,MySQL',
    versionControl: 'Git, GitHub',
    Tools: 'Git, GitHub,Canva'
  }
  return (
    <div className="skills-con" id='skills'>
      <p className='skill-title h3 '>Skills</p>
      <div className='skills-item'>
        <div className='item-con'>
          <p className="h6">Programming Languages :- </p>
          <p className='item'>{skillObj.ProgrammingLanguages}</p>
          <p className="h6">Front-End Development :-</p>
          <ul className="flex-item">{skillObj.FrontEnd.split(",").map((item, index) => (
            <p className='item' key={index}>{item}</p>
          ))}</ul>
          <p className="h6">Back-End Development :-</p>
          <ul className="flex-item">{skillObj.BackEnd.split(",").map((item, index) => (
            <p className='item' key={index}>{item}</p>
            ))}</ul>
          <p className="h6">Database Management :-</p>
          <ul className="flex-item">{skillObj.database.split(",").map((item, index) => (
            <p className='item' key={index}>{item}</p>
            ))}</ul>
          <p className="h6">Tools :- </p>
          <ul className="flex-item">{skillObj.Tools.split(",").map((item, index) => (
            <p className='item' key={index}>{item}</p>
            ))}</ul>
        </div>
      </div>
    </div>
  )
}
