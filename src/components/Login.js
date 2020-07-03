import React, { useContext } from "react";
import { toast } from "react-toastify";
import { client } from "../utils";
import FormWrapper from "../styles/LoginRegister";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import logo from "../assets/logo.png";



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
				<input type="submit" value="Entrar" style={{backgroundColor: "#5931BF"}} />
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
