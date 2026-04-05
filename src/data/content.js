
export const persona = {
  name: "Raj Patel",
  role: "Software Engineer | Technical Support Specialist",
  location: "Etobicoke, Ontario, Canada",
  availability: "Open to Full-Time roles",
  email: "patelrj2711@gmail.com",
  phone: "+1-437-774-7747",
  linkedin: "https://linkedin.com/in/raj-patel-27november1997",
  github: "https://github.com/", // User provided generic link
  heroHeadline: "Building Scalable Software & Delivering Support Excellence",
  heroSubheadline: "Customer-focused professional with 5+ years of experience in software engineering and technical support. Skilled in Full-Stack Development, Database Optimization, and delivering high-quality client solutions.",
  about: {
    summary: "I am a customer-focused professional with over 5 years of experience in retail marketing and technical support, now pivoting back into Software Engineering. My background includes designing scalable full-stack applications at Logixweb Studio and providing frontline technical support at TP-Link India. I possess a strong ability to adhere to standard operating procedures, ensure safety protocols, and leverage MS Office for accurate data management. Known for effective communication, teamwork, and maintaining organized workspaces, I am currently finishing my Computer Programming diploma at Humber College.",
    highlights: [
      "5+ Years Professional Experience",
      "Full-Stack Dev (Java, Python, SQL)",
      "Technical Support & Networking",
      "Agile & Cross-functional Collaboration"
    ]
  }
};

export const skills = [
  {
    category: "Languages & Backend",
    items: ["Java", "Python", "C", "SQL", "JavaScript", "Spring Boot", "Django", "REST APIs", "Socket Programming"]
  },
  {
    category: "Databases & Security",
    items: ["Relational Schema Design", "Query Optimization", "CRUD Operations", "SSL/TLS", "OpenSSL", "TCP/IP", "Network Security"]
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Agile/Scrum", "Debugging", "Clean Code", "MS Office Suite", "Store Operations", "Data Verification"]
  },
  {
    category: "Professional Soft Skills",
    items: ["Customer Service", "Effective Communication", "Teamwork", "Problem Solving", "Time Management"]
  }
];

