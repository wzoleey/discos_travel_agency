import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login.css";

const Login = () => {
  // Login not ready.
  return (
    <div className="login">
      <div className="picture">
        <img src="../../../images/login.jpg" alt="" />
      </div>
      <div className="loginForm">
        <h3>Login</h3>

        <input
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          //onFocus={(e) => setInputData((e.target.value = ""))}
        />

        <input
          className="input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          //onFocus={(e) => setInputData((e.target.value = ""))}
        />

        <input className="button" type="button" value="Submit" />
      </div>
    </div>
  );
};

export default Login;
