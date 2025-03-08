import React from "react";
import RippleWrapper from "./ripple-effect.style.js";

const Ripple = (props) => {
  return (
    <RippleWrapper className="wrap">
      <button>
        <img src={props.img} alt={props.alt} />
      </button>
    </RippleWrapper>
  );
};

export default Ripple;
