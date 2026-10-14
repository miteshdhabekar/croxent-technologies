// Central company configuration.
// Replace every PLACEHOLDER value below with verified details before launch.
// Components read from here, so no other file needs editing.

export const company = {
  name: 'Croxent Technologies',
  tagline: 'Engineering Digital Excellence.',
  supportingStatement: 'We turn complex business challenges into practical digital solutions.',
  description:
    'Croxent Technologies is an emerging IT services company helping businesses build reliable software and modernize digital operations.',

  // Canonical site URL placeholder. Set VITE_SITE_URL in .env for production.
  siteUrl: import.meta.env.VITE_SITE_URL || 'croxenttechnologies.vercel.app',

  contact: {
    email: 'support.croxenttechnologies@gmail.com',
    // phone: '+91 8446168909',
    address: 'Pune, Maharashtra 411044',
    // Set to a real address to enable mailto links; leave empty to hide them.
    emailHref: '',
    phoneHref: '',
  },

  social: {
    // Set a real URL to show the link; leave empty to render a labelled placeholder.
    linkedin: 'https://www.linkedin.com/company/croxent-technologies',
  },

  // Backend integration. Set VITE_API_BASE_URL (e.g. your Spring Boot API) in .env.
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '',
    contactEndpoint: '/api/contact',
    talentEndpoint: '/api/talent',
  },
}

export const isPlaceholder = (value) => !value || String(value).startsWith('PLACEHOLDER')
