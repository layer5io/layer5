import React from "react";
// import Card from "../../../components/Card";
// import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";

import { CourseWrapper } from "./course.style";

const Courses = (data) => {
  return (
    <CourseWrapper>
      <PageHeader title="Learn Layer5 Courses"/>
    </CourseWrapper>
  );
};

export default Courses;
