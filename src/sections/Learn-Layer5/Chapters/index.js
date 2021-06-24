import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import slugify from "../../../utils/slugify";
import { Container, Row, Col } from "../../../reusecore/Layout";
import TOC from "../../../components/Learn-Components/TOC-Chapters";
import { ChapterWrapper } from "./chapters.style";

const Chapters = ({data}) => {
  const { frontmatter, body, fields } = data.mdx;
  return (
    <ChapterWrapper>
      <Container>
        <Row>
          <Col sm={12} md={3}>
            <TOC data={data}/>
            {/* <Service-Meshes-Available /> */}
          </Col>
          <Col sm={12} md={9}>
            <div className="chapter-data">
              <h1 className="chapter-heading">{frontmatter.chapterTitle}</h1>
              <SRLWrapper>
                <MDXRenderer>{body}</MDXRenderer>
              </SRLWrapper>
            </div>
          </Col>
        </Row>
      </Container>
    </ChapterWrapper>
  );
};

export default Chapters;
