import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import { NotFound } from "./sections";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/notfound" component={NotFound} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
