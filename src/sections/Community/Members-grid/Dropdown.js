import React from "react";

// Libraries
import Select from "react-select";

// Components
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { selectStyles, dropdownTheme } from "./membersGrid.style";
import { FilterWrapper } from "./membersGrid.style";

const Dropdown = (props) => {
  return (
    <>
      <PageHeader
        title="Meet our Community Members"
        path="Community > Members"
        subtitle="A warm and welcoming collection of open sourcers"
      />
      <Container>
        <FilterWrapper>
          <Select
            name="Filter Members"
            defaultValue={[props.defaultOption]}
            isSearchable={false}
            styles={selectStyles}
            options={props.options}
            value={props.members}
            onChange={props.handleChange}
            theme={dropdownTheme}
            isMulti
          />
        </FilterWrapper>
        <br />
      </Container>
    </>
  );
};

export default Dropdown;
