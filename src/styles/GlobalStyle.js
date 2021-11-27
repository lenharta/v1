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
    font-family: var(--font-link);
    font-weight: 400;
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

  // Templates
  .section {
    margin: 100px auto;
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
`

export default GlobalStyle;