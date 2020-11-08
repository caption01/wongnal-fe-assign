import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.scss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
