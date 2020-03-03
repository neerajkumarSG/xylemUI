import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Map from "./Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Locations from "./data/location.json";
import Time from "./data/time.json";
import Charts from "./Charts";
import Header from "./Header";

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Map locations={Locations} />
      </Route>
      <Route exact path="/charts">
        <Charts chart={Time} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
