import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* font-size: 62.5%; */
  }

  body {
    background-color: ${(props) => props.theme.pastel};
  }

  body, button, input, text-area {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  :focus {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    border: 0;
  }
`