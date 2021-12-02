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