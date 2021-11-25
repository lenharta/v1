import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
  ${variables};
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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