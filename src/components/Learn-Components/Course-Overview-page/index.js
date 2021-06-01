import React from "react";
import { CourseOverviewWrapper } from "./course-overview.styles";
import {  Row, Col } from "../../../reusecore/Layout";
import Image from "../../image";

import { Link } from "gatsby";
import { IoDocumentTextOutline, IoVideocam,IoChevronBackOutline } from "react-icons/io5";
import Button from "../../../reusecore/Button";
import ContentCard from "../content-card";



const CourseOverview = ({ course ,chapters }) => {
  
  return (
    <CourseOverviewWrapper>
      <div style={{backgroundColor: course.frontmatter.themeColor}} className="course-overview-hero" >
        <div className="course-info-content">
          <div className="course-back-btn">
            <Link to={"/learn-ng/"+course.fields.learnpath}>
              <IoChevronBackOutline />  <h4>Courses</h4>
            </Link>
          </div>
          <div className="course-hero-head">
            <h2>{course.frontmatter.courseTitle}</h2>
            <p>{course.frontmatter.description}</p>
          </div>
          <div className="content-info">
            <div className="info">
              <IoVideocam /> {course.frontmatter.videos} videos
            </div>
            <div className="info">
              <IoDocumentTextOutline /> {course.frontmatter.lectures} lectures
            </div>
          </div>
          
          <Button title="Get Started" url="#toc" />
          
        </div>
        <div className="course-hero-head-image">
          <Image {...course.frontmatter.cardImage} alt={course.frontmatter.title} />
        </div>
      </div>        
      <div className="content-section-container" id="toc">
        <Row className="content-section">
          <Col md={12} lg={8} xl={7}>
            <h2>Content</h2>
            {
              chapters.map((chapter,index) => (
                <ContentCard key={index} chapter={chapter} />
              ))
            }
          </Col>
          <Col md={12} lg={4} xl={5}>
          
            <div className="join-community">
              <div className="join-community_text-and_button">
                <h2>Contribute to Layer5</h2>
                <Button secondary title="Join The Community" url="http://slack.layer5.io/" />
              </div>
            </div>
            <div className="engage-discussion">
              <div className="engage_text-and_button">
                <h2>Engage in Discussion</h2>
                <Button secondary title="Join The Service Mesh Forum" url="https://discuss.layer5.io/" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </CourseOverviewWrapper>
  );
};

export default CourseOverview;