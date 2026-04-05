import React from 'react';
import Section from '../layout/Section';
import { skills } from '../../data/content';
import './Skills.css';

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills" number="02">
            <div className="skills-content">
                {skills.map((category, index) => (
                    <div key={index} className="skill-category">
                        <h3 className="category-title">{category.category}</h3>
                        <ul className="skill-list">
                            {category.items.map((skill, i) => (
                                <li key={i} className="skill-item">
                                    <span className="skill-bullet">▹</span> {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
