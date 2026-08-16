import { personalInfo } from './personal'

export const footer = {
  name: personalInfo.name,
  role: personalInfo.role,
  email: personalInfo.email,
  emailHref: personalInfo.emailHref,
  phone: personalInfo.phone,
  phoneHref: personalInfo.phoneHref,
  location: personalInfo.location,
  copyright: `© 2026 ${personalInfo.name}. All rights reserved.`,
  nav: {
    label: 'Navigation',
    links: [
      { label: 'Work', href: '/projects' },
      { label: 'Services', href: '/#services' },
      { label: 'About', href: '/#about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  social: {
    label: 'Social',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'X', href: '#' },
    ],
  },
}
