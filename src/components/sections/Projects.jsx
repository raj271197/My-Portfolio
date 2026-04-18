import { ExternalLink, Github } from 'lucide-react';
import Section from '../layout/Section';
import { projects } from '../../data/content';
import './Projects.css';

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work presented as polished, production-style case studies."
      description="Each card highlights stack, outcome, and quick actions so hiring teams can scan quickly and dive deeper where they want."
    >
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="glass-panel project-card"
            data-animate="fade-up"
            style={{ transitionDelay: `${index * 70}ms` }}
          >
            <div className="project-image-wrap">
              <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
            </div>

            <div className="project-body">
              <div className="project-heading-row">
                <div>
                  <p className="project-label">Featured project</p>
                  <h3>{project.title}</h3>
                </div>
                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
                    <Github size={18} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-cta-row">
                <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="button button-primary" href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
