import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import UseCasesWrapper from "./usecases.style";
import { Container, Row, Col } from "../../reusecore/Layout";
import WorkshopCard from "../../components/Workshop-Card";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";
import { FaRegWindowMaximize } from "@react-icons/all-files/fa/FaRegWindowMaximize";
// import use_case_1 from "../../assets/images/comments/use-case-1.png";
// import use_case_2 from "../../assets/images/comments/use-case-2.png";


const UseCases = () => {
  const content = false;
  const ID = "";

  const data = useStaticQuery(
    graphql `query allUseCases {
        allMdx(
          filter: {fields: {collection: {eq: "use-cases"}}, frontmatter: {category: {eq: "usecase"}}}
        ) {
          nodes {
            id
            frontmatter {
              title
              abstract
              thumbnail {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
                extension
                publicURL
              }
              eurl
              category
              status
            }
          }
        }
      }
    `
  );


  return (
    <UseCasesWrapper>
      <div className="use-cases-title" >
        <h2 className="heading"> Platform Engineering done right </h2>
        <p className="description"> Infrastructure diagraming is a breeze with Meshery. Configuration and operational design reviews between SRE, Platform Engineer, DevOps pro, or Developer </p>
      </div>

      <Container>
        <div className="workshop-grid-wrapper">
          <Row>
            {data.allMdx.nodes.map(({ id, frontmatter }) => (
              <Col {...content && ID === id ? { xs: 12, sm: 12, lg: 12 } : { xs: 12, sm: 6, lg: 4 } } key={id} className="workshop-grid-col">
                <div className="workshop-grid-card">
                  <WorkshopCard frontmatter={frontmatter} content={content} ID={ID} id={id} />
                  <div className="externalLink">
                    <a href={frontmatter.eurl} className="siteLink"><FaRegWindowMaximize style={{ height: "25px", width: "auto" }} /></a>
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