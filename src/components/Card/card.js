import React, { ReactDOM } from "react";
import Style from "./style.css";

export default function card() {
  return (
    <>
      <div className="maincontainer">
        <div className="thecard">
          <div className="thefront text-center">
            <span className="circulo me-3"> </span>
            <span className="triangulo me-3"> </span>
            <span className="quadrado"> </span>
          </div>
          <div className="theback text-center">
            <i className="homeico py-2 icone me-3 fas fa-home fa-2x "></i>
            <a className="phone" href="https://github.com/cod3rleo/round6card">
              8650 4006
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
