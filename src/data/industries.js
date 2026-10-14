import { Landmark, HeartPulse, ShoppingBag, GraduationCap, Factory, Rocket } from 'lucide-react'

// Content describes how technology CAN help each sector.
// It does not imply existing clients, certifications, or compliance guarantees.
export const industries = [
  {
    slug: 'financial-services',
    title: 'Financial Services',
    icon: Landmark,
    short:
      'Technology can help reduce manual processing, improve record keeping, and make customer interactions clearer.',
    challenges: [
      'Manual document handling and repeated data entry',
      'Fragmented customer information across systems',
      'Reporting that takes significant time to prepare',
    ],
    solutions: [
      'Workflow tools for requests and approvals',
      'Customer information platforms with role-based access',
      'Automated reporting pipelines',
    ],
    examples: ['Customer onboarding workflows', 'Internal approval tracking', 'Management reporting dashboards'],
    benefits: ['Less repetitive work', 'Clearer audit trails', 'Faster access to information'],
    note: 'Financial organizations operate under strict regulations. Compliance requirements must be reviewed with qualified advisors for each project.',
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    icon: HeartPulse,
    short:
      'Technology can support scheduling, coordination, and information access for care providers and administrators.',
    challenges: [
      'Appointment and resource scheduling complexity',
      'Information shared across several teams or locations',
      'Administrative workload that reduces time for patients',
    ],
    solutions: [
      'Scheduling and reminder applications',
      'Secure internal portals for staff coordination',
      'Process automation for administrative tasks',
    ],
    examples: ['Appointment booking tools', 'Inventory tracking for supplies', 'Staff coordination dashboards'],
    benefits: ['Smoother coordination', 'Reduced administrative effort', 'More consistent information'],
    note: 'Health data is sensitive and regulated. Privacy and compliance obligations must be assessed with qualified advisors before any project involving patient information.',
  },
  {
    slug: 'retail-and-e-commerce',
    title: 'Retail and E-commerce',
    icon: ShoppingBag,
    short:
      'Technology can connect storefronts, inventory, and customer communication into a smoother buying experience.',
    challenges: [
      'Inventory that is out of sync between channels',
      'Order handling that depends on manual steps',
      'Limited insight into customer behavior and demand',
    ],
    solutions: [
      'Order and inventory management applications',
      'Integrations between storefronts and back-office tools',
      'Reporting on sales and product performance',
    ],
    examples: ['Custom order tracking', 'Inventory synchronization', 'Customer feedback collection tools'],
    benefits: ['Fewer order errors', 'Better stock visibility', 'More informed merchandising decisions'],
  },
  {
    slug: 'education-and-edtech',
    title: 'Education and EdTech',
    icon: GraduationCap,
    short:
      'Technology can make learning content, administration, and communication easier to manage and access.',
    challenges: [
      'Administrative tasks such as enrollment and scheduling',
      'Delivering learning content in flexible formats',
      'Tracking progress across learners and courses',
    ],
    solutions: [
      'Learning management and content delivery platforms',
      'Student and course administration tools',
      'Progress and feedback dashboards',
    ],
    examples: ['Course registration portals', 'Assessment and feedback tools', 'Learner progress dashboards'],
    benefits: ['Less administrative overhead', 'Wider access to learning', 'Clearer view of learner progress'],
  },
  {
    slug: 'manufacturing-and-logistics',
    title: 'Manufacturing and Logistics',
    icon: Factory,
    short:
      'Technology can improve visibility across production, inventory, and delivery operations.',
    challenges: [
      'Limited real-time visibility of stock and shipments',
      'Paper-based or spreadsheet-based tracking',
      'Coordination between planning, warehouse, and delivery teams',
    ],
    solutions: [
      'Inventory and shipment tracking systems',
      'Workflow tools for maintenance and quality checks',
      'Dashboards that combine operational data',
    ],
    examples: ['Warehouse stock tracking', 'Delivery status portals', 'Maintenance request workflows'],
    benefits: ['Improved visibility', 'Fewer manual errors', 'Quicker response to operational issues'],
  },
  {
    slug: 'startups-and-growing-businesses',
    title: 'Startups and Growing Businesses',
    icon: Rocket,
    short:
      'Technology can help young companies launch products quickly while keeping a foundation that can scale.',
    challenges: [
      'Limited engineering capacity and tight budgets',
      'Choosing technology that will not need replacing too soon',
      'Balancing speed of delivery with long-term quality',
    ],
    solutions: [
      'Minimum viable product development',
      'Technology stack guidance',
      'Cloud setups that grow with usage',
    ],
    examples: ['First version of a web product', 'Internal tools for a growing team', 'Technical planning for fundraising or launch'],
    benefits: ['Faster path to a first release', 'Sensible technical foundations', 'Room to evolve as the business grows'],
  },
]
