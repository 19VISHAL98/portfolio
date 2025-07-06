import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <h4 className="contact-heading">Contact</h4>
            <div className="contact-details">
                <p>
                    <strong>LinkedIn:</strong>{' '}
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        linkedin.com/in/yourprofile
                    </a>
                </p>
                <p>
                    <strong>GitHub:</strong>{' '}
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github.com/yourusername
                    </a>
                </p>
                <p>
                    <strong>Mobile:</strong> +91-XXXXXXXXXX
                </p>
                <p>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:youremail@example.com">youremail@example.com</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
