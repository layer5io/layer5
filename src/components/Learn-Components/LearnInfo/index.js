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
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <h2>{chaptersCount} {chaptersCount === 1 ? "chapter" : "chapters"}</h2>
          <p>
            Learning the service mesh the right way. From the best learing paths
            by the experts at Layer5 and learn how to mesh.
          </p>
        </Col>
        <Col xs={12} sm={6} lg={4}>
          <h2>{meshesCount} service {meshesCount === 1 ? "mesh" : "meshes"}</h2>
          <p>Istio, Linkerd</p>
        </Col>
      </Row>
    </InfoWrapper>
  );
};

export default LearnInfo;
