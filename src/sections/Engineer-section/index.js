import React from "react";
import EngineerWrapper from "./engineer-section.style";

const EngineerEnabler = () => {

  return (
    <EngineerWrapper>
      <h5>Learn more about how Layer5 is a service mesh leader</h5>  
      <div className="head-cont">
        <h1>
          <span>Enabler of Engineers. </span>
          <span>Enabler of Speed. </span>
          <span>Enabler of Business.</span>
        </h1>
      </div>
      <h5>It's a multi-mesh world, Infrastructure diversity is reality for any enterprise.</h5>
      <div>
        <button>Request Training</button>
      </div>
    </EngineerWrapper>
  );
};
export default EngineerEnabler;