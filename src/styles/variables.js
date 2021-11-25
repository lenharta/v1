import { css } from 'styled-components';

const variables = css`

  :root {
    --font-roboto: 'Roboto', sans-serif;

    // Colors
    --x-dark-navy: #111620;
    --light-navy: #242C3D;
    --bg-navy: #161C27;
    --bg-tint: rgba(22, 28, 39, 0.75);
    --blue: #142037;
    --light-blue: #92B6FF;
    --orange: #E38229;
    --light-orange: #E3A062;
    --dark-orange: #E37610;
    --orange-tint: rgba(227, 130, 41, 0.2);
    --reg-text: #7A90BB;
    --bld-text: #9AB7EF;

    // Fonts
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    // Reused
    --border-radius: 6px;
    --lg-border: solid 8px #242C3D;
    --btn-border: solid 2px #E38229;
    --nav-height: 100px;

    // Animations
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    // Icons
    --lg-icon-height: 40px;
    --lg-icon-width: 40px;
    --sm-icon-height: 20px;
    --sm-icon-width: 20px;
    --sm-logo-height: 60px;
    --sm-logo-Width: 60px;
  }
`;

export default variables;