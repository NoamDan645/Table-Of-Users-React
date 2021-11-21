import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./component/Table";
import UserDetails from './component/UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Table />
          </Route>
          <Route exact path="/UserDetails/:username">
            <UserDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
