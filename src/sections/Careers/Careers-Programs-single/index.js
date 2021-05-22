import React from "react";
import {Link} from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Row } from "../../../reusecore/Layout";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import ProgramsPageWrapper from "./ProgramsSingle.style.js";

const ProgramsSingle = ({data}) => {
  const { frontmatter, body } = data.mdx;
  return (
    <ProgramsPageWrapper>
      <Container>
        <Row>
          <div className="backBtn">
            <Link to="/careers/programs">
              <IoIosArrowDropleftCircle />
              <h4>Go Back</h4>
            </Link>
          </div>
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
