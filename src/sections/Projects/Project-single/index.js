import React from "react";
import { MDXRenderer } from "../../utils/mdx-renderer";

import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import ProjectPageWrapper from "./projectSingle.style";

const ProjectSingle = ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <ProjectPageWrapper>
      <PageHeader
        title={frontmatter.title}
      />
      <div className="single-post-wrapper">
        <Container>
          <div className="single-project-block">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </Container>
      </div>
    </ProjectPageWrapper>
  );
};

export default ProjectSingle;