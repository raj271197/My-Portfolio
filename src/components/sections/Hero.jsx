import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImg from '../../assets/profile/raj-headshot.jpg';
import { persona } from '../../data/content';
import ResumeDownloadButton from '../ui/ResumeDownloadButton';
import { resumeVariantOptions } from '../../utils/resumeData';
import './Hero.css';

const Hero = ({ resumeVariant, onResumeVariantChange }) => {
  return (
    <section id="hero" className="hero-shell">
      <div className="container hero-grid">
        <div className="hero-copy" data-animate="fade-up">
          <p className="hero-kicker">Premium Developer Portfolio</p>
          <h1>{persona.heroHeadline}</h1>
          <p className="hero-summary">{persona.heroSummary}</p>

          <div className="resume-switcher" aria-label="Resume type selector">
            {resumeVariantOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                className={`resume-chip ${resumeVariant === option.value ? 'is-active' : ''}`}
                onClick={() => onResumeVariantChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="resume-helper">
            Generate an ATS-friendly PDF that auto-updates from your portfolio content.
          </p>

          <div className="hero-cta-row">
            <a className="button button-primary" href="#projects">
              Explore Projects
              <ArrowRight size={18} />
            </a>
            <ResumeDownloadButton variant={resumeVariant} className="button button-secondary">
              Download Resume
            </ResumeDownloadButton>
          </div>

          <div className="hero-socials" aria-label="Hero social links">
            <a href={persona.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} />
            </a>
            <a href={persona.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${persona.email}`} aria-label="Email Raj Patel">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="hero-visual" data-animate="fade-left">
          <article className="hero-card glass-panel">
            <div className="hero-card-top">
              <div className="hero-avatar-ring">
                <img src={profileImg} alt="Professional headshot of Raj Patel" fetchPriority="high" />
              </div>

              <div className="hero-meta">
                <span className="status-pill">Available for hire</span>
                <h2>{persona.name}</h2>
                <p>{persona.role}</p>
                <span>{persona.location}</span>
              </div>
            </div>

            <div className="hero-stats-grid">
              {persona.stats.map((stat) => (
                <div key={stat.label} className="hero-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;
