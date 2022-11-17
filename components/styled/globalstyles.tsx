
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Poppins", sans-serif;
  }
  html,
  body {
    color: ${({ theme }) => theme.colors[100]};
    background-color: ${({theme}) => theme.colors[700]};
    padding: 0 !important;
  }
  a {
    color: inherit;
  }
`

export default GlobalStyle
