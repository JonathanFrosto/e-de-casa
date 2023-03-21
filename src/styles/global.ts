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
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, text-area {
    font: 400 1rem 'Roboto', sans-serif;
  }

  :focus {
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  input, button {
    border: 0;
    outline: 0;
  }
`