import { createGlobalStyle } from "styled-components";
import variables from "./variables";
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
  ${variables};
  ${TransitionStyles};
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg-navy);
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-family: var(--font-link);
    font-weight: 400;
  }

  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

// Scroll Bar
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange);
  }
  body::-webkit-scrollbar {
    width: 11px;
  }
  body::-webkit-scrollbar-track {
    background: var(--x-dark-navy);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--orange);
    opacity: 0.5;
    border: 3px solid var(--x-dark-navy);
    border-radius: 10px;
  }

  .resume__button {
    button {
      cursor: pointer;
      margin: 0;
      padding: 12px 24px;
      border-radius: var(--border-radius);
      border: var(--btn-border);
      background: none;
      color: var(--orange);
      font-family: var(--font-link);
      a {
        color: var(--orange);
      }

      &:hover {
        background-color: var(--orange-tint);
        transition: var(--transiton);
        transform: scale(var(--s-scale));
        a {
          color: var(--orange);
        }
      }
    }
  } 
  
// Headings
  .big__heading {
    color: var(--text-heading);
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
    font-family: var(--font-heading);
    font-weight: 700;
  }

  .medium__heading {
    color: var(--text);
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
    font-family: var(--font-heading);
    font-weight: 700;
  }

// Gradient Text
  .gradient__text {
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

// BG Gradient
  // https://angrytools.com/gradient/
  .bg__gradient {
    // ff 3.6+
    background:-moz-radial-gradient(circle at 30% 30%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // safari 5.1+,chrome 10+
    background:-webkit-radial-gradient(circle at 30% 30%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // opera 11.10+
    background:-o-radial-gradient(circle at 30% 30%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // ie 10+
    background:-ms-radial-gradient(circle at 30% 30%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);

    // global 92%+ browsers support
    background:radial-gradient(circle at 30% 30%, rgba(22, 28, 39, 1) 0%, rgba(14, 18, 25, 1) 100%);
  }

// Box Shadows
  .nav__shadow {
    box-shadow: 0 10px 30px -10px var(--x-dark-navy);
  }
`

export default GlobalStyle;