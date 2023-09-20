import React from "react";
import Select from "react-select";
import { Link } from "gatsby";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Row, Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import ProgramsPageWrapper, { dropdownTheme, selectStyles } from "./ProgramsSingle.style.js";
import loadable from "@loadable/component";
const SelectedProgram = loadable(() => import("../selected_program"));

const ProgramsSingle = ({ data, options, setActiveOption, activeOption, children }) => {

  const { frontmatter } = data;
  const optionsAvailable = Boolean(options);

  return (
    <ProgramsPageWrapper>
      <Container>
        <Row className="rowWrapper">
          <div className="backBtn">
            <Link to="/careers/programs">
              <IoIosArrowDropleftCircle />
              <h4>Go Back</h4>
            </Link>
          </div>
          {optionsAvailable &&
            <div className="selectWrapper">
              {options.length > 1 && <Select
                name="Select Year of Program"
                defaultValue={options[activeOption]}
                isSearchable={false}
                styles={selectStyles}
                options={options}
                value={options[activeOption]}
                onChange={(e) => setActiveOption(() => e.value)}
                theme={dropdownTheme}
              />}
            </div>
          }
        </Row>
      </Container>
      <PageHeader
        title={frontmatter.title}
      />
      <div className="single-post-wrapper" id="programs">
        <Container>
          {
            optionsAvailable && options.length > 1
              ?  <SelectedProgram
                selected={options[activeOption].label}
              />
              : <div className="single-post-block">
                { children }
              </div>
          }
        </Container>
      </div>
    </ProgramsPageWrapper>
  );
};

export default ProgramsSingle;
