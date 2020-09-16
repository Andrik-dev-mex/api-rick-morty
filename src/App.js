import React from "react";
import AppBar from "./layout/AppBar";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './Routes';

function App(props) {
  return(
    <Router>
      <AppBar/>
      <Routes/>
    </Router>
  )
}


export default App;
