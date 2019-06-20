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
    background:#fefefe;
  }

  button{
    cursor: pointer;
    transition: all 0.5s ease;
  }
  ul{
    list-style:none;
  }
  :hover{
    transition: all 0.5s ease;
  }

`;

export default GlobalStyle;
