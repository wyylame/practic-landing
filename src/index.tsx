import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { config } from "./configs/config";

document.title = config.title;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
