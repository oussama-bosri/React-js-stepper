import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { LabelProvider } from "./labelDataContext";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <LabelProvider>
      <App />
    </LabelProvider>
  </StrictMode>,
  rootElement
);
