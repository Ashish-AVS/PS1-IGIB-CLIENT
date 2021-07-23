import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import App from "./App";

import { HashRouter as Router } from "react-router-dom";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "htmlTag",
        "path",
        "localStorage",
        "cookie",
        "localStorage",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      // loadPath: "/assets/locales/{{lng}}/translation.json"
      // loadPath: "/assets/locales/{{lng}}/translation.json"
      loadPath: () => {
        // check the domain
        const host = window.location.host;
        return (
          (host === "https://ashish-avs.github.io/" ? "/ps1-igib-client" : "/ps1-igib-client/" ) + "assets/locales/{{lng}}/translation.json"
        );
      },
    },
  });

const loading = <p>Loading...</p>;

ReactDOM.render(
  <Suspense fallback={loading}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Suspense>,
  document.getElementById("root")
);

// import {HashRouter as Router} from 'react-router-dom'

// ReactDOM.render(
//   <Suspense fallback={loading}>
//   <Router>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Router>
//   </Suspense>,
//   document.getElementById('root')
// );

// PACKAGE.JSON MISSING
// "name": "ps1-igib-client",
// "homepage": "https://ashish-avs.github.io/ps1-igib-client",
