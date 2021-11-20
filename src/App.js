import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./component/Header.js";
import Table1 from "./component/Table1";
import UserDetails from './component/UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { Router } from "@material-ui/icons";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Table1 />
          </Route>
          <Route exact path="/UserDetails/:username">
            <UserDetails />
          </Route>
        </Switch>
      </Router>




      {/* <UserDetails /> */}

    </div>
  );
}

export default App;
