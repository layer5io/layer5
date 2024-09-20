import React from "react";
import InfoWrapper from "./learninfo.style";
import { Col, Row } from "../../../reusecore/Layout";

const filterData = (data, dtype, pgtype) => {
  const dataList = [];

  data.map((val) => {
    if (pgtype && val["node"]["fields"]["pageType"] === "chapter") {
      if (val["node"]["fields"][dtype])
        dataList.push(val["node"]["fields"][dtype]);
    } else if (pgtype === "") {
      if (val["node"]["fields"][dtype])
        dataList.push(val["node"]["fields"][dtype]);
    }
  });

  const newData = [...new Set(dataList)];
  return newData.length;
};


const LearnInfo = ({ courses, chapters, meshes }) => {

  const coursesCount = filterData(courses, "course", "");
  const chaptersCount = filterData(chapters, "chapter", "");
  const meshesCount = filterData(meshes, "section", "chapter");

  return (
    <InfoWrapper>
      <Row className="info-row">
        <Col xs={12} sm={6} lg={4}>
          <h2>{coursesCount} {coursesCount === 1 ? "course" : "courses"}</h2>
          <p>
          Cloud-native is about how, not where. These learning paths will teach you the principles, patterns, and technologies that help you build more scalable, changeable, resilient, and manageable software.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <h2>{chaptersCount} {chaptersCount === 1 ? "chapter" : "chapters"}</h2>
          <p>
            Start learning with step-by-step, hands-on, command-line tutorials, videos, and hosted terminal sessions. Actionable examples help you learn to provision, secure, connect, or run any application on any infrastructure.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <h2>{meshesCount} {meshesCount === 1 ? "technology" : "technologies"}</h2>
          <p>Learn the core principles behind cloud native infrastructure in context of popular CNCF projects and platforms like Kubernetes, AWS, Azure, and GCP.</p>
        </Col>
      </Row>
    </InfoWrapper>
  );
};

export default LearnInfo;
