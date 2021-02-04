import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import ProgramsPageWrapper from "./ProgramsSingle.style.js";

const ProgramsSingle = ({data}) => {
  const { frontmatter, body } = data.mdx;
  return (
    <ProgramsPageWrapper>
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
