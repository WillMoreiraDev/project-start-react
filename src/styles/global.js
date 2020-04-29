import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    font-size: 16px;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  input,
  button,
  textarea {
    appearance: none;
    resize: none;
  }
`;
