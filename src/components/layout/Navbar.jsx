import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { persona } from '../../data/content';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Resume', href: '/resume.pdf', external: true }, // Mark as external/file
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Personal', href: '#about' }, // Mapping 'Personal' to About as per ref
    ];

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="nav-brand">
                    <h1 className="nav-name">{persona.name}</h1>
                    <span className="nav-role">Junior Software Developer</span>
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map((link, index) => (
                        <React.Fragment key={index}>
                            <a
                                href={link.href}
                                className="nav-link"
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                            >
                                {link.name}
                            </a>
                            {index < navLinks.length - 1 && <span className="nav-divider">|</span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
