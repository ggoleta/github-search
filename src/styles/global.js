import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
`;