import React from "react";
import { Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import ProjectPageWrapper from "./projectSingle.style";

const ProjectSingle = ({ data, children  }) => {
  const { frontmatter } = data.mdx;
  return (
    <ProjectPageWrapper>
      <PageHeader
        title={frontmatter.title}
      />
      <div className="single-post-wrapper">
        <Container>
          <div className="single-project-block">
            { children }
          </div>
        </Container>
      </div>
    </ProjectPageWrapper>
  );
};

export default ProjectSingle;