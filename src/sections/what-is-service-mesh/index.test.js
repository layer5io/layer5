import React from "react";
import { shallow } from "enzyme";
import WhatServiceMesh from "./index";
it("Blog-sidebar renders without crashing", () => {
  shallow(<WhatServiceMesh />);
});
