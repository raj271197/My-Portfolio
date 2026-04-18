import Section from '../layout/Section';
import { certifications, education } from '../../data/content';
import './Education.css';

const Education = () => {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation backed by ongoing technical learning."
      description="Education and certifications that support the software engineering, systems, and professional communication side of the portfolio."
    >
      <div className="education-grid">
        <div className="education-column">
          {education.map((item, index) => (
            <article key={item.title} className="glass-panel education-card" data-animate="fade-up" style={{ transitionDelay: `${index * 60}ms` }}>
              <div className="education-topline">
                <h3>{item.title}</h3>
                <span>{item.period}</span>
              </div>
              <p className="education-school">{item.institution}</p>
              <p>{item.details}</p>
            </article>
          ))}
        </div>

        <article className="glass-panel certification-card" data-animate="fade-up">
          <h3>Certifications</h3>
          <ul className="feature-list">
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
};

export default Education;
