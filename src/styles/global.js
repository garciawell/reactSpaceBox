import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  html, body, #root{
    height:100%;
    font-family: 'Open Sans', sans-serif;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Open Sans', sans-serif;
    color:#707070;
    background:#f4f4f4;
  }

  button{
    cursor: pointer;
  }
  ul{
    list-style:none;
  }

`;

export default GlobalStyle;
