import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	html {
		font-size: 16px;
		box-sizing: border-box;
	}

	*, *:before, *:after {
		padding: 0;
		margin: 0;
		box-sizing: inherit;
	}

	body {
		font-family: 'Fira Sans', sans-serif;
		font-size: 1rem;
		line-height: 1.7;
		background: ${(props) => props.theme.bg};
		color: #5931BF;
		overflow-x: hidden;
	}

	h1, h2, h3, h4, h5, h6 {
		font-weight: normal;
		color: #5931BF;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		color: #5931BF;
	}

	.pointer {
		cursor: pointer;
	}

	.secondary {
		color: #5931BF;
	}

	.danger {
		color: ${(props) => props.theme.red};
	}

	button, svg {
	  cursor: pointer;
	}

	.bold {
		font-weight: 500;
	}

	*:focus {
	  outline: none;
	}
`;

export default GlobalStyle;
