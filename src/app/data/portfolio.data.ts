import {
  EngineeringPhilosophy,
  NavItem,
  PortfolioIntroduction,
  PortfolioMeta,
  PortfolioPart,
  PurposeItem,
} from '../models/portfolio.models';

/**
 * Static content source for the portfolio.
 * Components should consume this data through PortfolioContentService.
 */
export const PORTFOLIO_META: PortfolioMeta = {
  title: 'Software Engineering Portfolio',
  subtitle: 'Best Egg Internship · Software Engineering & Architecture',
  tagline: 'An engineering notebook documenting technical growth from foundations to production.',
};

export const INTRODUCTION: PortfolioIntroduction = {
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

export const ENGINEERING_PHILOSOPHY: EngineeringPhilosophy = {
  title: 'Engineering Philosophy',
  lead: 'One lesson became clear very early in my internship: good software is more than working code.',
  paragraphs: [
    'I have observed that professional software engineering requires understanding why a solution exists, why it was designed a particular way, what tradeoffs were made, how maintainable it is, and how it fits into a larger system. That perspective shaped this portfolio.',
    'Each significant project follows an engineering-focused documentation style whenever possible. This structure is meant to mirror true software production rather than just completed code.',
  ],
  docSectionGroups: [
    {
      label: 'Understand',
      sections: [
        'Problem Statement',
        'Background',
        'Requirements',
        'Design Constraints',
        'Research',
      ],
    },
    {
      label: 'Build',
      sections: ['Architecture', 'Development Process', 'Testing'],
    },
    {
      label: 'Evaluate',
      sections: ['Results', 'Reflection', 'Future Improvements'],
    },
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
            title: 'Understand — Problem Statement',
            paragraphs: [
              'Fraud detection systems traditionally rely on information such as device fingerprints, IP addresses, account history, and application data. While these signals are valuable, they provide little insight into how a user interacts with an application.',
              'The objective of this project was to design and implement a reusable client-side feature capable of collecting keystroke velocity (how fast a user types) from users as they complete web forms.',
              'Rather than determining whether a user is fraudulent on its own, the feature captures behavioral metrics that can be transmitted through Best Egg\'s existing event pipeline, where downstream fraud detection systems can incorporate the data into broader risk analysis.',
              'From an engineering perspective, the challenge was not simply recording keyboard events; it was creating a reusable, maintainable solution that could integrate into existing applications with minimal impact while producing accurate behavioral data.',
            ],
          },
          {
            title: 'Understand — Background',
            paragraphs: [
              'Best Egg\'s online loan application collects information submitted by users, but additional insight into how that information is entered can provide valuable behavioral signals.',
              'Traditional form analytics capture the final values submitted but do not measure typing characteristics such as keystroke velocity, limiting the ability to analyze user behavior during data entry.',
              'Without these behavioral metrics, distinguishing between natural user interactions and potentially automated or fraudulent activity is more challenging using frontend data alone.',
              'The objective of this project is to design and implement a reusable typing behavior tracking capability that measures keystroke velocity without recording the user\'s actual input.',
              'The solution must integrate with the existing Angular architecture, support reuse across multiple forms, introduce minimal performance overhead, and generate metrics that can be incorporated into the existing behavior tracking pipeline for further analysis.',
            ],
          },
          {
            title: 'Understand — Business Context',
            paragraphs: [
              'Best Egg processes online loan applications through a web-based platform. Every application contains traditional form data such as personal information, financial details, and employment history.',
              'While this information provides the data necessary to evaluate an application, it offers limited insight into the applicant\'s interaction with the application itself.',
              'Behavioral analytics focuses on how users interact with an application rather than simply what information they submit. These behavioral signals can complement existing fraud detection systems by providing another dimension of analysis.',
              'There are existing processes used already. However, no mechanism existed to measure typing behaviors like keystroke velocity.',
            ],
          },
          {
            title: 'Understand — Requirements (Functional)',
            paragraphs: [
              'Capture keyboard events globally.',
              'Measure time between consecutive keystrokes.',
              'Generate summary metrics for each input field.',
              'Report completed metrics through the existing Behavior Tracking Service.',
              'Reset measurements after field completion.',
              'Ignore unsupported HTML elements.',
              'Never capture the user\'s typed content.',
              'Capture keyboard activity while users interact with application forms.',
              'Calculate meaningful typing velocity metrics.',
              'Generate structured behavior events.',
              'Send collected data through the existing enterprise event reporting pipeline.',
              'Avoid collecting sensitive user input.',
              'Support multiple input fields across the application.',
            ],
          },
          {
            title: 'Understand — Requirements (Non-Functional)',
            paragraphs: [
              'Integrate into the existing Angular application.',
              'Follow Angular dependency injection patterns.',
              'Maintain low runtime overhead.',
              'Be reusable across future applications.',
              'Remain modular and maintainable.',
              'Low CPU overhead.',
              'Minimal memory usage.',
              'Easy integration into existing Angular projects.',
              'Maintainable and extensible architecture.',
              'Browser compatibility.',
              'No noticeable impact on user experience.',
            ],
          },
          {
            title: 'Understand — Design Constraints',
            paragraphs: [
              'Privacy: No user-entered text may be stored or transmitted.',
              'Performance: Keyboard event processing must not introduce noticeable input latency.',
              'Architecture: The implementation must integrate with the existing Behavior Tracking Service in a Best Egg application instead of creating an independent event tracking system.',
              'Reusability: Typing behavior should be implemented as a standalone service that can be reused with minimal modification.',
              'Scalability: The architecture should support additional behavioral metrics in the future without significant redesign.',
              'Different browsers expose keyboard events differently.',
              'The implementation relied on browser events such as keydown, keyup, input, and blur and browser-provided timestamps while remaining compatible across modern browsers.',
              'Most processing occurs incrementally, with summarized data reported rather than transmitting every raw keyboard event.',
            ],
          },
          {
            title: 'Understand — Research',
            paragraphs: [
              'Research was conducted into how behavioral biometrics are used in modern web applications. Common behavioral metrics include mouse movement, scroll behavior, click timing, typing speed, and navigation patterns.',
              'Keystroke velocity was selected because it provides useful behavioral information while requiring relatively simple implementation.',
              'Several implementation approaches were evaluated. Component-level listeners were simple but caused duplicate logic and difficult maintenance. Global document listeners were centralized, reusable, and scalable, and were selected.',
              'Rather than logging every keyboard event indefinitely, the project stores only aggregated statistics such as average interval, minimum interval, and maximum interval. Keydown has shown to be the most effective while still maintaining privacy.',
              'Research was also performed on browser keyboard events to determine when events fire, available timestamp precision, browser compatibility, limitations on mobile devices, handling focus changes, and event ordering.',
              'Event reporting research favored a service-based architecture rather than embedding logic inside components to provide separation of concerns, centralized event handling, easier testing, and improved reusability.',
            ],
            list: [
              'Keystroke dynamics explored: Flight Time, Dwell Time, Typing Velocity, Pause Detection, and Error Behavior.',
            ],
          },
          {
            title: 'Build — Architecture',
            paragraphs: [
              'The solution follows a layered service architecture.',
            ],
            list: [
              'User Keyboard Input -> Document Event Listener -> BehaviorTrackingService -> TypingVelocityService -> Metric Calculation -> Behavior Tracking Pipeline',
              'User Typing -> BehaviorService -> Keyboard Event Collection -> Metric Calculation -> TypingVelocity Request Object -> Enterprise Event Tracking Service -> Backend Fraud Systems',
            ],
          },
          {
            title: 'Build — Architecture Responsibilities (BehaviorTrackingService)',
            paragraphs: [
              'Responsibility: Acts as the application\'s orchestration layer for behavioral analytics.',
              'The BehaviorTrackingService serves as the single entry point for behavioral event collection, ensuring that event handling remains centralized and consistent across the application.',
            ],
            list: [
              'Register and manage global document event listeners.',
              'Identify supported user interactions (keyboard events, focus changes, and related events).',
              'Determine whether an event originated from a supported input element.',
              'Delegate typing metric calculations to the TypingVelocityService.',
              'Coordinate the behavior tracking workflow without performing metric calculations.',
              'Report completed behavioral metrics through the existing analytics pipeline.',
              'Initialize behavior tracking and coordinate data collection.',
            ],
          },
          {
            title: 'Build — Architecture Responsibilities (TypingVelocityService)',
            paragraphs: [
              'Responsibility: Encapsulates all business logic related to keystroke velocity measurement.',
              'The TypingVelocityService performs all typing velocity calculations independently of event registration and reporting, making it reusable and easy to extend with additional behavioral metrics.',
            ],
            list: [
              'Track typing sessions for supported input fields.',
              'Record timestamps for consecutive keydown events.',
              'Calculate inter-key intervals.',
              'Maintain typing state for active input fields.',
              'Calculate total keystrokes, average interval, minimum interval, and maximum interval.',
              'Reset typing state when a session is complete.',
              'Return calculated metrics to the BehaviorTrackingService.',
            ],
          },
          {
            title: 'Build — Data Flow',
            paragraphs: [
              'User interaction: The user types into a supported form field.',
              'Global event capture: BehaviorTrackingService receives keydown and blur events through global document listeners.',
              'Event validation: The service verifies that the event originated from a supported HTML input element.',
              'Metric calculation: Valid keyboard events are delegated to TypingVelocityService, which records timestamps and updates typing metrics.',
              'Metric reporting: When a typing session is complete, the calculated metrics are returned to BehaviorTrackingService and forwarded to the application\'s existing behavior tracking pipeline.',
            ],
          },
          {
            title: 'Build — Separation of Responsibilities',
            paragraphs: [
              'BehaviorTrackingService: Event orchestration, event validation, service coordination, metric reporting.',
              'TypingVelocityService: Typing state management, timestamp recording, interval calculation, metric generation.',
            ],
          },
          {
            title: 'Build — Development Process',
            paragraphs: [
              'Phase 1 — Investigation: Learned Angular architecture, studied the existing Behavior Tracking Service, and researched behavioral analytics.',
              'Phase 2 — Prototype: Developed an initial implementation capable of measuring typing intervals and validated keyboard event handling, timing calculations, and browser compatibility.',
              'Phase 3 — Refactoring: Separated responsibilities into dedicated services to improve reusability, testability, and maintainability.',
              'Phase 4 — Production Alignment: Modified the implementation to mirror production architecture, including global event listeners, shared constants, utility functions, and improved service orchestration.',
              'Phase 5 — Documentation: Created engineering documentation covering requirements, architecture, testing, and future enhancements.',
            ],
          },
          {
            title: 'Build — Testing',
            paragraphs: [
              'Functional Testing: Verified accurate keystroke counts, correct interval calculations, proper metric resets, and independent tracking between fields.',
              'Edge Case Testing: Evaluated single-character fields, very fast typing, very slow typing, rapid focus changes, empty fields, and held keys.',
              'Integration Testing: Confirmed successful integration with Behavior Tracking Service, correct Angular dependency injection, and that existing functionality remained unaffected.',
              'Manual Testing: Performed multiple typing sessions using different typing speeds to verify calculated metrics matched expected values.',
            ],
          },
          {
            title: 'Evaluate — Results',
            paragraphs: [
              'The project successfully introduced a reusable typing velocity tracking capability into the Angular application while maintaining user privacy and application performance.',
              'The resulting architecture establishes a strong foundation for future behavioral analytics features.',
            ],
            list: [
              'Successful global keyboard event tracking.',
              'Accurate keystroke interval calculations.',
              'Reusable Angular service architecture.',
              'Separation of orchestration and business logic.',
              'Integration with the existing behavior tracking pipeline.',
              'No storage of sensitive user input.',
            ],
          },
          {
            title: 'Evaluate — Reflection',
            paragraphs: [
              'This project demonstrated that effective software engineering extends beyond writing code.',
              'This project represented a significant transition from building isolated learning applications to contributing to a feature intended for use within a production environment.',
              'Working within established services, event pipelines, and architectural patterns required a greater emphasis on maintainability, extensibility, and consistency than previous personal projects.',
            ],
            list: [
              'Architecture Before Implementation: Investing time in architecture produced a cleaner, more maintainable solution.',
              'Separation of Concerns: Separating orchestration from metric calculation simplified both testing and future development.',
              'Privacy by Design: Requirements surrounding user privacy directly influenced the implementation strategy.',
              'Iterative Development: Beginning with a simple prototype before refactoring into production-quality code reduced complexity and improved confidence throughout development.',
              'Professional Engineering Practices: The project emphasized requirements gathering, design, documentation, testing, and refactoring in addition to implementation.',
            ],
          },
          {
            title: 'Evaluate — Future Improvements',
            paragraphs: [
              'Potential future enhancements include:',
            ],
            list: [
              'Additional Behavioral Metrics: Key dwell time, error rate, backspace frequency, paste detection, cursor movement, mouse movement, focus duration, correction frequency, burst typing detection, hesitation analysis, session consistency, and field-level behavior.',
              'Advanced Analytics: Standard deviation, median interval, typing consistency score, and percentile analysis.',
              'Adaptive Risk Scoring: Instead of reporting only raw metrics, calculate preliminary behavioral risk scores before transmission.',
              'Cross-Session Analysis: Compare typing behavior across multiple authenticated sessions to identify significant deviations that may indicate compromised accounts.',
              'Improved Visualization and Observability: Develop internal dashboards and introduce feature flags and performance monitoring to support production deployment.',
              'Machine Learning Integration: Behavioral metrics could become one feature within a larger machine learning fraud model, where keystroke dynamics are evaluated alongside device intelligence, network signals, and historical customer behavior.',
            ],
          },
          {
            title: 'Evaluate — Future Portfolio Sections',
            paragraphs: [
              'As the internship progresses, additional sections may be added to expand the portfolio and reflect continued engineering work.',
            ],
            list: [
              'New company features',
              'Production bug fixes',
              'Architecture reviews',
              'Code reviews',
              'Performance improvements',
              'API integrations',
              'Engineering research',
              'Retrospectives',
              'Professional growth',
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
