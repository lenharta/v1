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

  /* Scroll Bar */

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

  a {
    cursor: pointer;
    text-decoration: none;
    font-family: var(--font-roboto);
    font-weight: 700;
  }

  button {
    cursor: pointer;
    margin: 0;
    padding: .8rem;
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
`

export default GlobalStyle;