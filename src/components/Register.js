import React, { useContext } from "react";
import { toast } from "react-toastify";
import { client } from "../utils";
import FormWrapper from "../styles/LoginRegister";
import useInput from "../hooks/useInput";
import { UserContext } from "../context/UserContext";

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
        "O usuário que colocou não é aceitável. Tente novamente"
      );
    }

    const re = /^[a-z0-9]+$/i;
    if (re.exec(username.value) === null) {
      return toast.error(
        "O usuário que colocou não é aceitável. Tente novamente"
      );
    }

    const body = {
      email: email.value,
      password: password.value,
      username: username.value,
      fullname: fullname.value,
    };

    try {
      const { token } = await client("/auth/signup", { body });
      localStorage.setItem("token", token);
    } catch (err) {
      return toast.error(err.message);
    }

    const user = await client("/auth/me");
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
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="text"
          placeholder="Nome completo"
          value={fullname.value}
          onChange={fullname.onChange}
        />
        <input
          type="text"
          placeholder="Usuário"
          value={username.value}
          onChange={username.onChange}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password.value}
          onChange={password.onChange}
        />
        <input
          type="submit"
          value="Registre"
          style={{ backgroundColor: "#5931BF" }}
        />
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
