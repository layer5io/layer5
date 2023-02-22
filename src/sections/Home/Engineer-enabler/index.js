import React from "react";
import EngineerWrapper from "./engineer-section.style";
import Button from "../../../reusecore/Button/index";

const EngineerEnabler = () => {

  return (
    <EngineerWrapper>
      <h5>Learn more about how Layer5 is a service mesh leader</h5>
      <div className="head-cont">
        <h1 className="resp">
          <span>Enabler of Engineers. </span>
          <span>Enabler of Speed. </span>
        </h1>
        <h1>Enabler of Business.</h1>
      </div>
      <h5>It's a multi-mesh world. Infrastructure diversity is reality for any enterprise.</h5>
      <div>
        <Button primary title="Request Training" url="/company/contact" />
      </div>
    </EngineerWrapper>
  );
};
export default EngineerEnabler;