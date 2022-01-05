import React from "react";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Blog,
  Header,
  Footer,
  WhatGpt3,
  Features,
  Possibility,
} from "./containers";

const App = () => {
  return (
    <div id="App">
      <h1> App </h1>
      <Header />
      <Footer />
      <Blog />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Article />
      <Brand />
      <Feature />
      <Cta />
      <Navbar />
    </div>
  );
};

export default App;
