import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
   }

   body {
       background: #0C0A14;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;

       @media only screen and (max-width: 1000px) {
        height: 100%;
    }
   }

`;
