import React from "react";
import Select from "react-select";
import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Row, Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import ProgramsPageWrapper, { dropdownTheme, selectStyles } from "./ProgramsSingle.style.js";

const ProgramsSingle = ({ data, options, setActiveOption, activeOption }) => {

  const { frontmatter, body } = data;

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
          {Boolean(options) &&
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

          <div className="single-post-block">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Container>
      </div>
    </ProgramsPageWrapper>
  );
};

export default ProgramsSingle;
