import Section from '../layout/Section';
import { experience } from '../../data/content';
import './Experience.css';

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Hands-on product, support, and engineering experience."
      description="Updated with your current and prior roles, with emphasis on full-stack development, debugging, API work, and technical problem solving."
    >
      <div className="timeline">
        {experience.map((job, index) => (
          <article
            key={`${job.company}-${job.role}`}
            className="glass-panel timeline-card"
            data-animate="fade-up"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="timeline-marker" aria-hidden="true" />
            <div className="timeline-header">
              <div>
                <p className="timeline-company">{job.company}</p>
                <h3>{job.role}</h3>
              </div>
              <div className="timeline-meta">
                <span>{job.type}</span>
                <span>{job.period}</span>
              </div>
            </div>

            <ul className="timeline-points">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
