import { personalInfo } from './personal'

export const navbar = {
  monogram: personalInfo.initials,
  name: personalInfo.name,
  links: [
    { label: 'Work', href: '/projects' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: { label: 'Start a Project', href: '/contact' },
}
