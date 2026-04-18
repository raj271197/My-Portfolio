import { useEffect, useState } from 'react';
import { Menu, MoonStar, SunMedium, X } from 'lucide-react';
import { navLinks, persona } from '../../data/content';
import ResumeDownloadButton from '../ui/ResumeDownloadButton';
import './Navbar.css';

const Navbar = ({ theme, onToggleTheme, resumeVariant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-shell">
        <a className="brand-mark" href="#top" aria-label="Go to top of portfolio">
          <span className="brand-orb" aria-hidden="true" />
          <div>
            <strong>{persona.name}</strong>
            <span>{persona.title}</span>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item">
              {link.label}
            </a>
          ))}
          <ResumeDownloadButton variant={resumeVariant} className="button button-secondary nav-resume">
            Resume
          </ResumeDownloadButton>
          <button type="button" className="theme-switch" onClick={onToggleTheme} aria-label="Toggle color theme">
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
        </nav>

        <div className="mobile-nav-actions">
          <button type="button" className="theme-switch" onClick={onToggleTheme} aria-label="Toggle color theme">
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation" className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="mobile-nav-item" onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <ResumeDownloadButton
            variant={resumeVariant}
            className="button button-primary mobile-resume"
            onAfterClick={closeMenu}
          >
            View Resume
          </ResumeDownloadButton>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
