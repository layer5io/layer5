import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Image from "../../../components/image";
import { ProgramsPageWrapper } from "./ProgramGrid.style";
import { useStyledDarkMode } from "../../../theme/app/useStyledDarkMode";

const Five_image = "../img/open-source.png";

const ProgramsGrid = ({ hide_path, sub_section }) => {
  const data = useStaticQuery(
    graphql`query allPrograms {
  allMdx(
    sort: {frontmatter: {title: DESC}}
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
}`
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
      <div className="opensource-section">
        <div className="opensource-section-text">
          <h1>Open Source is in our DNA</h1>
          <p>
            Layer5 projects are open source software. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration, globalism, and innovation. Layer5 projects are distributed under the terms of Apache v2.
          </p>
          <p>
            We believe that all contributors should expect and be part of a safe and friendly environment for constructive contribution. We can more effectively and successfully compare and challenge different ideas to find the best solutions for advancement, while building the size, diversity, and strength of our community.
          </p>
        </div>
        <div className="opensource-section-img">
          <StaticImage src={Five_image} alt="Five" />
        </div>
      </div>
      <PageHeader title="Open Source Internship Programs" subtitle="Build Your Career at Layer5" path={path} />
      <div className={sub_section ? "sub-header_wrapper" : "programs-page-wrapper"}>
        <Container>
          <div className="program-grid-wrapper">
            <Row style={{
              flexWrap: "wrap"
            }} $Hcenter>
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
                          {...(frontmatter.darkthumbnail !== null && (isDark && frontmatter.darkthumbnail.publicURL !== frontmatter.thumbnail.publicURL) ? frontmatter.darkthumbnail : frontmatter.thumbnail)}
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
