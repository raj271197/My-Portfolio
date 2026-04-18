import { persona } from '../../data/content';
import Section from '../layout/Section';
import './About.css';

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A developer who cares about both product quality and the people using it."
      description={persona.intro}
      className="about-section"
    >
      <div className="about-grid">
        <article className="glass-panel about-story" data-animate="fade-up">
          <h3>What I bring</h3>
          <p>
            I approach software with a full-stack mindset: build the interface carefully, keep the logic practical, and
            stay close to how the system behaves in production. My support experience also makes me unusually attentive
            to edge cases, communication, and reliability.
          </p>
          <ul className="feature-list">
            {persona.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="glass-panel about-highlights" data-animate="fade-up">
          <h3>Working style</h3>
          <div className="pill-grid">
            {persona.quickFacts.map((fact) => (
              <span key={fact} className="info-pill">
                {fact}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
};

export default About;
