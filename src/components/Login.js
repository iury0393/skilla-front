import React, { useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { client } from "../utils";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import logo from "../assets/logo.png";

export const FormWrapper = styled.div`
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
`;

const Login = ({ register }) => {
	const { setUser } = useContext(UserContext);
	const email = useInput("");
	const password = useInput("");

	const handleLogin = async e => {
		e.preventDefault();

		if (!email.value || !password.value) {
			return toast.error("Por favor preencha os dois campos");
		}

		const body = { email: email.value, password: password.value };

		try {
			const { token } = await client("/auth/login", { body });
			localStorage.setItem("token", token);
		} catch (err) {
			return toast.error(err.message);
		}

		const user = await client("/auth/me");
		localStorage.setItem("user", JSON.stringify(user.data));
		setUser(user.data);
		toast.success("Login successful");

		email.setValue("");
		password.setValue("");
	};

	return (
		<FormWrapper onSubmit={handleLogin}>
			<img className="logo" src={logo} alt="logo" />
			<form>
				<input
					type="email"
					placeholder="exemplo@gmail.com"
					value={email.value}
					onChange={email.onChange}
				/>
				<input
					type="password"
					placeholder="Senha"
					value={password.value}
					onChange={password.onChange}
				/>
				<input type="submit" value="Entrar" className="login-btn" />
			</form>

			<div>
				<p>
					Não tem uma conta? <span onClick={register}>Registro</span>
				</p>
			</div>
		</FormWrapper>
	);
};

export default Login;
