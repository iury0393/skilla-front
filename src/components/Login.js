import React, { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { client } from "../utils";
import FormWrapper from "../styles/LoginRegister";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import { FiMail, FiKey } from "react-icons/fi";
import logo from "../assets/logo.png";



const Login = ({ register }) => {
	const { setUser } = useContext(UserContext);
	const email = useInput("");
	const password = useInput("");
	const [recaptcha, setRecaptcha] = useState(false);

	const recaptchaVerify = (value) => {
		//console.log("Captcha value:", value);
		setRecaptcha(true);
	}

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
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon">
							<FiMail color={"#5931BF"} />
						</span>
					</div>
					<input
							type="email"
							className="form-control"
							aria-label="Email"
							placeholder="Email"
							aria-describedby="basic-addon"
							required
							value={email.value}
							onChange={email.onChange}
						/>
				</div>
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon">
							<FiKey color={"#5931BF"} />
						</span>
					</div>
					<input
							type="password"
							className="form-control"
							aria-label="Senha"
							placeholder="Senha"
							aria-describedby="basic-addon"
							required
							value={password.value}
							onChange={password.onChange}
						/>
				</div>
				{recaptcha ? (
					<input type="submit" value="Entrar" style={{backgroundColor: "#5931BF"}} />
				) : (
					<input type="submit" value="Entrar" style={{backgroundColor: "#808080"}} disabled />
				)}
			</form>
			<ReCAPTCHA
				sitekey="6Lceca4ZAAAAAOV12tH8Q8eVOToMBkl4qEu1KwPI"
				onChange={recaptchaVerify}
			/>

			<div>
				<p>
					Não tem uma conta? <span onClick={register}>Registro</span>
				</p>
			</div>
		</FormWrapper>
	);
};

export default Login;
