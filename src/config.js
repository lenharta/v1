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
      name: 'Stack',
      url: '/#stack',
      aria: 'Stack',
    },
    {
      name: 'Projects',
      url: '/#projects',
      aria: 'projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
      aria: 'contact',
    },
  ],

  accordionData: [
    {
      tab: 'Intro',
      content: 'I\'m a self-taught Frontend Developer based in Greensboro, NC USA. I\'m currently looking for opportunities to join a team of professionals and assist in building beautiful, accessible, human-centered digital experiences!',
    },
    {
      tab: 'Why Hire Me?',
      content: 'My dedication and excitement to learn something new everyday is paramount. Software development is extremely fascinating to me. It\'s an amazing artform of combining left brain logic with right brain creativity to create beautiful and functional digital experiences. I\'m truely looking to make software development my lifelong career.',
    },
    {
      tab: 'Motivation',
      content: 'I have always loved technology from the consumer side. It was always a dream that one day I could learn how the websites and apps I used were built and designed. I took the initiative to learn, develop, and use my skills in software development. I haven\'t looked back since. With some in my family impaired by low-vision, I\'m dedicated to making the web more accessible to everyone.',
    },
    {
      tab: 'Experience',
      content: 'Most of my experience is with Javascript and the ReactJS framework. I\'m proficient in HTML5, JSX, JavaScript, React.JS, JSON, Axios(REST API\'s) as well as style languages CSS3 and SASS, though I prefer Styled-Components while using React. I also have some experience with Redux using Google Firebase.'
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