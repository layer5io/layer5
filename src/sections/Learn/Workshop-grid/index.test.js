import React from "react";
import { shallow } from "enzyme";
import WorkshopPage from "./index";
it("Workshops-grid renders without crashing", () => {
  shallow(<WorkshopPage />);
});
