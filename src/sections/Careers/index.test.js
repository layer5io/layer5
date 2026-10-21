import React from "react";
import { shallow } from "enzyme";
import Careers from "./index";
it("Gsoc renders without crashing", () => {
  shallow(<Careers />);
});
