import { personalInfo } from './personal'

export const about = {
  eyebrow: 'About Me',
  statement: {
    before: `I’m ${personalInfo.name} — an ${personalInfo.age}-year-old web developer who enjoys turning ideas into`,
    accent: 'modern digital experiences',
    after: '.',
  },
  name: personalInfo.name,
  role: personalInfo.role,
  monogram: personalInfo.initials,
  location: personalInfo.location,
  availability: personalInfo.availability,
  focus: 'Web · Product · UI',
  intro:
    "I’m focused on building clean, responsive, and user-friendly websites and web applications. I enjoy learning new technologies, solving development problems, and continuously improving the way I build digital products.",
  whoIAm: {
    index: '01',
    title: 'Who I Am',
    heading: 'A young developer, always building.',
    paragraphs: [
      "I’m a young web developer with a strong interest in modern web technologies, product development, and creating digital experiences that feel simple and intuitive.",
    ],
  },
  whatIDo: {
    index: '02',
    title: 'What I Do',
    note: 'The work I focus on every day — from first sketch to production.',
    items: [
      {
        title: 'Web Development',
        description: 'Building responsive and modern websites and web applications.',
      },
      {
        title: 'Frontend Development',
        description: 'Creating polished interfaces with modern frontend technologies.',
      },
      {
        title: 'Web Applications',
        description: 'Developing functional web products around real user needs.',
      },
      {
        title: 'UI Implementation',
        description: 'Turning design concepts into responsive, interactive interfaces.',
      },
    ],
  },
  experience: {
    index: '03',
    title: 'Experience',
    note: 'A snapshot of the experience behind the products.',
    items: [
      {
        title: 'Web Development',
        note: 'Building responsive websites and web applications',
      },
      {
        title: 'Frontend Development',
        note: 'Creating clean, modern user interfaces',
      },
      {
        title: 'Digital Product Building',
        note: 'From idea → interface → build → launch',
      },
    ],
  },
  philosophy: {
    index: '04',
    title: 'How I Think',
    items: [
      {
        title: 'Keep learning.',
        description:
          'Technology changes quickly, so I believe continuous learning is part of becoming a better developer.',
      },
      {
        title: "Build, don't just study.",
        description:
          'The best way to understand technology is to use it to solve real problems.',
      },
      {
        title: 'Keep it simple.',
        description: 'Good interfaces should feel clear, useful, and easy to understand.',
      },
      {
        title: 'Improve every project.',
        description:
          'Every project is an opportunity to learn something new and build better next time.',
      },
    ],
  },
  visual: {
    label: 'Digital Product Builder',
    line: 'Create → Build → Improve',
    meta: 'Web Development · Product · UI',
  },
}
