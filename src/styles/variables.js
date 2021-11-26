import { css } from 'styled-components';

const variables = css`

  :root {
    --font-heading: 'Roboto', sans-serif; // 300 400 500 700
    --font-text: 'Roboto Mono', monospace; // 400 500
    --font-link: 'Fira Code', monospace; // 300 400

    // Colors
    --light-navy: #242C3D;
    --bg-navy: #161C27;
    --bg-tint: rgba(22, 28, 39, 0.75);

    --orange: #E38229;
    --orange-tint: rgba(227, 130, 41, 0.2);

    --text: #7A90BB;
    --text-heading: #9AB7EF;

    // Reused
    --border-radius: 4px;
    --lg-border: solid 8px #242C3D;
    --btn-border: solid 1px #E38229;
    --nav-height: 100px;

    // Transitions
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition-link: ease .3s;

    // Icons
    --lg-icon-height: 40px;
    --lg-icon-width: 40px;
    --sm-icon-height: 20px;
    --sm-icon-width: 20px;
  }
`;

export default variables;