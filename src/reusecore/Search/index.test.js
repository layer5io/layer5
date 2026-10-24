import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./index";
import { DebounceInput } from "react-debounce-input";
import Button from "../../reusecore/Button";
import { FaSearch } from "@react-icons/all-files/fa/FaSearch";

describe("SearchBox Accessibility and Interaction Tests", () => {
  describe("Accessibility Attributes", () => {
    it("renders the input and button with default accessibility attributes", () => {
      const wrapper = shallow(<SearchBox />);
      const input = wrapper.find(DebounceInput);
      const button = wrapper.find(Button);

      // Input defaults
      expect(input.prop("type")).toBe("text");
      expect(input.prop("aria-label")).toBe("Search");
      expect(input.prop("name")).toBe("search");
      expect(typeof input.prop("id")).toBe("string");
      expect(input.prop("id").length).toBeGreaterThan(0);

      // Button defaults
      expect(button.prop("type")).toBe("button");
      expect(button.prop("aria-label")).toBe("Search");

      // Search icon decorative attribute
      const icon = button.find(FaSearch);
      expect(icon.prop("aria-hidden")).toBe("true");
    });

    it("applies configured accessibility attributes (ariaLabel, id, name, autoComplete)", () => {
      const wrapper = shallow(
        <SearchBox
          ariaLabel="Search blog posts"
          id="custom-search-input"
          name="custom-search-field"
          autoComplete="off"
          focusSearch={true}
        />,
      );
      const input = wrapper.find(DebounceInput);

      expect(input.prop("aria-label")).toBe("Search blog posts");
      expect(input.prop("id")).toBe("custom-search-input");
      expect(input.prop("name")).toBe("custom-search-field");
      expect(input.prop("autoComplete")).toBe("off");
      expect(input.prop("autoFocus")).toBe(true);
    });

    it("supports the alternative 'aria-label' prop when provided", () => {
      const wrapper = shallow(<SearchBox aria-label="Search integrations" />);
      const input = wrapper.find(DebounceInput);

      expect(input.prop("aria-label")).toBe("Search integrations");
    });

    it("falls back to id for input name when name is not explicitly passed", () => {
      const wrapper = shallow(<SearchBox id="news-search" />);
      const input = wrapper.find(DebounceInput);

      expect(input.prop("id")).toBe("news-search");
      expect(input.prop("name")).toBe("news-search");
    });
  });

  describe("Search Button and Form Submission Behavior", () => {
    it("renders button with type='button' to prevent submitting parent form", () => {
      const wrapper = shallow(<SearchBox />);
      const button = wrapper.find(Button);

      expect(button.prop("type")).toBe("button");
    });

    it("calls preventDefault when search button is clicked to avoid form submission", () => {
      const wrapper = shallow(<SearchBox />);
      const button = wrapper.find(Button);
      const mockPreventDefault = jest.fn();

      button.prop("onClick")({ preventDefault: mockPreventDefault });

      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("focuses input when search button is clicked", () => {
      const wrapper = shallow(<SearchBox />);
      const mockFocus = jest.fn();
      const input = wrapper.find(DebounceInput);

      // Simulate the input ref assigned by DebounceInput
      const inputRef = input.prop("inputRef");
      inputRef.current = { focus: mockFocus };

      const button = wrapper.find(Button);
      button.prop("onClick")({ preventDefault: jest.fn() });

      expect(mockFocus).toHaveBeenCalled();
    });

    it("invokes onSearchClick callback when search button is clicked", () => {
      const onSearchClickMock = jest.fn();
      const wrapper = shallow(<SearchBox onSearchClick={onSearchClickMock} />);
      const button = wrapper.find(Button);
      const eventMock = { preventDefault: jest.fn() };

      button.prop("onClick")(eventMock);

      expect(onSearchClickMock).toHaveBeenCalledWith(eventMock);
    });
  });
});
