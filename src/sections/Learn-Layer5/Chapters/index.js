import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";
import { Container, Row, Col } from "../../../reusecore/Layout";
import TOC from "../../../components/Learn-Components/TOC-Chapters";
import { ChapterWrapper } from "./chapters.style";

const Chapters = ({chapterData, courseData, location}) => {
  const { frontmatter, body } = chapterData;
  return (
    <ChapterWrapper>
      <Container className="chapter-container">
        <Row>
          <Col sm={12} md={3}>
            <TOC courseData={courseData} chapterData={chapterData} location={location} />
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
