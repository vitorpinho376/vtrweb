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
    font-family: 'Source Sans Pro', sans-serif;
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

`;
