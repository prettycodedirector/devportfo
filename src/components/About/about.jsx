import React from 'react'
import './About.css'
import profile from "../.././assets/resume-img.jpg"


const aboutData = {

    Name: "Devendiran E",
    Role: 'MERN Fullstack Web Developer / React UI Developer',
    Education: `BCA - Bachelor of Computer Applications,\n Pachaiyappa's College for Men (University of Madras), Chennai-30  \n Percentage: 83%`,
    Projects: `Mini Calculator (React.js) : Developed a simple yet functional calculator capable of performing basic arithmetic operations, showcasing proficiency in React.js.
    \nQR Code Generator (React.js) : Created a tool to generate QR codes from text, with a clean and user-friendly interface for enhanced usability.
    \nFood Recipe Finder (React.js) : Built a recipe search application integrating external APIs, allowing users to discover various recipes in a simplified interface.
    \nJourney Mapper with Travelogue (MERN Stack) : Designed and developed a comprehensive travelogue application, enabling users to log and visualize their travel experiences using the MERN stack.
`
}

const About = () => {
    return (
        <div className=" about-container " id='about' >

            <h3 className='h3'>About Me:</h3>
            <div className='about'>
                <div className=" item-card   ">
                    <div className="profile-image">
                        {/* You can add your profile picture here */}
                        <img
                            src={profile}
                            alt="Profile"
                        />
                    </div>
                    <div className="pt-2">
                        <p>
                            Hi, I’m <strong>Devendiran</strong>, a passionate and dedicated Full-Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js).
                            I hold a Bachelor of Computer Application from the University of Madras, Chennai, and have experience building responsive, user-friendly web applications.
                            With a keen eye for detail and a problem-solving mindset, I enjoy turning complex challenges into clean, efficient code.
                        </p>
                        <p>
                            I am always excited to collaborate on interesting projects that can have a meaningful impact.
                            Whether it's building modern web apps, optimizing code performance, or creating intuitive UI/UX experiences, I'm driven by a passion for tech and innovation.
                        </p>
                        <div className='row d-flex g-3'>

                            <p className='h6 col-3'>Name : </p><p className='col-9'>{aboutData.Name}</p>
                            <p className='h6 col-3'> Role : </p><p className='col-9'> {aboutData.Role}</p>

                            <p className='h6 col-3'>Education :</p>
                            <p className='col-9'>{aboutData.Education.split("\n").map((line, index) => (<span key={index}>{line}</span>))}
                            </p>

                            <p className='h6 col-3'>Projects :</p>
                            <p className='col-9'>{aboutData.Projects.split("\n").map((line, index) => (<span key={index}>{line}</span>))}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;

