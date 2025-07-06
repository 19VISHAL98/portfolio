import React from 'react';
import image from '../../image/image.png';
import './home.css';

import Contact from '../Contact/Contact';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div className="home-container">
            {/* Profile Image + Roles */}
            <div className="image-section">
                <div className="image-wrapper">
                    <img src={image} alt="Vishal Kumar" className="profile-image" />
                    <div className="full-name">Vishal Kumar</div>

                    {/* Animated Roles */}
                    <div className="role role1">Full Stack Developer</div>
                    <div className="role role2">Web Developer</div>
                    <div className="role role3">MERN Stack Developer</div>
                    <div className="role role4">Game Developer</div>
                    <div className="role role5">Cloud Developer</div>
                    <div className="role role6">Backend Developer</div>
                    <div className="role role7">Frontend Developer</div>
                    <div className="role role8">API Integrator</div>
                </div>
            </div>

            {/* About & Contact */}
            <div className="text-section">
                <div className="about-wrapper">
                    <About />
                </div>
                <div className="contact-wrapper">
                    <Contact />
                </div>
            </div>

            {/* Projects Section */}
            <div className="projects-wrapper">
                <Projects />
            </div>

            {/* Education Section */}
            <div className="education-wrapper">
                <Education />
            </div>

            {/* Skills Section */}
            <div className="skills-wrapper">
                <Skills />
            </div>

            {/* Experience Section */}
            <div className="experience-wrapper">
                <Experience />
            </div>

            <div className="contact-wrapper">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
