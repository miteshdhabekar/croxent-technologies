// SAMPLE ARTICLES - local placeholder content until a CMS or backend is connected.
// `date` is intentionally null: only set it (ISO string, e.g. '2026-11-02') when an
// article is genuinely published. Set `isSample: false` once content is reviewed.
export const articles = [
  {
    slug: 'choose-the-right-technology-stack-for-a-startup',
    title: 'How to Choose the Right Technology Stack for a Startup',
    excerpt:
      'A practical way to weigh team skills, hiring, cost, and future needs before committing to a technology stack.',
    category: 'Engineering',
    date: null,
    readingTime: 5,
    isSample: true,
    body: [
      { type: 'p', text: 'Choosing a technology stack is one of the earliest decisions a startup makes, and it can feel more permanent than it really is. The goal is not to find a perfect stack. It is to find one that lets your team deliver value now without creating avoidable problems later.' },
      { type: 'h', text: 'Start with the problem, not the tool' },
      { type: 'p', text: 'Write down what the product must do in its first version. A content-heavy website, a data-intensive platform, and a mobile-first service all have different needs. Technology choices should follow from these needs rather than from trends.' },
      { type: 'h', text: 'Consider the skills you already have' },
      { type: 'p', text: 'A familiar technology often beats a theoretically better one. A team that knows its tools well ships faster and makes fewer mistakes. Also consider how easy it will be to hire people who know the stack.' },
      { type: 'h', text: 'Look at maturity and community' },
      { type: 'ul', items: ['Is the technology actively maintained?', 'Are there good documentation and learning resources?', 'Is there a healthy community to turn to for help?'] },
      { type: 'h', text: 'Plan for change, not perfection' },
      { type: 'p', text: 'Keep components loosely connected so parts of the system can be replaced later. Clear boundaries between the interface, business logic, and data storage make future changes less costly.' },
    ],
  },
  {
    slug: 'why-businesses-invest-in-custom-software',
    title: 'Why Businesses Invest in Custom Software',
    excerpt:
      'When off-the-shelf tools stop fitting, custom software can model your processes more closely. Here is how to decide.',
    category: 'Business',
    date: null,
    readingTime: 4,
    isSample: true,
    body: [
      { type: 'p', text: 'Ready-made software is often the right first choice. It is quick to adopt and usually cheaper at the start. Over time, however, some businesses find that their workflows no longer match what the product offers.' },
      { type: 'h', text: 'Signs that custom software may help' },
      { type: 'ul', items: ['Teams rely on workarounds, spreadsheets, or duplicate data entry.', 'Important processes are unique to your business.', 'You need to connect several systems that do not integrate well.', 'Licensing costs grow as your team grows.'] },
      { type: 'h', text: 'What to weigh before deciding' },
      { type: 'p', text: 'Custom software requires an upfront investment and ongoing maintenance. Compare that against the time lost to manual work and the limits of existing tools. A small first release focused on the most painful process is often a sensible starting point.' },
      { type: 'h', text: 'Keep scope realistic' },
      { type: 'p', text: 'Successful projects usually begin with a clearly defined problem, a small set of priorities, and regular reviews so the product can adapt as you learn.' },
    ],
  },
  {
    slug: 'understanding-cloud-computing-for-growing-businesses',
    title: 'Understanding Cloud Computing for Growing Businesses',
    excerpt:
      'A plain-language overview of what cloud computing is, what it can offer, and what to consider before moving.',
    category: 'Cloud',
    date: null,
    readingTime: 6,
    isSample: true,
    body: [
      { type: 'p', text: 'Cloud computing means using computing resources such as servers, storage, and databases over the internet instead of owning and maintaining all of them yourself. Providers offer these resources on demand, usually billed by usage.' },
      { type: 'h', text: 'Potential benefits' },
      { type: 'ul', items: ['Resources can be adjusted as demand changes.', 'Less time spent maintaining physical hardware.', 'Built-in options for backup and availability.', 'Faster setup of new environments for testing and development.'] },
      { type: 'h', text: 'Things to consider' },
      { type: 'p', text: 'Costs can grow if usage is not monitored. Security remains a shared responsibility between you and the provider. Moving existing applications may require changes to how they are built and deployed.' },
      { type: 'h', text: 'A gradual path' },
      { type: 'p', text: 'Many businesses start by moving one application or environment, learn from the experience, and then continue in stages. This keeps risk manageable and builds internal confidence.' },
    ],
  },
  {
    slug: 'practical-ways-to-automate-business-workflows',
    title: 'Practical Ways to Automate Business Workflows',
    excerpt:
      'Where to look for repetitive work, how to start small, and how to keep people involved in important decisions.',
    category: 'Automation',
    date: null,
    readingTime: 5,
    isSample: true,
    body: [
      { type: 'p', text: 'Many teams spend hours each week on tasks that follow the same steps every time. These are good candidates for automation because the rules are clear and the benefit is easy to see.' },
      { type: 'h', text: 'Where to look' },
      { type: 'ul', items: ['Copying data between systems', 'Sending routine reminders and notifications', 'Routing requests for approval', 'Generating regular reports'] },
      { type: 'h', text: 'Start with one process' },
      { type: 'p', text: 'Map the current steps, identify the slowest or most error-prone parts, and automate only those first. A small, successful change builds trust and teaches you what works in your environment.' },
      { type: 'h', text: 'Keep people in the loop' },
      { type: 'p', text: 'Automation should handle routine work while people handle exceptions and judgment calls. Build in simple ways to review results and correct mistakes.' },
    ],
  },
  {
    slug: 'building-secure-and-maintainable-web-applications',
    title: 'Building Secure and Maintainable Web Applications',
    excerpt:
      'Core habits that help web applications stay secure and easy to change as the business evolves.',
    category: 'Engineering',
    date: null,
    readingTime: 6,
    isSample: true,
    body: [
      { type: 'p', text: 'Security and maintainability are easiest to achieve when they are part of everyday development rather than added at the end. Small, consistent habits make a large difference over time.' },
      { type: 'h', text: 'Habits that support security' },
      { type: 'ul', items: ['Validate and sanitize all input.', 'Use well-tested libraries for authentication.', 'Give users only the access they need.', 'Keep dependencies updated.', 'Never store secrets in front-end code.'] },
      { type: 'h', text: 'Habits that support maintainability' },
      { type: 'ul', items: ['Keep components small and focused.', 'Write automated tests for important behavior.', 'Use consistent naming and structure.', 'Document decisions that are not obvious from the code.'] },
      { type: 'h', text: 'Review regularly' },
      { type: 'p', text: 'Code reviews and periodic dependency checks catch issues early and spread knowledge across the team, reducing reliance on any single person.' },
    ],
  },
]

export const getArticleBySlug = (slug) => articles.find((a) => a.slug === slug)
export const articleCategories = ['All', ...new Set(articles.map((a) => a.category))]
