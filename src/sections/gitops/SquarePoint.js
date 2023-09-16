import React from "react";
import {  SquarePointWrapper } from "./gitops.style.js";


const SquarePoint = ({ children }) => {
  return <SquarePointWrapper>
    <div className="square-box" />
    <p className="content">{children}</p>
  </SquarePointWrapper>;
};

export default SquarePoint;