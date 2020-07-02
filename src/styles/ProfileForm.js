import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 1rem;

	img {
		cursor: pointer;
		margin-right: 40px;
	}

	.input-group {
		margin-top: 1.5rem;
	}

	.input-group > label {
		display: inline-block;
		width: 100px;
	}

	input,
	textarea {
		padding: 0.4rem 1rem;
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		border-radius: 4px;
		border: 1px solid ${props => props.theme.borderColor};
		width: 350px;
	}

	.textarea-group {
		display: flex;
	}

	.change-avatar {
		display: flex;
	}

	input[id="change-avatar"],
	input[id="change-avatar-link"] {
		display: none;
	}

	span {
		color: ${props => props.theme.blue};
		cursor: pointer;
	}

	button {
		margin-top: 1.5rem;
		margin-left: 6.25rem;
		margin-bottom: 1rem;
	}

	@media screen and (max-width: 550px) {
		width: 98%;

		.input-group {
			display: flex;
			flex-direction: column;
		}

		label {
			padding-bottom: 0.5rem;
			font-size: 1rem;
		}

		button {
			margin-left: 0;
		}
	}

	@media screen and (max-width: 430px) {
		input,
		textarea {
			width: 99%;
		}
	}
`;

export default Wrapper;