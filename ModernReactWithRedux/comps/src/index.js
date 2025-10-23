import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

const el = document.getElementById("root");
const root = reactDOM.createRoot(el);

root.render(<App />);
