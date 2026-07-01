import { NavItem, PortfolioPart, PurposeItem } from '../models/portfolio.models';

export const PORTFOLIO_META = {
  title: 'Software Engineering Portfolio',
  subtitle: 'Best Egg Internship · Software Engineering & Architecture',
  tagline: 'An engineering notebook documenting technical growth from foundations to production.',
};

export const INTRODUCTION = {
  title: 'Introduction',
  paragraphs: [
    'This portfolio documents my progression throughout my Software Engineering & Architecture internship at Best Egg. Rather than serving as a collection of notes, it records how my understanding of software engineering evolved—from learning core web development fundamentals to designing software features intended for production use.',
    'Each section is meant to show not only what was built, but also why it was built, the engineering decisions involved, lessons learned, architectural considerations, testing performed, and opportunities for future improvement. The goal is to create a permanent engineering notebook that demonstrates technical growth while also serving as a practical reference for future software projects.',
  ],
};

export const PURPOSE_ITEMS: PurposeItem[] = [
  {
    title: 'Document growth',
    description:
      'Capture how technical skills and engineering judgment developed over time.',
  },
  {
    title: 'Explain decisions',
    description:
      'Record the reasoning, tradeoffs, and constraints behind implementation choices.',
  },
  {
    title: 'Create reference material',
    description:
      'Preserve useful patterns, lessons, and architectural thinking for future work.',
  },
  {
    title: 'Show engineering practice',
    description:
      'Present projects in a way that reflects professional software development, not just completed code.',
  },
];

export const ENGINEERING_PHILOSOPHY = {
  title: 'Engineering Philosophy',
  lead: 'One lesson became clear very early in my internship: good software is more than working code.',
  paragraphs: [
    'I have observed that professional software engineering requires understanding why a solution exists, why it was designed a particular way, what tradeoffs were made, how maintainable it is, and how it fits into a larger system. That perspective shaped this portfolio.',
    'Each significant project follows an engineering-focused documentation style whenever possible. This structure is meant to mirror true software production rather than just completed code.',
  ],
  docSections: [
    'Problem Statement',
    'Background',
    'Requirements',
    'Design Constraints',
    'Research',
    'Architecture',
    'Development Process',
    'Testing',
    'Results',
    'Reflection',
    'Future Improvements',
  ],
};

