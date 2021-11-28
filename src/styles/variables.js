import { css } from 'styled-components';

const variables = css`

  :root {
    --font-heading: 'Roboto', sans-serif; // 300 400 500 700
    --font-text: 'Roboto Mono', monospace; // 400 500
    --font-link: 'Fira Code', monospace; // 300 400

    // Colors
    --x-dark-navy: #0e1219;
    --dark-navy: #1B1A22;
    --navy-shadow: rgba(14, 18, 25, 0.7);
    --light-navy: #242C3D;
    --bg-navy: #161C27;
    --bg-tint: rgba(22, 28, 39, 0.75);

    --light-orange: #E79649;
    --orange: #E38229;
    --orange-tint: rgba(227, 130, 41, 0.2);
    --dark-orange: #E36929;
    --gradient-text: linear-gradient(89.97deg, #E38229 1.84%, #E36929 102.67%);

    --text: #7A90BB;
    --text-heading: #9AB7EF;

    // Reused
    --border-radius: 4px;
    --lg-border: solid 8px #242C3D;
    --btn-border: solid 1px #E38229;

    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --gradient-bar: linear-gradient(103.22deg, #E38229 -13.86%, #E36929 99.55%);

    // Transitions
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition-link: ease .3s;
    --s-scale: 1.025;
  }
`;

export default variables;