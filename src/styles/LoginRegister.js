import styled from "styled-components";

const FormWrapper = styled.div`
	background-color: ${props => props.theme.white};
	padding: 1rem;
	width: 350px;
	border: 1px solid ${props => props.theme.borderColor};
	margin: 6rem auto;
	text-align: center;
	padding: 2rem 0;

	img {
		margin-bottom: 1.5rem;
	}

	input {
		display: block;
		margin: 0 auto;
		margin-bottom: 1rem;
		padding: 0.5rem 1.2rem;
		background: ${props => props.theme.white};
		border: 1px solid ${props => props.theme.borderColor};
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		border-radius: 4px;
		width: 85%;
	}

	input[type="submit"] {
		background-color: ${props => props.theme.blue};
		color: ${props => props.theme.white};
		border: 1px solid ${props => props.theme.blue};
		cursor: pointer;
	}

	p {
		margin-top: 2rem;
	}

	span {
		color: ${props => props.theme.blue};
		cursor: pointer;
	}

	.input-group{
		margin-bottom: 15px;
    padding-left: 28px;
		width: 93%;
	}
`;

export default FormWrapper;