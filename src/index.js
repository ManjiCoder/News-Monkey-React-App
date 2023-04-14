import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ErrorBoundary from "./Error/ErrorBoundary";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Auth0Provider
        domain="dev-htykpyq8rnnfsrc4.us.auth0.com"
        clientId="GOhOoML3nsqJdbf21iehMvMFygXql9qb"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
