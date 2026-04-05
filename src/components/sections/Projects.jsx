import React from 'react';
import { Folder, Github, ExternalLink } from 'lucide-react';
import Section from '../layout/Section';
import { projects } from '../../data/content';
import './Projects.css';

const Projects = () => {
    return (
        <Section id="projects" title="Some Things I've Built" number="03">
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <header>
                            <div className="project-top">
                                <div className="folder">
                                    <Folder size={40} color="#64ffda" />
                                </div>
                                <div className="project-links">
                                    {project.repoLink && (
                                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.demoLink && (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>
                            <h3 className="project-title">
                                <a href={project.demoLink || project.repoLink} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            </h3>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                        </header>
                        <footer>
                            <ul className="project-tech-list">
                                {project.techStack.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </footer>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
