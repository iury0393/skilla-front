import React, { useContext } from "react";
import { toast } from "react-toastify";
import { client } from "../utils";
import FormWrapper from "../styles/LoginRegister";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";
import { FiMail, FiKey, FiUser, FiUserCheck } from "react-icons/fi";

import logo from "../assets/logo.png";
const Register = ({ login }) => {
  const { setUser } = useContext(UserContext);
  const email = useInput("");
  const fullname = useInput("");
  const username = useInput("");
  const password = useInput("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value || !username.value || !fullname.value) {
      return toast.error("Preencha todos os campos");
    }

    if (username.value === "explore") {
      return toast.error(
        "O usuário que colocou não é aceitavel. Tente novamente"
      );
    }

    const re = /^[a-z0-9]+$/i;
    if (re.exec(username.value) === null) {
      return toast.error(
        "O usuário que colocou não é aceitavel. Tente novamente"
      );
    }

    const body = {
      email: email.value,
      password: password.value,
      username: username.value,
      fullname: fullname.value,
    };

    try {
			const { token } = await client('/auth/signup', { body })
			localStorage.setItem('token', token)
    } catch (err) {
      return toast.error(err.message);
    }

		const user = await client('/auth/me')
    setUser(user.data);
    localStorage.setItem("user", JSON.stringify(user.data));

    fullname.setValue("");
    username.setValue("");
    password.setValue("");
    email.setValue("");
  };

  return (
    <FormWrapper onSubmit={handleLogin}>
      <img src={logo} alt="logo" />

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
							value={email.value}
							onChange={email.onChange}
						/>
				</div>
        <div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon">
							<FiUserCheck color={"#5931BF"} />
						</span>
					</div>
					<input
							type="text"
							className="form-control"
							aria-label="Nome completo"
							placeholder="Nome completo"
							aria-describedby="basic-addon"
							value={fullname.value}
							onChange={fullname.onChange}
						/>
				</div>
        <div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon">
							<FiUser color={"#5931BF"} />
						</span>
					</div>
					<input
							type="text"
							className="form-control"
							aria-label="Usuário"
							placeholder="Usuário"
							aria-describedby="basic-addon"
							value={username.value}
							onChange={username.onChange}
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
							value={password.value}
							onChange={password.onChange}
						/>
				</div>
        <input type="submit" value="Registre" style={{backgroundColor: "#5931BF"}} />
      </form>

      <div>
        <p>
          Já tem uma conta? <span onClick={login}>Login</span>
        </p>
      </div>
    </FormWrapper>
  );
};

export default Register;
