import React from 'react';
import './skills.css';

const Skills = () => {
    const skills = [
        'HTML', 'CSS', 'JavaScript',
        'React', 'Node.js', 'MongoDB',
        'Express.js', 'MySQL', 'Socket.io',
        'AWS', 'Redis', 'Git & GitHub',
    ];

    return (
        <div className="skills-container">
            <h2>🧠 Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
