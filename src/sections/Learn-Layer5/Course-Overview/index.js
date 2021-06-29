import React from "react";
import { CourseOverviewWrapper } from "./courseoverview.style";
import { Row, Col } from "../../../reusecore/Layout";
import Image from "../../../components/image";
import { Link } from "gatsby";

import {
  IoDocumentTextOutline,
  IoVideocam,
  IoChevronBackOutline,
} from "react-icons/io5";
import Button from "../../../reusecore/Button";
import ChapterCard from "../../../components/Learn-Components/Chapter-Card";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SRLWrapper } from "simple-react-lightbox";

const CourseOverview = ({ course, chapters }) => {

  const getChapterTitle = (chapter, chapterList) => {
    for(let i=0; i < chapterList.length; i++) {
      if (chapterList[i].fields.chapter === chapter)
        return chapterList[i];
    }
  };

  return (
    <CourseOverviewWrapper>
      <div
        style={{ backgroundColor: course.frontmatter.themeColor }}
        className="course-overview-hero"
      >
        <div className="course-info-content">
          <div className="course-back-btn">
            <Link to={"/learn-ng/" + course.fields.learnpath}>
              <IoChevronBackOutline /> <h4>Courses</h4>
            </Link>
          </div>
          <div className="course-hero-head">
            <h2>{course.frontmatter.courseTitle}</h2>
            <p>{course.frontmatter.description}</p>
          </div>
          <div className="content-info">
            {/* <div className="info">
              <IoVideocam /> <span>{course.frontmatter.videos} videos</span>
            </div> */}
            <div className="info">
              <IoDocumentTextOutline />{" "}
              <span>{course.frontmatter.toc.length} Chapters</span>
            </div>
          </div>
          <Button title="Get Started" url={`istio/${course.frontmatter.toc[0]}`} />
        </div>
        <div className="course-hero-head-image">
          <Image
            {...course.frontmatter.cardImage}
            alt={course.frontmatter.title}
          />
        </div>
      </div>
      <div className="content-section-container" id="toc">
        <Row className="content-section">
          <Col md={12} lg={8} xl={7}>
            <h2 className="overview">Overview</h2>
            <SRLWrapper>
              <MDXRenderer>{course.body}</MDXRenderer>
            </SRLWrapper>
            <h2 className="course-toc">Table Of Contents</h2>
            {course.frontmatter.toc.map((item, index) => (
              <Link
                key={index}
                to={`./istio/${item}`}
                className="chapter-link"
              >
                <ChapterCard chapterNum={index+1} chapter={getChapterTitle(item, chapters)} />
              </Link>
            ))}
          </Col>
          <Col md={12} lg={4} xl={5}>
            <div className="service-meshes-you-can-learn">
              <h2>Service Meshes You can Learn</h2>
              <div className="service-mesh-courses">
                {course.frontmatter.meshesYouLearn.map((mesh, index) => (
                  <a key={index} className="course">
                    <Image
                      {...mesh.imagepath}
                      className="docker"
                      alt={mesh.name}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="join-community_text-and_button">
              <h2>Contribute to Layer5</h2>
              <Button
                secondary
                title="Join The Community"
                url="http://slack.layer5.io/"
              />
            </div>
            <div className="engage_text-and_button">
              <h2>Engage in Discussion</h2>
              <Button
                secondary
                title="Join The Service Mesh Forum"
                url="https://discuss.layer5.io/"
              />
            </div>
          </Col>
        </Row>
      </div>
    </CourseOverviewWrapper>
  );
};

export default CourseOverview;
