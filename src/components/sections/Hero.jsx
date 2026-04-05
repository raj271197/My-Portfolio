import React from 'react';
import { persona } from '../../data/content';
import './Hero.css';
import profileImg from '../../assets/profile.png';

const Hero = () => {
    return (
        <section className="hero-section container">
            <div className="hero-layout">

                {/* Left: Big Circular Image */}
                <div className="hero-image-container">
                    <div className="hero-circle-img">
                        <img src={profileImg} alt={persona.name} />
                    </div>
                </div>

                {/* Right: Content */}
                <div className="hero-content">
                    <h1 className="hero-name">{persona.name}</h1>

                    <div className="hero-bio">
                        <h3>A Bit About Me</h3>
                        <p>{persona.about.summary}</p>
                    </div>

                    {/* The 4 Colored Circle Buttons */}
                    <div className="hero-nav-circles">
                        <a href="/resume.pdf" className="circle-btn" style={{ backgroundColor: 'var(--color-resume)' }}>
                            Resume
                        </a>
                        <a href="#projects" className="circle-btn" style={{ backgroundColor: 'var(--color-projects)' }}>
                            Projects
                        </a>
                        <a href="#contact" className="circle-btn" style={{ backgroundColor: 'var(--color-contact)' }}>
                            Contact
                        </a>
                        <a href="#about" className="circle-btn" style={{ backgroundColor: 'var(--color-about)' }}>
                            Personal
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
