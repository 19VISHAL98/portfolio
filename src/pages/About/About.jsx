import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-heading">About Me</h2>
      <p className="about-text">
        My name is <strong>Vishal Kumar</strong>. I’m originally from <strong>Jaunpur, Uttar Pradesh</strong>,
        and currently living in <strong>Noida, Sector 63</strong>, due to my job. I completed my Bachelor's degree
        in Computer Science from <strong>Lucknow</strong> in 2020.
      </p>
      <p className="about-text">
        I have close to <strong>4 years of experience</strong> as a Full Stack Developer, with a strong focus on
        backend development using <strong>Node.js</strong>. I also have good hands-on experience with
        <strong> React</strong>, <strong>MySQL</strong>, and <strong>MongoDB</strong>. Over the years, I’ve
        contributed to multiple web applications and real-time games, including lottery systems and card games.
      </p>
      <p className="about-text">
        I’m passionate about writing clean, maintainable code, solving real-world problems, and continuously improving
        my skills. I always look forward to working on new challenges and delivering high-quality software solutions.
      </p>
    </div>
  );
};

export default About;
