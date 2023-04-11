import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Image from "../../../components/image";
import { ProgramsPageWrapper } from "./ProgramGrid.style";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const ProgramsGrid = ({ hide_path, sub_section }) => {
  const data = useStaticQuery(
    graphql`query allPrograms {
  allMdx(
    sort: {fields: [frontmatter___title], order: DESC}
    filter: {fields: {collection: {eq: "programs"}}, frontmatter: {published: {eq: true}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        program
        programSlug
        thumbnail {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          extension
          publicURL
        }
        darkthumbnail {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
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
  let programsArray = [];
  const { isDark } = useStyledDarkMode();

  const programs = data.allMdx.nodes.filter((item) => {
    if (programsArray.indexOf(item.frontmatter.program) >= 0) {
      return false;
    } else {
      programsArray.push(item.frontmatter.program);
      return true;
    }
  });

  return (
    <ProgramsPageWrapper>
      <PageHeader title="Open Source Internship Programs" subtitle="Build Your Career at Layer5" path={path} />
      <div className={sub_section ? "sub-header_wrapper" : "programs-page-wrapper"}>
        <Container>
          <div className="program-grid-wrapper">
            <Row Hcenter>
              {programs.reverse().map(({ id, frontmatter, fields }) => (
                <Col key={id} className="programs-col">
                  <Link
                    to={
                      frontmatter.program === "Layer5"
                        ? fields.slug
                        : `/programs/${frontmatter.programSlug}`
                    }
                  >
                    <div className={`program ${sub_section ? "sub-section_program" : ""}`}>
                      <div className={`icon ${sub_section ? "sub-section_icon" : ""}`}>
                        <Image
                          {...(frontmatter.darkthumbnail !== null && isDark ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
                          imgStyle={{ objectFit: "contain" }}
                          alt={frontmatter.title}
                        />
                      </div>
                      <h5>{frontmatter.program}</h5>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
          <p>
          Layer5 is driven by its people, who are the stewards of our culture and principles. Join us on the journey to enabling the world's most innovative companies make the transition to cloud native and multi-cloud through engineering-empowered automation.
          </p>

        </Container>
      </div>
    </ProgramsPageWrapper>
  );
};

export default ProgramsGrid;
