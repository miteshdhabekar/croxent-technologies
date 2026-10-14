import useSeo from '../hooks/useSeo'
import LegalPage from '../components/common/LegalPage'
import { company } from '../config/company'

const sections = [
  {
    title: 'Use of this website',
    paragraphs: [
      `By using this website you agree to these terms. The site is provided by ${company.name} for general information about our services.`,
    ],
  },
  {
    title: 'No offer or guarantee',
    paragraphs: [
      'Content on this website is for information only. It is not a contract, a quote, or a guarantee of any result. Project scope, timelines, and pricing are agreed separately in writing.',
    ],
  },
  {
    title: 'Sample and illustrative content',
    paragraphs: [
      'Some pages, including sample articles and illustrative solution concepts, are examples only. They do not describe real clients or completed engagements.',
    ],
  },
  {
    title: 'Intellectual property',
    paragraphs: [
      `The text, design, and branding of this website belong to ${company.name} unless stated otherwise. Please do not copy or reuse them without permission.`,
    ],
  },
  {
    title: 'Acceptable use',
    items: [
      'Do not attempt to disrupt or gain unauthorized access to the website.',
      'Do not submit false, misleading, or unlawful content through our forms.',
    ],
  },
  {
    title: 'Limitation of liability',
    paragraphs: [
      'To the extent permitted by law, we are not liable for losses arising from use of, or inability to use, this website. We aim to keep information accurate but do not warrant that it is complete or current.',
    ],
  },
  {
    title: 'Changes',
    paragraphs: ['We may update these terms from time to time. Continued use of the website means you accept the updated terms.'],
  },
]

export default function Terms() {
  useSeo({
    title: 'Terms and Conditions',
    description: `Terms and conditions for using the ${company.name} website.`,
  })
  return (
    <LegalPage
      title="Terms and Conditions"
      intro={`These terms govern your use of the ${company.name} website.`}
      sections={sections}
    />
  )
}
