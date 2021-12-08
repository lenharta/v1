import { css } from 'styled-components';

const variables = css`

  :root {
    --font-heading: 'Roboto', sans-serif; // 300 400 500 700
    --font-text: 'Roboto Mono', monospace; // 400 500
    --font-link: 'Fira Code', monospace; // 300 400

  // Font sizes
    --fs-xs: 12px;
    --fs-sm: 16px;
    --fs-md: 22px;
    --fs-lg: 30px;

  // Colors 
    --x-dark-navy: #0e1219;
    --dark-navy: #1B1A22;
    --navy-shadow: rgba(14, 18, 25, 0.7);
    --bg-lgtnavy: rgba(22, 28, 39, 1);
    --bg-navy: #161C27;
    --bg-tint: rgba(22, 28, 39, 0.75);

    --light-orange: #E79649;
    --orange: #E38229;
    --orange-tint: rgba(227, 130, 41, 0.45);
    --dark-orange: #E36929;
    --gradient-text: linear-gradient(90deg, rgba(231, 150, 73, 1) 0%, rgba(227, 130, 41, 1) 42%, rgba(227, 105, 41, 1) 100%);

    --text: #F5F9E9;
    --text-heading: #CCD6F6;

  // Reused
    --border-radius: 4px;
    --lg-border: solid 8px #242C3D;
    --btn-border: solid 1.5px #E38229;

    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --gradient-bar: linear-gradient(103.22deg, #E38229 -13.86%, #E36929 99.55%);

  // Transitions
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition-link: ease .3s;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --s-scale: 1.025;
  }
`;

export default variables;