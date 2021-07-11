import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`


@font-face {
  font-family: 'EliceDigitalBaeum_Regular';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: '양진체';
  src: url('https://cdn.jsdelivr.net/gh/supernovice-lab/font@0.9/yangjin.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
    font-family: 'Cafe24SsurroundAir';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24SsurroundAir.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}



  * {
    margin: 0;
    padding: 0; 
    
    box-sizing: border-box;
    font-family: 'Cafe24SsurroundAir';
  }

  body {
    font-family: '양진체', 'EliceDigitalBaeum_Regular', Arial, Helvetica, sans-serif, ;
  }

  textarea {
    resize: none;
  }

  button {
    padding: 0;
    cursor: pointer;
  }


`;

export default GlobalStyles;