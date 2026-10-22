import React from "react";
import { shallow } from "enzyme";
import ProudMaintainers from "./index";
it("Integrations renders without crashing", () => {
  shallow(<ProudMaintainers />);
});
