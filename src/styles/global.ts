import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
   }

   body {
       background: ${(props) => props.theme.colors.gradient};
       color: ${(props) => props.theme.colors.white};
       font-family: 'Source Sans Pro', sans-serif;
       background-size: 200% 200%;
       animation: gradient 5s ease infinite;
       height: 100vh;
       width: 100%;
       overflow-x: hidden;

       @media only screen and (max-width: 1000px) {
        height: 100%;
    }
   }

   @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

`;
