import React from 'react';
import Section from '../layout/Section';
import { persona } from '../../data/content';
import './About.css';

const About = () => {
    return (
        <Section id="about" title="Highlights & Personal" className="about-section">
            <div className="about-content centered">
                <div className="about-text">
                    <p className="intro-lead">
                        Beyond coding, I am passionate about technology's impact on daily life.
                        Here are a few technical and professional highlights that define my work:
                    </p>
                    <ul className="skills-list">
                        {persona.about.highlights.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    );
};

export default About;
