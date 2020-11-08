import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import App from "./App";
import { Provider as TripProvider } from "./contexts/tripContext";

ReactDOM.render(
  <React.StrictMode>
    <TripProvider>
      <App />
    </TripProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
