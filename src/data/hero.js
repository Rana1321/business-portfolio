import { personalInfo } from './personal'

export const hero = {
  monogram: personalInfo.initials,
  availability: personalInfo.availability,
  name: personalInfo.name,
  role: personalInfo.role,
  headline: {
    before: 'I build',
    accent: 'digital experiences',
    after: 'that make ideas real',
  },
  description: `I’m ${personalInfo.name}, a web developer focused on building modern, responsive, and purposeful digital experiences. I enjoy turning ideas into clean, functional web products that people can actually use.`,
  primary: { label: 'View My Work', href: '/projects' },
  secondary: { label: "Let's Work Together", href: '/contact' },
  tech: ['React', 'JavaScript', 'Tailwind CSS'],
  focus: [
    { label: 'Performance', note: 'Fast, measurable products' },
    { label: 'Usability', note: 'Clear, human interfaces' },
    { label: 'Business impact', note: 'Outcomes, not features' },
  ],
}
