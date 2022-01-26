import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Blog } from "./containers";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
it("render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Blog />, div);
});
