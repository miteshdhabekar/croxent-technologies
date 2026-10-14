import { Search, ClipboardCheck, Network, CalendarRange, Hammer, Rocket, RefreshCw } from 'lucide-react'

// Four-step summary used on the homepage.
export const approachSteps = [
  { n: '01', title: 'Discover', text: 'Understand business objectives, user needs, and technical requirements.' },
  { n: '02', title: 'Plan', text: 'Define the scope, architecture, priorities, and implementation roadmap.' },
  { n: '03', title: 'Build', text: 'Develop, test, and refine the solution through an iterative engineering process.' },
  { n: '04', title: 'Improve', text: 'Support deployment, gather feedback, and identify opportunities for improvement.' },
]

// Detailed phases used on the Solutions / Our Approach page.
export const phases = [
  {
    icon: Search,
    title: 'Requirement Discovery',
    text: 'We talk with stakeholders to understand goals, users, constraints, and what success looks like. The outcome is a shared, written understanding of the problem.',
  },
  {
    icon: ClipboardCheck,
    title: 'Technical Assessment',
    text: 'We review existing systems, data, and integrations to identify risks, dependencies, and opportunities before making design decisions.',
  },
  {
    icon: Network,
    title: 'Solution Architecture',
    text: 'We propose a structure for the solution, including components, data flow, and technology choices, and explain the trade-offs in plain language.',
  },
  {
    icon: CalendarRange,
    title: 'Project Planning',
    text: 'We break the work into prioritized milestones, agree on scope and responsibilities, and set up a way to track progress together.',
  },
  {
    icon: Hammer,
    title: 'Development and Testing',
    text: 'We build in short iterations, review work with you regularly, and test as we go so that issues are found early rather than late.',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    text: 'We prepare environments, release the solution in a controlled way, and support your team through the transition.',
  },
  {
    icon: RefreshCw,
    title: 'Support and Improvement',
    text: 'After release we gather feedback, address issues, and plan improvements so the solution keeps pace with your needs.',
  },
]

export const engagementModels = [
  {
    title: 'Fixed-Scope Projects',
    text: 'Suited to well-defined work with clear deliverables. Scope, timeline, and cost are agreed before development starts.',
  },
  {
    title: 'Time-Based Development',
    text: 'Suited to evolving needs. You work with our engineers over an agreed period and adjust priorities as you learn.',
  },
  {
    title: 'Ongoing Application Support',
    text: 'Suited to live applications that need regular care, fixes, and small improvements under agreed support terms.',
  },
  {
    title: 'Technical Consulting',
    text: 'Suited to decisions and planning. We provide assessments, recommendations, and roadmaps without committing you to a build.',
  },
]
