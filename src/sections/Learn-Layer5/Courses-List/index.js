import React from "react";
import { Col, Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { CoursesListWrapper } from "./courseslist.style";
import ContentCard from "../../../components/Learn-Components/Content-Card";
import { HiOutlineChevronLeft } from "@react-icons/all-files/hi/HiOutlineChevronLeft";
import SetupPreReq from "../../../components/Learn-Components/Setup-Pre-Requisites";
import { Link } from "gatsby";
// import TOC from "../../../components/Learn-Components/TOC-Learning-Path";


const CoursesList = ({ coursesData, learnPath }) => {
  return (
    <CoursesListWrapper>
      <div className="go-back">
        <Link to={"/learn/learning-paths"}>
          <HiOutlineChevronLeft /> <h3>Learning Paths</h3>
        </Link>
      </div>
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
              {coursesData.map((tutorial, index) => {
                return (
                  <Col sm={12} key={tutorial.id} name={tutorial.frontmatter.courseTitle}>
                    <Link to={tutorial.fields.course}>
                      <ContentCard chapterNum={index+1} chapter={tutorial} />
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
