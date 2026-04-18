import Section from '../layout/Section';
import { skills } from '../../data/content';
import './Skills.css';

const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Modern tools across frontend, backend, data, and delivery."
      description="A practical toolkit shaped by application development, debugging, technical support, and real project work."
    >
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.title} className="glass-panel skill-card" data-animate="fade-up">
            <h3>{group.title}</h3>
            <div className="skill-chip-wrap">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
