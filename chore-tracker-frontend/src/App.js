import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//components
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
