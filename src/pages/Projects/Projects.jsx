import React from 'react'

import './projects.css';

const Projects = () => {
    const projectList = [
        {
            title: "E-commerce Website",
            description: "A full-featured MERN stack e-commerce app with user auth, payment gateway, and admin dashboard.",
            techStack: ["React", "Node.js", "Express", "MongoDB"],
            link: "" // No live link
        },
        {
            title: "Chat App",
            description: "Real-time chat app using Socket.io and Node.js with group chat support.",
            techStack: ["React", "Socket.io", "Node.js"],
            link: ""
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio built with React to showcase my work.",
            techStack: ["React", "CSS3"],
            link: "https://yourportfolio.com"
        },
        {
            title: "E-commerce Website",
            description: "A full-featured MERN stack e-commerce app with user auth, payment gateway, and admin dashboard.",
            techStack: ["React", "Node.js", "Express", "MongoDB"],
            link: "" // No live link
        },
        {
            title: "Chat App",
            description: "Real-time chat app using Socket.io and Node.js with group chat support.",
            techStack: ["React", "Socket.io", "Node.js"],
            link: ""
        },
        {
            title: "Portfolio Website",
            description: "Responsive portfolio built with React to showcase my work.",
            techStack: ["React", "CSS3"],
            link: "https://yourportfolio.com"
        }
    ];

    return (
        <div className="projects-container">
            <h2 className="projects-heading">My Projects</h2>
            <div className="projects-grid">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>

                        <div className="tech-stack">
                            {project.techStack.map((tech, idx) => (
                                <span key={idx} className="tech-tag">{tech}</span>
                            ))}
                        </div>

                        {project.link ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View Live →
                            </a>
                        ) : (
                            <p className="project-status">Live link coming soon</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

