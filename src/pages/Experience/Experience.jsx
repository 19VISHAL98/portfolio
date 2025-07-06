import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <div className="experience-container">
            <h2>💼 Experience</h2>
            <div className="experience-card">
                <h3>Full Stack Developer</h3>
                <p className="company">ABC Technologies (Your Current Company)</p>
                <p className="duration">Oct 2020 – Present</p>
                <ul className="responsibilities">
                    <li>Worked on real-time game development using Socket.io and Node.js</li>
                    <li>Built scalable REST APIs using Express.js</li>
                    <li>Integrated MongoDB and MySQL for dynamic web apps</li>
                    <li>Managed AWS S3, EC2, and Redis for scalable infrastructure</li>
                </ul>
            </div>
        </div>
    );
};

export default Experience;
