import React from "react";
import { shallow } from "enzyme";
import BrandPage from "./index";
it("Brand renders without crashing", () => {
  shallow(<BrandPage />);
});
