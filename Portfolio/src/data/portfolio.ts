export type Project = {
  name: string
  period: string
  category: string
  description: string
  details: string[]
  tags: string[]
  github?: string
  visual: 'genesis' | 'intellmeet' | 'igris' | 'kartx' | 'royal'
}

export const portfolioData = {
  name: 'Keerthi Srishank',
  firstName: 'Srishank',
  headline: 'Computer Science · AI & ML · Software Development',
  location: 'Hyderabad, Telangana, India',
  availability: 'Open to internships & software development opportunities',
  email: 'keerthisrishank@gmail.com',
  phone: '+91-7675008218',
  heroStatement: 'Building thoughtful digital systems where intelligent ideas meet real-world interaction.',
  contactMessage:
    'Keerthi Srishank is currently open to internship and software development opportunities. I\'d be glad to connect about a project or technical conversation.',
  socialLinks: {
    github: 'https://github.com/srishank-17',
    linkedin: 'https://linkedin.com/in/srishank/',
  },
  about:
    'Keerthi Srishank is a Computer Science student focused on building AI-driven, real-time, and full-stack applications. My work spans adaptive learning, enterprise collaboration, voice interaction, and responsive web experiences - supported by a foundation in algorithms, software engineering, and machine learning.',
  education: {
    degree: 'B.Tech in Computer Science',
    institution: 'Geethanjali College of Engineering and Technology, Telangana',
    period: '2024 - 2028',
    score: '7.88 CGPA',
  },
  skills: [
    {
      number: '01',
      title: 'Full-stack web development',
      description:
        'Building web experiences with reusable interfaces, APIs, authentication, data storage, and responsive routing.',
      technologies: ['ReactJS', 'NodeJS', 'ExpressJS', 'MongoDB', 'HTML', 'CSS'],
    },
    {
      number: '02',
      title: 'AI & machine learning',
      description:
        'Exploring AI-driven experiences through machine learning foundations, data tooling, and intelligent product features.',
      technologies: ['NumPy', 'Pandas', 'Scikit-learn', 'PyTorch', 'TensorFlow'],
    },
    {
      number: '03',
      title: 'Programming foundations',
      description:
        'Applying data structures, algorithms, object-oriented programming, and database fundamentals to solve problems.',
      technologies: ['C', 'Python', 'Java', 'JavaScript', 'SQL'],
    },
    {
      number: '04',
      title: 'Development environments',
      description:
        'Working across version control, notebooks, cloud notebooks, and Unix-based development environments.',
      technologies: ['Git', 'Jupyter Notebook', 'Google Colab', 'Unix', 'Linux', 'Windows'],
    },
  ],
  projects: [
    {
      name: 'Genesis',
      period: 'Sep 2026 - Oct 2026',
      category: 'Real-time AI-driven adaptive learning platform',
      description:
        'An adaptive learning platform that continuously analyzes learner behavior, knowledge, strengths, weaknesses, and progress to deliver personalized learning paths and recommendations.',
      details: [
        'AI tutoring and knowledge modeling',
        'Skill-gap detection and personalized assessments',
        'Performance prediction with continuous learner feedback',
      ],
      tags: ['AI tutoring', 'Knowledge modeling', 'Skill-gap detection'],
      github: 'https://github.com/srishank-17/GENESIS',
      visual: 'genesis',
    },
    {
      name: 'IntellMeet',
      period: 'Jun 2026 - Jul 2026',
      category: 'AI-powered enterprise meeting & collaboration platform',
      description:
        'A MERN-based enterprise collaboration platform that brings together real-time video meetings, chat, task management, and AI-generated meeting intelligence.',
      details: [
        'AI transcription, meeting summaries, and action-item generation',
        'Built around real-time meetings, chat, and task management',
        'Targeted a 25-40% increase in team productivity',
      ],
      tags: ['MERN', 'AI transcription', 'Meeting summaries'],
      github: 'https://github.com/srishank-17/IntellMeet',
      visual: 'intellmeet',
    },
    {
      name: 'Igris',
      period: 'May 2026 - Jun 2026',
      category: 'AI voice assistant for desktop',
      description:
        'An intelligent desktop voice assistant designed to execute voice commands, open applications, manage files, and provide real-time responses through speech interaction.',
      details: [
        'Voice command execution for applications and files',
        'Real-time responses through speech interaction',
        'Improved command processing and speech recognition by about 20-25%',
      ],
      tags: ['Voice commands', 'Speech interaction', 'Desktop assistant'],
      visual: 'igris',
    },
    {
      name: 'KartX',
      period: 'Feb 2026 - Mar 2026',
      category: 'Adaptive racing engine',
      description:
        'A high-performance 2D go-kart racing game with physics-based movement, dynamic drifting, and responsive controls.',
      details: [
        'Realistic physics-based movement and dynamic drifting',
        'Responsive controls for an immersive game experience',
        'Optimized the rendering and game loop to reduce input latency by about 20-25%',
      ],
      tags: ['2D game', 'Physics movement', 'Rendering optimization'],
      github: 'https://github.com/srishank-17/KartX',
      visual: 'kartx',
    },
    {
      name: 'Royal Delight',
      period: 'Jan 2026 - Feb 2026',
      category: 'Full-stack restaurant website',
      description:
        'A restaurant website with online ordering, built with a React frontend and Node.js/Express backend.',
      details: [
        'Online ordering functionality for a restaurant web experience',
        'Reusable UI components and optimized routing',
        'Reduced load time by approximately 15-20%',
      ],
      tags: ['React', 'Node.js', 'Express', 'Online ordering'],
      github: 'https://github.com/srishank-17/Royal-Delight',
      visual: 'royal',
    },
  ] satisfies Project[],
  experience: [
    {
      role: 'Web Developer Intern',
      company: 'Zidio Development',
      period: 'Jun 2026 - Sep 2026',
      highlights: [
        'Developed and maintained a full-stack enterprise collaboration platform using the MERN stack.',
        'Implemented JWT-based authentication, team workspaces, and real-time communication features.',
        'Engineered real-time video conferencing and chat with WebRTC and Socket.io, including screen sharing and synchronized communication.',
      ],
      technologies: ['MERN', 'JWT', 'WebRTC', 'Socket.io'],
    },
  ],
  certifications: [
    { title: 'Software Engineering Job Simulation', issuer: 'J.P. Morgan', type: 'Virtual Experience' },
    { title: 'Data Analytics Job Simulation', issuer: 'Deloitte Australia', type: 'Virtual Experience' },
    {
      title: 'The Joy of Computing Using Python',
      issuer: 'NPTEL',
      type: 'Silver Medal',
      link: 'https://drive.google.com/file/d/1-mF_PcyVh4MyHTo3QVSctH7qoZSZUV6_/view?usp=sharing',
    },
  ],
  achievements: [
    { value: '3★', label: 'CodeChef rating', detail: 'Maximum rating: 1654' },
    { value: '100+', label: 'Algorithmic problems solved', detail: 'CodeChef' },
    { value: 'Silver', label: 'NPTEL medal', detail: 'The Joy of Computing Using Python' },
    { value: '50%', label: 'Course fee reimbursement', detail: 'Awarded with the NPTEL Silver Medal' },
  ],
  responsibilities: [
    'Technical Member, Code Warriors Club (GCET)',
    'Event Coordinator for a multi-round crime-hunt event at Bhaswara 2026',
  ],
  courses: [
    'Data Structures',
    'Algorithms',
    'Software Engineering',
    'Machine Learning',
    'Artificial Intelligence',
    'Database Management Systems',
    'Computer Networks (TCP/IP)',
    'Object-Oriented Programming',
  ],
} as const
