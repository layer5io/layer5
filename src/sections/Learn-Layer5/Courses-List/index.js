import React from "react";
import { Row, Col, Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { CoursesListWrapper } from "./courseslist.style";
import ContentCard from "../../../components/Learn-Components/Content-Card";
import Button from "../../../reusecore/Button";
import SetupPreReq from "../../../components/Learn-Components/Setup-Pre-Requisites";
import { Link } from "gatsby";
// import TOC from "../../../components/Learn-Components/TOC-Learning-Path";


const CoursesList = ({ coursesData, learnPath}) => {
  return (
    <CoursesListWrapper>
      <PageHeader
        title={learnPath}
      />
      <Container>
        {/* <Row className="course-list">
          <Col sm={0} lg={3} xl={3}>
            <TOC coursesData={coursesData} />
          </Col> */}
        <div sm={12} lg={9} xl={9} className="content">
          <SetupPreReq />
          <div className="course-list-cont" id="courses-list">
            <h2>Courses</h2>
            <div className="learning-path-cards">
              {coursesData.map((tutorial) => {
                return (
                  <Col sm={12} key={tutorial.id} name={tutorial.frontmatter.courseTitle}>
                    <Link to={tutorial.fields.course}>
                      <ContentCard chapter={tutorial} />
                    </Link>
                  </Col>
                );
              })}
            </div>
          </div>
        </div>
        {/* </Row> */}
      </Container>
    </CoursesListWrapper>
  );
};

export default CoursesList;
