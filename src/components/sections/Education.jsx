import React from 'react';
import Section from '../layout/Section';
import { education } from '../../data/content';
import './Education.css';

const Education = () => {
    return (
        <Section id="education" title="Education & Certifications" className="education-section">
            <div className="education-grid">
                {education.map((item, index) => (
                    <div key={index} className="edu-card">
                        {item.items ? (
                            /* Certifications Card */
                            <>
                                <h3 className="edu-degree">{item.degree}</h3>
                                <ul className="cert-list">
                                    {item.items.map((cert, i) => (
                                        <li key={i}>{cert}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            /* Degree Card */
                            <>
                                <div className="edu-header">
                                    <h3 className="edu-degree">{item.degree}</h3>
                                    <span className="edu-year">{item.year}</span>
                                </div>
                                <p className="edu-school">{item.institution}</p>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Education;
