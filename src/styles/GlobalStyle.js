import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background: var(--bg-navy);
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: var(--orange);
    font-family: var(--font-link);
    font-weight: 400;

    &:hover {
      color: var(--orange);
    }
  }

  h1 {
    color: var(--text-heading);
    font-size: var(--heading-xlg);
    font-family: var(--font-heading);
    font-weight: 700;
  }

  h2 {
    color: var(--text);
    font-size: var(--heading-lg);
    font-family: var(--font-heading);
    font-weight: 700;
  }

  h3 {
    color: var(--text-heading);
    font-size: var(--heading-sm);
    font-family: var(--font-heading);
    font-weight: 400;
  }

  p {
    color: var(--text);
    font-size: var(--text-md);
    font-family: var(--font-text);
    font-weight: 400;
  }

  span {
    color: var(--orange);
    font-size: var(--text-lg);
    font-family: var(--font-link);
    font-weight: 300;
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
    background: var(--bg-navy);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--orange);
    border: 3px solid var(--bg-navy);
    border-radius: 10px;
  }

  // Button Style

  button {
    cursor: pointer;
    margin: 0;
    padding: 10px 20px;
    border-radius: var(--border-radius);
    border: var(--btn-border);
    background: none;

    a {
      color: var(--orange);
    }

    &:hover {
      background-color: var(--orange-tint);
      transition: var(--transiton);
    }
  }

  // Class Templates
  .section__heading {

  }
`

export default GlobalStyle;