export const PORTFOLIO_PARTS: PortfolioPart[] = [
  {
    slug: 'foundations',
    partNumber: 1,
    title: 'Software Engineering Foundations',
    subtitle: 'Building blocks for every project in this portfolio',
    intro: [
      'Throughout the internship, I focused on understanding not only how to build software, but why professional applications are designed the way they are. Every technology introduced a new layer of abstraction, allowing increasingly complex applications to remain organized, maintainable, and scalable.',
      'The concepts documented here provide the foundation upon which every project in this portfolio was built.',
    ],
    topics: [
      {
        slug: 'development-environment',
        title: 'Development Environment',
        summary:
          'Configuring tooling, project structure, and the modern engineering workflow beyond writing code.',
        icon: 'terminal',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'Professional software development extends far beyond writing code. A productive development environment provides the tools necessary to efficiently build, test, debug, and maintain applications throughout their lifecycle.',
              'I became comfortable working within a modern development workflow, including configuring development environments, navigating the command line, managing project dependencies with npm, and understanding how project structure influences maintainability. I also learned how Angular projects are organized, how build tools automate development tasks, and how consistent tooling improves collaboration across engineering teams.',
              'Understanding the development environment transformed software development from writing isolated files into working within a complete engineering ecosystem.',
            ],
          },
        ],
      },
      {
        slug: 'version-control',
        title: 'Version Control',
        summary:
          'Git workflows, collaboration patterns, and version control as an engineering safety net.',
        icon: 'git',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'Version control is one of the most important tools in professional software engineering. Rather than simply storing code, it provides a complete history of every change made throughout a project\'s development.',
              'I learned professional Git workflows including repository management, branching strategies, committing meaningful changes, resolving merge conflicts, synchronizing local and remote repositories, and collaborating through GitHub. More importantly, I developed an appreciation for version control as both a collaboration tool and an engineering safety net that enables experimentation, traceability, and reliable software evolution.',
              'Effective use of version control allows multiple engineers to work simultaneously while maintaining confidence that changes can be reviewed, understood, and recovered when necessary.',
            ],
          },
        ],
      },
      {
        slug: 'front-end-engineering',
        title: 'Front-End Engineering',
        summary:
          'Semantic HTML, CSS/SCSS architecture, and building maintainable responsive interfaces.',
        icon: 'layout',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'Modern web applications require significantly more than creating visually appealing pages. Front-end engineering combines user interface design, accessibility, responsiveness, maintainability, and performance into a cohesive user experience.',
              'I learned how semantic HTML establishes meaningful document structure, how CSS and SCSS separate presentation from content, and how modern layout systems create responsive interfaces that adapt across devices. Particular emphasis was placed on writing maintainable styles through reusable components, organized styling architectures, and scalable project organization rather than isolated page design.',
              'This foundation established an understanding that front-end development is fundamentally about building interfaces that are usable, maintainable, and extensible.',
            ],
          },
        ],
      },
      {
        slug: 'javascript',
        title: 'JavaScript',
        summary:
          'Interactive application logic, async programming, and data flow in the browser.',
        icon: 'code',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'JavaScript introduced the transition from static web pages to interactive software.',
              'Rather than viewing JavaScript as a collection of language features, I focused on understanding how data flows through an application, how user interactions trigger application behavior, how asynchronous operations communicate with external systems, and how browser APIs enable dynamic user experiences.',
              'Topics explored included application logic, event-driven programming, object-oriented concepts, asynchronous programming, API communication, and manipulating application state in response to user interaction.',
              'These concepts established the programming foundation necessary to build modern client-side applications.',
            ],
          },
        ],
      },
      {
        slug: 'typescript',
        title: 'TypeScript',
        summary:
          'Static typing, stronger contracts, and scaling codebases across engineering teams.',
        icon: 'type',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'As applications increase in complexity, maintaining reliability becomes increasingly difficult without stronger tooling.',
              'TypeScript extends JavaScript by introducing static typing, enabling developers to identify many errors before software is executed. I learned how interfaces, classes, type annotations, generics, and other language features improve code quality while making applications easier to understand, maintain, and refactor.',
              'Perhaps most importantly, TypeScript demonstrated how stronger contracts between different parts of an application reduce ambiguity and allow larger codebases to scale more effectively across engineering teams.',
            ],
          },
        ],
      },
      {
        slug: 'angular',
        title: 'Angular',
        summary:
          'Component architecture, services, routing, and designing maintainable front-end systems.',
        icon: 'angular',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'Angular represented the transition from learning individual programming concepts to understanding application architecture.',
              'Rather than building isolated pages, I learned how modern front-end frameworks organize software into reusable components connected through clearly defined data flow. Topics included component-based architecture, templates, data binding, services, dependency injection, routing, lifecycle management, observables, and modular application design.',
              'A major emphasis throughout the internship was understanding why Angular encourages separation of concerns and reusable architecture. This shifted my perspective from simply making features work toward designing software that remains maintainable as applications grow in size and complexity.',
              'Many of the projects contained within this portfolio reflect these architectural principles.',
            ],
          },
        ],
      },
      {
        slug: 'software-engineering-principles',
        title: 'Software Engineering Principles',
        summary:
          'Architectural thinking, clean code, and contributing within established codebases.',
        icon: 'principles',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'Beyond individual technologies, the internship emphasized the broader engineering practices that distinguish professional software development.',
              'Throughout each project I developed an understanding of architectural thinking, separation of concerns, reusable design, clean code practices, consistent naming conventions, incremental development, and technical documentation. Equally important was learning how to analyze existing codebases, understand design decisions made by other engineers, and contribute within established project structures.',
              'These principles have become the foundation of my engineering approach. Rather than viewing software as individual files or functions, I now approach development as the design of interconnected systems that must remain understandable, maintainable, and adaptable over time.',
            ],
          },
        ],
      },
      {
        slug: 'looking-forward',
        title: 'Looking Forward',
        summary:
          'Foundational principles that remain applicable as technologies continue to evolve.',
        icon: 'forward',
        sections: [
          {
            title: 'Overview',
            paragraphs: [
              'The technologies and concepts introduced throughout this section represent the foundation of my software engineering journey. While individual languages and frameworks will continue to evolve, the engineering principles of thoughtful architecture, maintainable design, continuous learning, and collaborative development will remain applicable throughout my career.',
              'The remainder of this portfolio demonstrates how these foundational concepts were applied through progressively more complex projects, beginning with isolated learning exercises and continuing through real features implemented into the company.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'sandbox',
    partNumber: 2,
    title: 'Sandbox Applications',
    subtitle: 'Low-risk environments for practicing architecture and design',
    intro: [
      'These applications were built to practice new technologies before contributing to production software. They served as low-risk environments for learning architecture, design, and implementation patterns.',
    ],
    topics: [
      {
        slug: 'dashboard-application',
        title: 'Dashboard Application',
        subtitle: 'Sandbox Application 1',
        summary:
          'A progressively developed Angular application simulating a customer information form with validation, routing, and business fundamentals.',
        icon: 'dashboard',
        tags: [
          'Angular',
          'Forms',
          'Validation',
          'Routing',
        ],
        sections: [
          {
            title: 'Project Overview',
            paragraphs: [
              'A progressively developed Angular application designed to simulate a form that a customer would fill their information into. This application included forms, validation, routing, and many Angular and business fundamentals. This project allowed me to practice everything I have learned previously.',
            ],
          },
          {
            title: 'Topics Covered',
            paragraphs: [
              'This sandbox served as a comprehensive practice environment for applying foundational concepts in a cohesive application.',
            ],
            list: [
              'Application architecture',
              'Routing and navigation',
              'Component composition',
              'Services and data flow',
              'Form validation',
              'Reusable components',
              'Debugging and refactoring',
            ],
          },
        ],
      },
      {
        slug: 'loan-application-portal',
        title: 'Loan Application Portal',
        subtitle: 'Sandbox Application 2',
        summary:
          'A from-scratch Angular application simulating a real-world loan platform, evolving alongside professional engineering practices.',
        icon: 'portal',
        tags: [
          'Angular',
          'Mock APIs',
          'Local Storage',
          'Architecture',
        ],
        sections: [
          {
            title: 'Project Overview',
            paragraphs: [
              'A progressively developed Angular application designed to simulate a real-world loan platform similar to the products offered at Best Egg. This project existed to test my knowledge and start from scratch to create a better, more organized codebase. This evolved alongside my understanding of Angular architecture and became my environment to experiment with professional engineering practices.',
            ],
          },
          {
            title: 'Topics Covered',
            paragraphs: [
              'Topics documented in this application include the full engineering process from design through iteration.',
            ],
            list: [
              'Application architecture',
              'Routing and components',
              'Services and mock APIs',
              'Local storage and data models',
              'User flow design',
              'Form validation',
              'Reusable components',
              'Feature development and refactoring',
              'Debugging and the engineering process',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'projects',
    partNumber: 3,
    title: 'Intern Projects',
    subtitle: 'Production-oriented work on real company problems',
    intro: [
      'These projects represent work completed as part of the internship on real company problems. Using my sandbox applications, I created solutions that were implemented into Best Egg applications. These required designing software intended for production use while considering maintainability, scalability, performance, and integration into an existing enterprise codebase.',
    ],
    topics: [
      {
        slug: 'keystroke-velocity-tracking',
        title: 'Keystroke Velocity Tracking',
        subtitle: 'Project 1',
        summary:
          'Design and implementation of a reusable Angular feature for collecting keystroke timing metrics to support fraud detection and behavioral analysis.',
        icon: 'keyboard',
        tags: [
          'Angular',
          'Production',
          'Fraud Detection',
          'Reusable Feature',
        ],
        sections: [
          {
            title: 'Project Overview',
            paragraphs: [
              'Design and implementation of a reusable Angular feature for collecting keystroke timing metrics to support fraud detection and behavioral analysis.',
              'This project required integrating a new capability into an existing enterprise application while maintaining code quality standards, ensuring the feature could be reused across contexts, and considering how collected metrics would support downstream fraud detection workflows.',
            ],
          },
          {
            title: 'Engineering Focus',
            paragraphs: [
              'As a production-oriented intern project, this work emphasized architectural integration, maintainability, and designing for real-world constraints rather than isolated demonstration code.',
            ],
            list: [
              'Reusable Angular feature design',
              'Keystroke timing metric collection',
              'Integration into existing codebase',
              'Production-quality implementation',
              'Support for fraud detection and behavioral analysis',
            ],
          },
        ],
      },
    ],
  },
];

export const NAVIGATION: NavItem[] = [
  { label: 'Introduction', path: '/' },
  { label: 'Purpose', path: '/purpose' },
  { label: 'Philosophy', path: '/philosophy' },
  {
    label: 'Part I — Foundations',
    path: '/foundations',
    children: PORTFOLIO_PARTS[0].topics.map((topic) => ({
      label: topic.title,
      path: `/foundations/${topic.slug}`,
    })),
  },
  {
    label: 'Part II — Sandbox',
    path: '/sandbox',
    children: PORTFOLIO_PARTS[1].topics.map((topic) => ({
      label: topic.title,
      path: `/sandbox/${topic.slug}`,
    })),
  },
  {
    label: 'Part III — Projects',
    path: '/projects',
    children: PORTFOLIO_PARTS[2].topics.map((topic) => ({
      label: topic.title,
      path: `/projects/${topic.slug}`,
    })),
  },
];

export function getPartBySlug(slug: string): PortfolioPart | undefined {
  return PORTFOLIO_PARTS.find((part) => part.slug === slug);
}

export function getTopicBySlug(partSlug: string, topicSlug: string) {
  const part = getPartBySlug(partSlug);
  return part?.topics.find((topic) => topic.slug === topicSlug);
}
