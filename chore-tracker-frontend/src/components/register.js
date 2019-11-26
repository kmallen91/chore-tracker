import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Register = props => {
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

  const registerSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/users/register", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        props.history.push("/");
      })
      .catch(err => {
        console.log("error from register", err);
      });
  };

  return (
    <div className="register-container">
      <h2 className="register-title"> Register Now</h2>
      <form className="register-form" onSubmit={registerSubmit}>
        <h3 className="register-input-title">Username:</h3>
        <input
          className="register-input"
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChanges}
        />
        <h3 className="register-input-title">Password:</h3>
        <input
          className="register-input"
          type="text"
          name="password"
          value={credentials.password}
          onChange={handleChanges}
        />
        <h3 className="register-input-title">Email:</h3>
        <input
          className="register-input"
          type="text"
          name="email"
          value={credentials.email}
          onChange={handleChanges}
        />
        <button className="register-button">Register Now</button>
      </form>
    </div>
  );
};

export default Register;
