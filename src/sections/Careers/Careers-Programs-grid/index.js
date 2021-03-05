import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Image from "../../../components/image";

import { ProgramsPageWrapper } from "./ProgramGrid.style";

const ProgramsGrid = ({ hide_path, sub_section }) => {
  const data = useStaticQuery(
    graphql`
            query allPrograms {
                allMdx(
                    sort: { fields: [frontmatter___title], order: ASC }
                    filter: { fields: { collection: { eq: "programs" } }, frontmatter: { published: { eq: true } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            thumbnail{
                                childImageSharp{
                                    fluid(maxWidth: 1000){
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                                extension
                                publicURL
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        `
  );

  let path = hide_path ? "" : "Programs";
  return (
    <ProgramsPageWrapper>
      <PageHeader title="Open Source Internship Programs" subtitle="Build Your Career at Layer5" path={path} />
      <div className={sub_section ? "sub-header_wrapper" : "programs-page-wrapper"}>
        <Container>
          <div className="program-grid-wrapper">
            <Row>
              {data.allMdx.nodes.map(({ id, frontmatter, fields }) => (
                <Col key={id} className="programs-col">
                  <Link to={fields.slug}>
                    <div className={`program ${sub_section ? "sub-section_program" : ""}`}>
                      <div className={`icon ${sub_section ? "sub-section_icon" : ""}`}>
                        <Image
                          {...frontmatter.thumbnail}
                          imgStyle={{ objectFit: "contain" }}
                          alt={frontmatter.title}
                        />
                      </div>
                      <h5>{frontmatter.title}</h5>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
          <p>
            The quickly growing Layer5 community represents the largest collection of
            service mesh projects and their maintainers in the world. Our projects establish
            industry standards and enable service developers, owners, and operators
            with repeatable patterns and best practices for managing all aspects of distributed services.
            Our shared commitment to the open source spirit push the Layer5 community and its projects forward.
            New members are always welcome.
          </p>
          HashiCorp is driven by its people who are the stewards of our culture and principles which have been the foundational characteristics of. Join us on the journey to enabling the world's most innovative companies make the transition to cloud, and multi-cloud through simple workflows and automation.

          <p>Layer5 goes out of its way to welcome and encourage new contributors. We often assign newcomers an onboarding buddy, a MeshMate, to ensure that newcomers get both introduced to the projects within the community and introduced around to other individuals. We strive to help them get a foothold on a crevice of one of our initiatives, instilling and nurturing a sense of ownership, so that they feel at-home as they become a regular contributor.</p>
          <p>
            We also spend a great deal of time trying to recognize and uplift contributors on the Layer5 and Meshery Twitter accounts whether “contribution” means code or any of the other various forms of being involved int the projects and community. Likewise, we try to lift up contributors’ works on the Layer5 and Meshery LinkedIn pages, too. And, while it’s not a world stage, we openly and publicly share our community meetings on YouTube.
          </p>
          <p>
        Open source contributors come in all shapes, sizes, colors and so on. All are welcome in the Layer5 projects and community!!</p>
        </Container>
      </div>
    </ProgramsPageWrapper>
  );
};

export default ProgramsGrid;
