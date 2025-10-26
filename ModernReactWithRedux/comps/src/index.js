import React from "react";
import reactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { NavigationProvider } from "./context/navigation.js";

const el = document.getElementById("root");
const root = reactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
