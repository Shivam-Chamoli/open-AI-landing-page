import React from "react";
import { Brand, Cta, Navbar } from "./components";
import {
  Blog,
  Header,
  Footer,
  WhatGpt3,
  Features,
  Possibility,
} from "./containers";
import "./app.css";

const App = () => {
  return (
    <div id="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
