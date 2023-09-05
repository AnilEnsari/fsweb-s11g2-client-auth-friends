import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FriendsProvider from "./context/FriendsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FriendsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FriendsProvider>
);
