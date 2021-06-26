import React from "react";
import { Row, Col, Container } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { CoursesListWrapper } from "./courseslist.style";
import ContentCard from "../../../components/Learn-Components/Content-Card";
import Button from "../../../reusecore/Button";
import SetupPreReq from "../../../components/Learn-Components/Setup-Pre-Requisites";
import { Link } from "gatsby";


const CoursesList = ({ coursesData, learnPath }) => {
  return (
    <CoursesListWrapper>
      <PageHeader
        title={learnPath}
      />
      <Container>
        <Button url="/learn-ng" title="Go Back" className="go-back-btn" />
        <Row className="course-list">
          <Col sm={0} lg={2} xl={2}>
				SideBar Component
          </Col>
          <Col sm={12} lg={10} xl={10}>
            <SetupPreReq />
            <div className="course-list-cont">
              <h2>Courses</h2>
              <Row className="learning-path-cards">
                {coursesData.map((tutorial) => {
                  return (
                    <Col sm={12} key={tutorial.id}>
                      <Link to={tutorial.fields.course}>
                        <ContentCard chapter={tutorial} />
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </CoursesListWrapper>
  );
};

export default CoursesList;
