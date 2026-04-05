import React, { useState } from 'react';
import Section from '../layout/Section';
import { experience } from '../../data/content';
import './Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Section id="experience" title="Where I've Worked" number="04">
            <div className="experience-container">
                <div className="tabs-list">
                    {experience.map((job, index) => (
                        <button
                            key={job.id}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    <div className="job-panel">
                        <h3>
                            {experience[activeTab].role}{' '}
                            <span className="company-name">@ {experience[activeTab].company}</span>
                        </h3>
                        <p className="job-period">{experience[activeTab].period}</p>
                        <ul className="job-description">
                            {experience[activeTab].description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
