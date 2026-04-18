import projectChat from '../assets/projects/project-chat.svg';
import projectDesk from '../assets/projects/project-desk.svg';
import projectTask from '../assets/projects/project-task.svg';
import projectCloud from '../assets/projects/project-cloud.svg';

export const persona = {
  name: 'Raj Patel',
  title: 'Full-Stack Developer',
  role: 'Junior Full-Stack Developer focused on modern web apps, API integrations, and polished user experiences.',
  location: 'Etobicoke, Ontario, Canada',
  availability: 'Open to full-time software engineering opportunities',
  email: 'patelrj2711@gmail.com',
  phone: '+1-437-774-7747',
  linkedin: 'https://linkedin.com/in/raj-patel-27november1997',
  github: 'https://github.com/raj271197',
  resumeHref: `${import.meta.env.BASE_URL}resume.pdf`,
  heroHeadline: 'Building reliable full-stack products with thoughtful UX and clean execution.',
  heroSummary:
    'I blend application development, support experience, and hands-on debugging to ship responsive interfaces, integrate APIs, and improve systems from the UI down to the database.',
  intro:
    'With experience across full-stack delivery, support operations, and database-backed applications, I bring a practical mindset to product work: build clearly, debug fast, and make the experience feel effortless for the user.',
  stats: [
    { label: 'Years of experience', value: '5+' },
    { label: 'Primary focus', value: 'React, Next.js, APIs' },
    { label: 'Based in', value: 'Toronto Area' },
  ],
  highlights: [
    'Responsive front-end development with modern React and Next.js',
    'REST API integration and full-stack workflow ownership',
    'Database-backed application development with SQL and MongoDB',
    'Strong debugging, technical support, and customer-facing communication',
  ],
  quickFacts: [
    'Builds accessible interfaces with responsive layouts and clean visual systems',
    'Comfortable across UI, API, and data layers',
    'Experienced in Agile collaboration and Git-based delivery',
    'Brings a support-driven mindset to product quality and edge cases',
  ],
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const skills = [
  {
    title: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Responsive Design', 'UI Animation', 'Accessibility'],
  },
  {
    title: 'Backend',
    items: ['Java', 'Python', 'Node.js', 'REST APIs', 'Express', 'Spring Boot', 'Authentication', 'Debugging'],
  },
  {
    title: 'Data & Cloud',
    items: ['MySQL', 'MongoDB', 'SQL Optimization', 'Database Design', 'Azure', 'Firebase', 'Deployment', 'Performance Tuning'],
  },
  {
    title: 'Workflow',
    items: ['Git', 'GitHub', 'Agile', 'Testing', 'Documentation', 'Issue Triage', 'Technical Support', 'Cross-team Collaboration'],
  },
];

export const experience = [
  {
    role: 'Junior Full Stack Developer',
    company: 'HTS Engineering',
    type: 'Part-Time',
    period: '[December 2025 - Present]',
    points: [
      'Assisted in development of web applications using HTML, CSS, JavaScript, React, and Next.js.',
      'Worked on frontend and backend integration to support smooth feature delivery.',
      'Built responsive UI components for modern multi-device experiences.',
      'Integrated REST APIs and supported data flow between client and server.',
      'Debugged and resolved issues across development workflows.',
      'Used Git and GitHub for version control and collaboration.',
      'Supported database operations with MySQL and MongoDB.',
      'Assisted in testing and deployment activities.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Logixweb Studio',
    type: 'Full-Time',
    period: 'Nov 2021 - Feb 2024',
    points: [
      'Designed and developed scalable full-stack applications using Java, Python, SQL, HTML, CSS, and JavaScript.',
      'Built and maintained RESTful APIs and backend services.',
      'Designed relational database schemas and optimized SQL queries for performance.',
      'Diagnosed and resolved issues across UI, API, and database layers.',
      'Collaborated in Agile teams using Git for delivery and iteration.',
    ],
  },
  {
    role: 'Technical Support Specialist',
    company: 'TP-Link India',
    type: 'Full-Time',
    period: 'Dec 2019 - Oct 2021',
    points: [
      'Provided technical support through chat, email, and phone channels.',
      'Troubleshot networking, cloud, and software issues for customers.',
      'Performed root-cause analysis to identify and resolve recurring problems.',
      'Created documentation and knowledge-base content for support workflows.',
      'Worked with SQL, Azure, and programming fundamentals while supporting technical cases.',
    ],
  },
];

export const projects = [
  {
    title: 'Secure Chat Application',
    description:
      'A real-time collaboration platform with secure messaging, multi-user channels, and a fast communication flow built for student teamwork scenarios.',
    stack: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/raj271197/Secure-Chat-Application',
    demo: 'https://github.com/raj271197/Secure-Chat-Application',
    image: projectChat,
    alt: 'Preview artwork for a secure chat application dashboard with messaging panels.',
  },
  {
    title: 'OpenHelpDesk',
    description:
      'A help desk ticketing system with role-based access, OTP authentication, admin workflows, and status tracking designed for IT support operations.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Bootstrap'],
    github: 'https://github.com/raj271197/OpenHelpDesk-IT-Help-Desk-Ticketing-System',
    demo: 'https://github.com/raj271197/OpenHelpDesk-IT-Help-Desk-Ticketing-System',
    image: projectDesk,
    alt: 'Preview artwork for an IT help desk application with analytics cards and support tickets.',
  },
  {
    title: 'TaskSphere',
    description:
      'A productivity interface focused on task flow, dynamic components, and API-driven interactions, wrapped in a modern glassmorphism visual system.',
    stack: ['Next.js', 'React', 'TypeScript', 'API Integration', 'Modern CSS'],
    github: 'https://github.com/raj271197/TaskSphere-Advanced-React-Productivity-Platform',
    demo: 'https://github.com/raj271197/TaskSphere-Advanced-React-Productivity-Platform',
    image: projectTask,
    alt: 'Preview artwork for a productivity dashboard with task columns and progress widgets.',
  },
  {
    title: 'CloudFile Manager',
    description:
      'A cloud-based file management experience for organizing, sharing, and handling uploads with a scalable architecture and polished UI interactions.',
    stack: ['React', 'Node.js', 'AWS S3', 'Express', 'Cloud Storage'],
    github: 'https://github.com/raj271197',
    demo: 'https://github.com/raj271197',
    image: projectCloud,
    alt: 'Preview artwork for a cloud file manager with folders, storage charts, and upload panels.',
  },
];

export const education = [
  {
    title: 'Computer Programming Diploma (Honours)',
    institution: 'Humber College',
    period: '2024 - 2025',
    details: 'Focused on software engineering fundamentals, application development, and practical programming projects.',
  },
  {
    title: 'BASc, Information Technology',
    institution: 'College LaSalle, Montreal',
    period: '2024',
    details: 'Expanded technical foundations in information systems and modern computing environments.',
  },
  {
    title: 'BCA, Computer Applications',
    institution: 'CHARUSAT',
    period: '2016 - 2020',
    details: 'Graduated with distinction with a strong base in programming, systems, and software delivery.',
  },
];

export const certifications = [
  'Programming Foundations: Fundamentals',
  'Career Essentials in Cybersecurity',
  'What Is Generative AI?',
  'Microsoft Copilot Productivity Tools',
];

export const socialLinks = [
  { label: 'GitHub', href: persona.github },
  { label: 'LinkedIn', href: persona.linkedin },
  { label: 'Email', href: `mailto:${persona.email}` },
];