export const experience = [
  {
    id: 1,
    role: "Field Marketing Representative",
    company: "Kognitive Sales Solutions",
    period: "Nov 2024 - Present",
    description: [
      "Represent President’s Choice Financial by educating in-store customers on financial products, features, and benefits.",
      "Engage customers through needs-based conversations to understand financial goals and recommend appropriate solutions.",
      "Consistently deliver high-quality customer service in fast-paced, high-traffic retail environments.",
      "Collaborate with store management to coordinate daily tasks and ensure compliance with safety protocols."
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Logixweb Studio",
    period: "Nov 2021 - Feb 2024",
    description: [
      "Designed and developed scalable full-stack applications using Java, Python, SQL, HTML, CSS, and JavaScript.",
      "Built and maintained RESTful APIs and backend services supporting production workflows.",
      "Designed relational database schemas and optimized SQL queries for performance and integrity.",
      "Diagnosed and resolved issues across UI, API, and database layers, improving system reliability.",
      "Collaborated in Agile teams using Git for code reviews and iterative development."
    ]
  },
  {
    id: 3,
    role: "Technical Support Specialist",
    company: "TP-Link India",
    period: "Dec 2019 - Oct 2021",
    description: [
      "Provided frontline technical support via chat, email, phone, and Slack with a strong focus on first-pass resolution.",
      "Diagnosed and troubleshot complex networking, cloud, and software-related issues.",
      "Performed root-cause analysis and collaborated with engineering teams for advanced issue resolution.",
      "Created and maintained knowledge-base articles and instructional documentation.",
      "Supported customers in data-driven and cloud-based environments using SQL, Azure, and programming fundamentals."
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Secure Chat Application (End-to-End Encrypted)",
    description: "A real-time messaging application for university students to collaborate on coursework. Features include private messaging, group channels, and file sharing.",
    techStack: ["Node.js", "Socket.io", "MongoDB", "Express", "React"],
    repoLink: "https://github.com/raj271197/Secure-Chat-Application",
    demoLink: "https://github.com/raj271197/Secure-Chat-Application",
    features: [
      "End-to-end encrypted messaging for secure communication",
      "Real-time chat using sockets/WebSockets",
      "User authentication (login/signup)",
      "Private messaging with multi-user support",
      "Fast and reliable client-server architecture"
    ]
  },
  {
    id: 2,
    title: "EventMate",
    description: "Cross-platform mobile application for discovering local community events. Integrates with Google Maps API and a custom backend for event curation.",
    techStack: ["React Native", "Firebase", "Google Maps API", "Expo"],
    repoLink: "https://github.com/",
    demoLink: null,
    features: [
      "Integrated Google Maps API to visualize event locations effectively.",
      "Utilized Firebase Auth and Realtime Database for seamless data synchronization.",
      "Optimized app performance to ensure smooth scrolling on older devices."
    ]
  },
  {
    id: 3,
    title: "OpenHelpDesk – IT Help Desk Ticketing System",
    description: "A Flask-based ticketing system for managing IT support requests efficiently. Features secure OTP authentication, role-based access (User/Admin), and real-time ticket tracking. Includes an admin dashboard, priority/status filtering, and a responsive UI with dark/light mode. Built using Flask, SQLAlchemy, Bootstrap, and SQLite, focusing on security and full-stack development.",
    techStack: ["Python", "Django", "PostgreSQL", "Bootstrap"],
    repoLink: "https://github.com/raj271197/OpenHelpDesk-IT-Help-Desk-Ticketing-System",
    demoLink: "https://github.com/raj271197/OpenHelpDesk-IT-Help-Desk-Ticketing-System",
    features: [
      "OpenHelpDesk – Key Features",
      "Secure OTP-based user authentication",
      "Role-based access (User & Admin)",
      "Ticket creation, tracking, and updates",
      "Admin dashboard for managing requests",
      "Secure password hashing and session management"

    ]
  },
  {
    id: 4,
    title: "TaskSphere UI – Key Features",
    description: "TaskSphere UI is a modern productivity web application built with Next.js and React, designed to deliver a smooth and interactive user experience. It includes core features like task management, dynamic components, and API integration, enhanced with glassmorphism design, gradients, and animations. The project focuses on responsive design, performance, and clean UI/UX while demonstrating strong front-end development and TypeScript skills.",
    techStack: ["Java", "Spring Boot", "MySQL", "React", "Docker"],
    repoLink: "https://github.com/raj271197/TaskSphere-Advanced-React-Productivity-Platform",
    demoLink: "https://github.com/raj271197/TaskSphere-Advanced-React-Productivity-Platform",
    features: [
      "Interactive counter with real-time updates",
      "Todo list with add/remove and keyboard support",
      "API integration (JSONPlaceholder)",
      "Animated user profile component",
      "Glassmorphism UI with gradient design system"
    ]
  },
  {
    id: 5,
    title: "CloudFile Manager",
    description: "A secure cloud storage application allowing users to upload, organize, and share files, leveraging AWS S3 for scalable storage.",
    techStack: ["Node.js", "AWS S3", "Express", "React", "TailwindCSS"],
    repoLink: "https://github.com/",
    demoLink: "https://cloudfiles-demo.vercel.app",
    features: [
      "Integrated AWS S3 SDK for secure multipart file uploads and downloads.",
      "Implemented folder structure logic and drag-and-drop file interface.",
      "Optimized static asset delivery using AWS CloudFront."
    ]
  },
  {
    id: 6,
    title: "Restaurant Web App – Description",
    description: "A full-stack restaurant management system built using Spring Boot and Thymeleaf, designed to manage menu items and categories efficiently. The application includes secure login with role-based access control using Spring Security, along with complete CRUD functionality.",
    techStack: ["Python", "Flask", "Chart.js", "PostgreSQL", "Redis"],
    repoLink: "https://github.com/raj271197/BistroLounge-RestaurantApplication",
    demoLink: null,
    features: [
      "Secure login with Spring Security and role-based access (Admin/User)",
      "CRUD operations for menu items and categories.",
      "Dynamic Thymeleaf templates with form validation",
      "MVC architecture for clean code organization",
      "H2 in-memory database with initialization scripts",
      "RESTful service endpoints for backend operations",
      "Git version control for project management"
    ]
  }
];

export const education = [
  {
    degree: "Computer Programming Diploma (Honours)",
    institution: "Humber College",
    year: "2024 - 2025"
  },
  {
    degree: "BASc, Information Technology",
    institution: "Collège LaSalle, Montréal",
    year: "2024"
  },
  {
    degree: "BCA, Bachlors In Computer Application With Distinction",
    institution: "CHARUSAT",
    year: "2016 - 2020"
  },
  {
    degree: "Certifications",
    items: [
      "Programming Foundations: Fundamentals",
      "Career Essentials in Cybersecurity (Microsoft & LinkedIn)",
      "What Is Generative AI?",
      "Microsoft Copilot Productivity Tools"
    ]
  }
];
