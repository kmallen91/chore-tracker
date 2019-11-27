import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: ""
  });

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const loginSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.userId);
        props.history.push("/");
      })
      .catch(err => {
        console.log("error from login", err);
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title"> Login</h2>
      <form className="login-form" onSubmit={loginSubmit}>
        <h3 className="login-input-title">Username:</h3>
        <input
          className="login-input"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <h3 className="login-input-title">Password:</h3>
        <input
          className="login-input"
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <h3 className="login-input-title">Email:</h3>
        <input
          className="login-input"
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChanges}
        />
        <button className="login-button">Login Now</button>
      </form>
    </div>
  );
};

export default Login;
