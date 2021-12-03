import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProductProvider } from "./services/ProductState";
import AuthProvider from "./services/AuthState";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
