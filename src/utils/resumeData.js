import { certifications, education, experience, persona, projects, skills } from '../data/content';

export const resumeProfiles = {
  developer: {
    key: 'developer',
    label: 'Developer Resume',
    fileLabel: 'Developer',
    title: 'Full-Stack Developer',
    summary:
      'Full-stack developer with experience across responsive UI development, API integration, debugging, and database-backed applications. Brings a practical engineering mindset shaped by hands-on product work and technical support.',
    skillCategories: ['Frontend', 'Backend', 'Data & Cloud', 'Workflow'],
    experienceOrder: ['Junior Full Stack Developer', 'Software Engineer', 'Technical Support Specialist'],
    projectOrder: ['TaskSphere', 'Secure Chat Application', 'OpenHelpDesk', 'CloudFile Manager'],
    projectLimit: 3,
    pointLimits: {
      'Junior Full Stack Developer': 6,
      'Software Engineer': 5,
      'Technical Support Specialist': 4,
    },
  },
  business: {
    key: 'business',
    label: 'Business Resume',
    fileLabel: 'Business',
    title: 'Technical Support and Business Systems Professional',
    summary:
      'Customer-focused technology professional with experience in technical support, software delivery, troubleshooting, documentation, and cross-functional collaboration. Comfortable translating technical work into reliable outcomes for teams and clients.',
    skillCategories: ['Workflow', 'Data & Cloud', 'Backend', 'Frontend'],
    experienceOrder: ['Technical Support Specialist', 'Junior Full Stack Developer', 'Software Engineer'],
    projectOrder: ['OpenHelpDesk', 'CloudFile Manager', 'TaskSphere', 'Secure Chat Application'],
    projectLimit: 3,
    pointLimits: {
      'Technical Support Specialist': 5,
      'Junior Full Stack Developer': 5,
      'Software Engineer': 4,
    },
  },
};

export const resumeVariantOptions = Object.values(resumeProfiles).map((profile) => ({
  value: profile.key,
  label: profile.label,
}));

const stripProtocol = (value) => value.replace(/^https?:\/\/(www\.)?/i, '').replace(/\/$/, '');

const orderCollection = (items, order, key) => {
  const rankedOrder = new Map(order.map((value, index) => [value, index]));

  return [...items].sort((left, right) => {
    const leftRank = rankedOrder.has(left[key]) ? rankedOrder.get(left[key]) : Number.MAX_SAFE_INTEGER;
    const rightRank = rankedOrder.has(right[key]) ? rankedOrder.get(right[key]) : Number.MAX_SAFE_INTEGER;

    if (leftRank !== rightRank) {
      return leftRank - rightRank;
    }

    return String(left[key]).localeCompare(String(right[key]));
  });
};

export const getResumeProfile = (variant = 'developer') => resumeProfiles[variant] || resumeProfiles.developer;

export const getResumeData = (variant = 'developer') => {
  const profile = getResumeProfile(variant);
  const orderedSkills = orderCollection(skills, profile.skillCategories, 'title');
  const orderedExperience = orderCollection(experience, profile.experienceOrder, 'role').map((item) => ({
    ...item,
    points: item.points.slice(0, profile.pointLimits[item.role] || item.points.length),
  }));
  const orderedProjects = orderCollection(projects, profile.projectOrder, 'title').slice(0, profile.projectLimit);

  return {
    name: persona.name,
    title: profile.title,
    summary: profile.summary,
    fileName: `Raj-Patel-${profile.fileLabel}-Resume.pdf`,
    contactLines: [
      `${persona.location} | ${persona.phone} | ${persona.email}`,
      `LinkedIn: ${stripProtocol(persona.linkedin)} | GitHub: ${stripProtocol(persona.github)}`,
    ],
    skills: orderedSkills,
    experience: orderedExperience,
    projects: orderedProjects.map((project) => ({
      ...project,
      githubLabel: stripProtocol(project.github),
      demoLabel: stripProtocol(project.demo),
    })),
    education,
    certifications,
  };
};
