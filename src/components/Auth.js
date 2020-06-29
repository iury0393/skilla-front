import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

import HomePage from "../pages/Homepage/homepage.component"

const Auth = () => {
  const [auth, setAuth] = useState("LOGIN");

  const login = () => setAuth("LOGIN");
  const register = () => setAuth("REGISTER");

  if (auth === "LOGIN") {
    return (
      <>
        <HomePage />
        <Login register={register} />
      </>
    );
  }

  if (auth === "REGISTER") {
    return (
      <>
        <Register login={login} />
      </>
    );
  }
};

export default Auth;
