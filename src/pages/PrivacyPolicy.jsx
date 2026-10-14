import useSeo from '../hooks/useSeo'
import LegalPage from '../components/common/LegalPage'
import { company } from '../config/company'

const sections = [
  {
    title: 'Information we collect',
    paragraphs: ['We collect only the information you choose to give us through our website forms.'],
    items: [
      'Contact form: name, work email, company name, service of interest, optional budget range, and your message.',
      'Careers form: name, email, area of interest, optional profile link, and your message.',
    ],
  },
  {
    title: 'How we use information',
    items: [
      'To respond to your enquiry or application.',
      'To understand your business needs and prepare relevant next steps.',
      'To keep reasonable records of our communications.',
    ],
  },
  {
    title: 'Cookies and analytics',
    paragraphs: [
      'This website does not currently set advertising cookies. If analytics or other tools are added in the future, this policy will be updated to describe them.',
    ],
  },
  {
    title: 'Sharing of information',
    paragraphs: [
      'We do not sell personal information. We may share it with service providers who help us operate our website and communications, or where required by law.',
    ],
  },
  {
    title: 'Data retention and security',
    paragraphs: [
      'We keep information only as long as needed for the purposes above and apply reasonable safeguards. No method of transmission or storage is completely secure.',
    ],
  },
  {
    title: 'Your choices',
    paragraphs: [
      'You may ask to access, correct, or delete the personal information you have shared with us, subject to applicable law.',
    ],
  },
  {
    title: 'Contact',
    paragraphs: [
      `For privacy questions, please use the contact page on this website. Official contact details for ${company.name} will be listed there once available.`,
    ],
  },
]

export default function PrivacyPolicy() {
  useSeo({
    title: 'Privacy Policy',
    description: `How ${company.name} collects, uses, and protects information submitted through this website.`,
  })
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This policy explains how ${company.name} handles information submitted through this website.`}
      sections={sections}
    />
  )
}
