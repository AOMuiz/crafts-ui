import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";
import App from "./App";
import { GlobalStyle } from "./utils/Global";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle whiteColor />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
