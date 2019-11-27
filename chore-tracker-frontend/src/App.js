import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

//components
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";
import ChoreList from "./components/choreList";
import AddChore from './components/addChore'

//styles
import './styles/navbar.css'
import './styles/choreCard.css'

function App() {
  return (
    <div className="App">
      <Route path="/" render={props => <Navbar {...props} />} />
      <Route exact path="/" component={Homepage} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/chores" component={ChoreList} />
      <Route path="/addchores" component={AddChore} />
    </div>
  );
}

export default App;
