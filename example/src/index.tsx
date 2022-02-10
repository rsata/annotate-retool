import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// @ts-ignore
const RetoolConnectedComponent = Retool.connectReactComponent(App);
ReactDOM.render(
    <RetoolConnectedComponent />,
    document.getElementById("root")
);
