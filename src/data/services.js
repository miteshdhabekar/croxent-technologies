import {
  Code2,
  AppWindow,
  Cloud,
  Bot,
  Compass,
  LifeBuoy,
} from 'lucide-react'

export const services = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    icon: Code2,
    short:
      'Design and develop software applications tailored to specific business requirements, workflows, and operational goals.',
    overview:
      'Off-the-shelf tools do not always fit the way a business really works. Custom software lets you model your own processes, connect your own data, and grow without being limited by someone else’s product roadmap. We work with you to define what the software needs to do, then build it in a structured, maintainable way.',
    challenges: [
      'Manual processes spread across spreadsheets, email, and disconnected tools.',
      'Existing software that does not match how teams actually work.',
      'Difficulty connecting internal systems and sharing data between departments.',
      'Uncertainty about what to build first and how to keep scope under control.',
    ],
    capabilities: [
      'Requirement analysis and solution design',
      'Backend services and APIs',
      'Business rules, workflows, and reporting',
      'Integration with existing systems and third-party services',
      'Automated testing and code reviews',
      'Documentation and knowledge handover',
    ],
    useCases: [
      'Internal operations tools for tracking orders, tasks, or approvals',
      'Customer management and service request platforms',
      'Reporting tools that bring data from several sources together',
    ],
    approach:
      'We start with a short discovery phase to agree on goals and priorities, then deliver in small, reviewable increments so you can see progress and adjust direction early.',
    technologies: ['Java', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MySQL', 'Git'],
    faqs: [
      {
        q: 'How do you decide what to build first?',
        a: 'We work with you to rank features by business value and effort, then plan an initial release that solves the most important problem first.',
      },
      {
        q: 'Will we own the source code?',
        a: 'Ownership and licensing terms are agreed in the project contract. We can discuss your requirements during the first conversation.',
      },
      {
        q: 'Can you extend software that already exists?',
        a: 'Yes, subject to a technical assessment of the existing codebase to understand its structure and quality.',
      },
    ],
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    icon: AppWindow,
    short:
      'Build responsive, secure, and maintainable web applications that deliver useful digital experiences.',
    overview:
      'A good web application is easy to use, works across devices, and is built so that future changes do not become expensive. We combine thoughtful interface design with sound engineering to create applications that people can rely on every day.',
    challenges: [
      'Legacy web tools that are slow, hard to use, or do not work on mobile devices.',
      'Customer or partner journeys that depend on phone calls and paperwork.',
      'Applications that are difficult to change because of tangled code.',
      'Unclear security practices around user data and access.',
    ],
    capabilities: [
      'Responsive front-end development',
      'User interface and experience design',
      'Secure authentication and role-based access',
      'REST API design and integration',
      'Performance and accessibility improvements',
      'Progressive delivery with feedback cycles',
    ],
    useCases: [
      'Customer portals for requests, documents, and status tracking',
      'Booking, ordering, and registration applications',
      'Role-based dashboards for internal teams',
    ],
    approach:
      'We design key screens early, validate them with you, and then build the application in iterations, testing each release on common devices and browsers.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Spring Boot', 'MongoDB'],
    faqs: [
      {
        q: 'Will the application work on phones and tablets?',
        a: 'Yes. Responsive design is part of our standard approach, and layouts are tested across common screen sizes.',
      },
      {
        q: 'How do you approach security?',
        a: 'We apply widely accepted practices such as input validation, secure authentication, and least-privilege access. Security requirements are reviewed with you during planning.',
      },
      {
        q: 'Can you redesign an existing web application?',
        a: 'Yes. We can review the current application and recommend whether to improve it in stages or rebuild parts of it.',
      },
    ],
  },
  {
    slug: 'cloud-services-and-devops',
    title: 'Cloud Services and DevOps',
    icon: Cloud,
    short:
      'Help businesses adopt cloud technologies, streamline deployments, improve infrastructure management, and support operational reliability.',
    overview:
      'Cloud platforms and modern delivery practices can reduce manual effort and make releases more predictable. We help you choose a sensible starting point, set up repeatable deployments, and build habits that keep systems stable as they grow.',
    challenges: [
      'Manual deployments that take time and introduce mistakes.',
      'Infrastructure that is hard to reproduce or document.',
      'Uncertainty about which cloud services fit the business and budget.',
      'Limited visibility when applications fail or slow down.',
    ],
    capabilities: [
      'Cloud adoption planning',
      'Containerization of applications',
      'Continuous integration and delivery pipelines',
      'Environment setup for development, testing, and production',
      'Monitoring and logging basics',
      'Cost-awareness and right-sizing guidance',
    ],
    useCases: [
      'Moving an application from a single server to a managed cloud setup',
      'Automating build, test, and release steps',
      'Standardizing environments with containers',
    ],
    approach:
      'We begin by reviewing how software is built and released today, then introduce improvements one step at a time so the team can adopt them comfortably.',
    technologies: ['AWS', 'Docker', 'Git', 'CI/CD'],
    faqs: [
      {
        q: 'Do we need to move everything to the cloud?',
        a: 'Not necessarily. We help you evaluate what makes sense to move, what to keep, and in what order.',
      },
      {
        q: 'Do you work with cloud providers other than AWS?',
        a: 'Our listed focus is AWS. Other platforms can be discussed based on your needs and our capacity at the time.',
      },
      {
        q: 'What is CI/CD?',
        a: 'It is a set of practices that automatically builds, tests, and delivers software changes so releases are faster and more consistent.',
      },
    ],
  },
  {
    slug: 'ai-and-intelligent-automation',
    title: 'AI and Intelligent Automation',
    icon: Bot,
    short:
      'Explore practical applications of artificial intelligence, workflow automation, and data-driven solutions to reduce repetitive work.',
    overview:
      'Automation and AI are most valuable when they are applied to a specific, well-understood problem. We help you identify repetitive tasks, assess whether automation or AI is a good fit, and integrate suitable tools into your existing systems.',
    challenges: [
      'Staff spending time on repetitive data entry, copying, and follow-ups.',
      'Information locked in documents and emails that is hard to search or reuse.',
      'Uncertainty about where AI is genuinely useful and where it is not.',
      'Concerns about accuracy, privacy, and human oversight.',
    ],
    capabilities: [
      'Workflow and process automation',
      'API and system integrations',
      'Integration of third-party AI services',
      'Document and data processing workflows',
      'Prototype and pilot development',
      'Guidance on human review and responsible use',
    ],
    useCases: [
      'Automated routing and notifications for approvals and requests',
      'Assistants that help teams search internal knowledge',
      'Data cleanup and report generation workflows',
    ],
    approach:
      'We start small with a pilot on one process, measure whether it helps, and keep people in the loop where accuracy matters before expanding further.',
    technologies: ['AI integrations', 'Workflow automation', 'API integrations', 'Node.js', 'PostgreSQL'],
    faqs: [
      {
        q: 'Can AI replace our staff?',
        a: 'Our focus is on reducing repetitive work and supporting people, not replacing them. Human review remains important for many decisions.',
      },
      {
        q: 'Is our data safe when using AI services?',
        a: 'Data handling depends on the tools selected. We discuss privacy requirements up front and choose approaches that match them.',
      },
      {
        q: 'Do we need a lot of data to start?',
        a: 'Not always. Many useful automations rely on clear rules and integrations rather than large datasets.',
      },
    ],
  },
  {
    slug: 'it-consulting-and-digital-transformation',
    title: 'IT Consulting and Digital Transformation',
    icon: Compass,
    short:
      'Help businesses evaluate technology choices, improve existing systems, and plan their digital transformation initiatives.',
    overview:
      'Technology decisions can be hard to evaluate without a clear view of the options. Our consulting work helps you understand your current systems, compare approaches, and build a practical roadmap that matches your goals and resources.',
    challenges: [
      'Too many technology options and no clear way to compare them.',
      'Older systems that limit growth but are risky to replace.',
      'Digital initiatives without clear priorities or ownership.',
      'Difficulty explaining technical trade-offs to business stakeholders.',
    ],
    capabilities: [
      'Current-state technology review',
      'Technology stack and vendor evaluation',
      'Architecture recommendations',
      'Roadmap and priority planning',
      'Modernization strategy for older systems',
      'Stakeholder workshops and documentation',
    ],
    useCases: [
      'Choosing a technology stack for a new product',
      'Planning a phased move away from legacy tools',
      'Preparing a technical brief for budgeting and approvals',
    ],
    approach:
      'We gather context through conversations and reviews, present options with their trade-offs in plain language, and agree on a roadmap you can act on.',
    technologies: ['Architecture review', 'Cloud platforms', 'Java', 'React', 'Databases'],
    faqs: [
      {
        q: 'What do we receive at the end of a consulting engagement?',
        a: 'Typically a written assessment, recommended options, and a prioritized roadmap. Exact deliverables are agreed at the start.',
      },
      {
        q: 'Do you recommend only our current technologies?',
        a: 'We recommend what best fits your situation. If a different skill set is needed, we will say so openly.',
      },
      {
        q: 'Can consulting lead into implementation?',
        a: 'It can, if you choose. The roadmap is yours and can be used with any delivery partner.',
      },
    ],
  },
  {
    slug: 'application-support-and-maintenance',
    title: 'Application Support and Maintenance',
    icon: LifeBuoy,
    short:
      'Support application reliability through troubleshooting, maintenance, performance improvements, and ongoing technical assistance.',
    overview:
      'Software needs regular care after launch. Dependencies age, usage changes, and small issues can grow if left unattended. Ongoing support gives you a dependable point of contact for fixes, updates, and steady improvement.',
    challenges: [
      'Applications with no one clearly responsible for fixing issues.',
      'Outdated libraries and unpatched components.',
      'Gradual performance decline as data and users grow.',
      'Knowledge held by one person who may no longer be available.',
    ],
    capabilities: [
      'Issue investigation and bug fixing',
      'Routine updates and dependency maintenance',
      'Performance review and tuning',
      'Minor enhancements and change requests',
      'Backup and recovery guidance',
      'Documentation of how the system works',
    ],
    useCases: [
      'Taking over support of an existing business application',
      'Monthly maintenance and improvement cycles',
      'Investigating recurring errors or slow pages',
    ],
    approach:
      'We begin with a review of the application and its environment, agree how issues are reported and prioritized, and then provide support in line with the terms we agree together.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'PostgreSQL', 'Git'],
    faqs: [
      {
        q: 'What response times do you offer?',
        a: 'Support terms and response expectations depend on the engagement and are agreed in writing before work begins.',
      },
      {
        q: 'Can you support software you did not build?',
        a: 'Often yes, after an initial review to understand the code and environment.',
      },
      {
        q: 'How are changes requested?',
        a: 'Through an agreed channel, with each request reviewed, prioritized, and confirmed before work starts.',
      },
    ],
  },
]

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug)
