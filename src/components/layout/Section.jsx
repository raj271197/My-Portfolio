import React from 'react';
import './Section.css';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`section-wrapper ${className}`}>
            <div className="container">
                {title && (
                    <h2 className="section-title">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
