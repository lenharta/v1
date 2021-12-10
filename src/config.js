module.exports = {
  email: 'andrew.code21@gmail.com',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/lenharta',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/andrewdlenhart',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/_lenharta',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lenharta',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
      aria: 'about',
    },
    {
      name: 'Projects',
      url: '/#projects',
      aria: 'projects',
    },
    {
      name: 'Experience',
      url: '/#experience',
      aria: 'experience',
    },
    {
      name: 'Archive',
      url: '/#archice',
      aria: 'archive',
    },
    {
      name: 'Contact',
      url: '/#contact',
      aria: 'contact',
    },
  ],

  accordionData: [
    {
      tab: 'INTRO',
      content: 'I\'m a self-taught Frontend Developer based in Greensboro, North Carolina USA. I\'m currently looking for opportunities to join a team of professionals and assist in building beautiful, accessible, human-centered digital experiences!',
    },
    {
      tab: 'WHY HIRE ME?',
      content: 'Explore my dedication and willingness to learn',
    },
    {
      tab: 'MOTIVATION',
      content: 'Why I love tech and why I like to code',
    },
    {
      tab: 'EXPERIENCE',
      content: 'Technologies that i have experience with'
    },
  ],

  // Featured Projects
  projectData: [
    {
      id: 1,
      title: 'OpenAI GPT-3 API Mock Website',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque aliquam vestibulum morbi blandit cursus risus at. Netus et malesuada fames ac. Justo nec ultrices dui sapien.',
      tech: ['React', 'Styled-Components', 'CSS 3', 'JSX', 'Node.js'],
      url: '#',
      githubLink: 'https://github.com/lenharta'
    },
    {
      id: 2,
      title: 'Two',
      content: 'Two',
      tech: ['React', 'Styled-Components', 'CSS 3', 'JSX', 'Node.js'],
      url: '#',
      githubLink: 'https://github.com/lenharta'
    },
    {
      id: 3,
      title: 'Three',
      content: 'Three',
      tech: ['React', 'Styled-Components', 'CSS 3', 'JSX', 'Node.js'],
      url: '#',
      githubLink: 'https://github.com/lenharta'
    },
    {
      id: 4,
      title: 'Four',
      content: 'Four',
      tech: ['React', 'Styled-Components', 'CSS 3', 'JSX', 'Node.js'],
      url: '#',
      githubLink: 'https://github.com/lenharta'
    },
  ],

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};