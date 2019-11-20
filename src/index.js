// * Coded by Agora42.com team *
import React from "react";
// importing the reactDom from react-dom
import ReactDOM from "react-dom";
// import the index.css
import "./index.css";
//importing the application
import App from "./App";
// importing the service worker
import * as serviceWorker from "./serviceWorker";
// importing the style from Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
