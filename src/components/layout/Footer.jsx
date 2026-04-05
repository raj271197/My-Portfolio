import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const [isDark, setIsDark] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const shouldBeDark = savedTheme 
            ? savedTheme === 'dark' 
            : prefersDark;
        
        setIsDark(shouldBeDark);
        applyTheme(shouldBeDark);
    }, []);

    const applyTheme = (dark) => {
        const html = document.documentElement;
        if (dark) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        applyTheme(newTheme);
    };

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <p>Designed & Built by Raj Patel</p>
                    <p className="copyright">© 2026 Raj Patel. All rights reserved.</p>
                </div>

                <div className="footer-right">
                    <button 
                        className="theme-toggle" 
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {isDark ? (
                            <>
                                <Sun size={20} />
                                <span className="theme-label">Light</span>
                            </>
                        ) : (
                            <>
                                <Moon size={20} />
                                <span className="theme-label">Dark</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
