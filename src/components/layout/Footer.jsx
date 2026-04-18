import { Github, Linkedin, Mail } from 'lucide-react';
import { persona } from '../../data/content';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <p className="footer-title">{persona.name}</p>
          <p className="footer-copy">
            Full-stack developer portfolio designed for fast loading, clear storytelling, and strong first impressions.
          </p>
        </div>

        <div className="footer-links" aria-label="Social links">
          <a href={persona.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={18} />
          </a>
          <a href={persona.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${persona.email}`} aria-label="Send email">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer-note">© {year} Raj Patel. Built with React, Vite, and a custom responsive design system.</p>
      </div>
    </footer>
  );
};

export default Footer;
