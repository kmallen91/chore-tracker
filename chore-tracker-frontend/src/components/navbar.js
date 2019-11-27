import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const SignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    props.history.push("/");
  };

  return (
    <div className="navbar">
      <NavLink to="/" className='navlink'> Home </NavLink>
      <NavLink to="/register" className='navlink'> Register </NavLink>
      <NavLink to="/login" className='navlink'> Login </NavLink>
      <NavLink to="/chores" className='navlink'> Chores </NavLink>
      <NavLink to="/" className='navlink' onClick={SignOut}>
        Sign Out
      </NavLink>
    </div>
  );
}
