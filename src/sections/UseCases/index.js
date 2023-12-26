import React from "react";
import UseCasesWrapper from "./usecases.style";
import { Container, Row, Col } from "../../reusecore/Layout";
import WorkshopCard from "../../components/Workshop-Card";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import { FaRegWindowMaximize } from "@react-icons/all-files/fa/FaRegWindowMaximize";
// import use_case_1 from "../../assets/images/comments/use-case-1.png";
// import use_case_2 from "../../assets/images/comments/use-case-2.png";

const CARD_DATA = [
  {
    id: 1,
    frontmatter: {
      title: "Whiteboarding",
      abstract: "The Whiteboarding and Freestyle Drawing feature introduces versatile drawing capabilities within MeshMap.",
      thumbnail: {
        childImageSharp: false,
        extension: "png",
        publicURL: "https://layer5.io/static/whiteboard-1e9f33293030bc98a01945af9740863f.png",
      },
      status: "delivered",
    },
    url: "https://layer5.io/whiteboard",
  },
  {
    id: 2,
    frontmatter: {
      title: "Brainstorm with commenting",
      abstract: "MeshMap's Designer Mode offers a powerful collaboration feature through comments.",
      thumbnail: {
        childImageSharp: false,
        extension: "png",
        publicURL: "https://layer5.io/static/comment.b77548b0.svg",
      },
      status: "delivered",
    },
    url: "https://layer5.io/comments",
  },
  {
    id: 3,
    frontmatter: {
      title: "Whiteboarding",
      abstract: "The Whiteboarding and Freestyle Drawing feature introduces versatile drawing capabilities within MeshMap.",
      thumbnail: {
        childImageSharp: false,
        extension: "png",
        publicURL: "https://layer5.io/static/whiteboard-1e9f33293030bc98a01945af9740863f.png",
      },
      status: "delivered",
    },
    url: "https://layer5.io/whiteboard",
  },
  {
    id: 4,
    frontmatter: {
      title: "Brainstorm with commenting",
      abstract: "MeshMap's Designer Mode offers a powerful collaboration feature through comments.",
      thumbnail: {
        childImageSharp: false,
        extension: "png",
        publicURL: "https://layer5.io/static/comment.b77548b0.svg",
      },
      status: "delivered",
    },
    url: "https://layer5.io/comments",
  },
];

const UseCases = () => {
  const content = false;
  const ID = "";

  return (
    <UseCasesWrapper>
      <div className="use-cases-title" >
        <h2 className="heading"> Platform Engineering done right </h2>
        <p className="description"> Infrastructure diagraming is a breeze with Meshery. Configuration and operational design reviews between SRE, Platform Engineer, DevOps pro, or Developer </p>
      </div>

      <Container>
        <div className="workshop-grid-wrapper">
          <Row>
            {CARD_DATA.map(({ id, frontmatter, url }) => (
              <Col {...content && ID === id ? { xs: 12, sm: 12, lg: 12 } : { xs: 12, sm: 6, lg: 4 } } key={id} className="workshop-grid-col">
                <div className="workshop-grid-card">
                  <WorkshopCard frontmatter={frontmatter} content={content} ID={ID} id={id} />
                  <div className="externalLink">
                    <a href={url} className="siteLink"><FaRegWindowMaximize style={{ height: "25px", width: "auto" }} /></a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <Partners />
      <SeeYou />
    </UseCasesWrapper>
  );
};

export default UseCases;