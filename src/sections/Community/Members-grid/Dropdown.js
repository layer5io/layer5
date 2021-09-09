import React from "react";

// Libraries
import Select from "react-select";

// Components
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { selectStyles, dropdownTheme } from "./membersGrid.style";

const Dropdown = (props) => {
  return (
    <>
      <PageHeader
        title='Meet our Community Members'
        path='Community > Members'
        subtitle='A warm and welcoming collection of open sourcers'
      />
      <Container>
        <div className='members-grid-select'>
          <Row>
            <Col xs={12} sm={6} lg={9} />
            <Col xs={12} sm={6} lg={3}>
              <Select
                name='Filter Members'
                defaultValue={[props.options[10]]}
                isSearchable={false}
                styles={selectStyles}
                options={props.options}
                value={props.members}
                onChange={props.handleChange}
                theme={dropdownTheme}
                isMulti
              />
              <br />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Dropdown;
