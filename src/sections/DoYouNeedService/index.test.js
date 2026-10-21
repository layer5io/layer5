import React from "react";
import { shallow } from "enzyme";
import DoYouNeedService from "./index";
it("Blog-sidebar renders without crashing", () => {
  shallow(<DoYouNeedService />);
});
