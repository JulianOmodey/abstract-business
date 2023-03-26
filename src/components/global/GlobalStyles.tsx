import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  html, body{
    margin: 0;
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale
  }
  p{
    margin: 0;
  }
`
