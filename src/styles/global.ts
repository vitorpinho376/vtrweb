import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   * {
       box-sizing: border-box;
       margin: 0;
       padding: 0;
   }

   body {
	background: ${(props) => props.theme.colors.gradient};
    color: ${(props) => props.theme.colors.onSurface};
    font-family: 'Open Sans', sans-serif;
	background-size: 200% 200%;
	animation: gradient 5s ease infinite;
	height: 100vh;
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

    h1 {
        font-weight: 900;
        font-size: 80px;
        line-height: 101px;
        max-width: 900px;

        b {
            color: ${(props) => props.theme.colors.onSurfaceMuted};
        }
    }

    section {
        padding: 80px;
        height: 100vh;
        display: flex;
        align-items: center;
    }

`;
