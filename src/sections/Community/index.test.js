import React from "react";
import { shallow } from "enzyme";
import Community from "./index";
it("Community renders without crashing", () => {
  shallow(<Community />);
});
