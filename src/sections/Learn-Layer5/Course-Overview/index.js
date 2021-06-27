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
import ContentCard from "../../../components/Learn-Components/Content-Card";

const CourseOverview = ({ course, chapters }) => {
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
            <div className="info">
              <IoVideocam /> <span>{course.frontmatter.videos} videos</span>
            </div>
            <div className="info">
              <IoDocumentTextOutline />{" "}
              <span>{course.frontmatter.lectures} lectures</span>
            </div>
          </div>
          <Button title="Get Started" url="#toc" />
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
            <h2>Content</h2>
            {chapters.map((chapter, index) => (
              <Link
                key={index}
                to={`./istio/${chapter.fields.chapter}`}
                className="chapter-link"
              >
                <ContentCard chapter={chapter} />
              </Link>
            ))}
          </Col>
          <Col md={12} lg={4} xl={5}>
            <div className="service-meshes-you-can-learn">
              <h2>Service Meshes You can Learn</h2>
              <div className="service-mesh-courses">
                {course.frontmatter.meshesYouLearn.map((mesh, index) => (
                  <a key={index} className="course">
                    {console.log(mesh.imagepath)}
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
