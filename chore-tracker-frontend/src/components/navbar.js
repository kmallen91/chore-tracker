import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const SignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    props.history.push("/");
  };

  return (
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/register"> Register </Link>
      <Link to="/login"> Login </Link>
      <Link to="/" onClick={SignOut}>
        Sign Out
      </Link>
    </div>
  );
}
