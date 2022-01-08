import React from "react";
import "./brand.css";
import logos from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      {logos.map((logo, count = 0) => {
        return (
          <div key={count++}>
            <img src={logo} alt="logo" />
          </div>
        );
      })}
    </div>
  );
};

export default Brand;
