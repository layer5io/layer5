import React from "react";
import { shallow } from "enzyme";
import BookPage from "./index";
it("Books-grid renders without crashing", () => {
  shallow(<BookPage />);
});
