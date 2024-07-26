import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import UseCasesWrapper from "./useCases.style";
import { Container, Row, Col } from "../../reusecore/Layout";
import Card from "../../components/Card";
import Partners from "../Home/Partners-home";
import SeeYou from "../SeeYou";

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
        <h2 className="heading"> Platform Engineering done right</h2>
        <p className="description"> Infrastructure diagraming is intuitive with visual architecture of Kubernetes clusters and Cloud services in Meshery. Whether you're an SRE, Platform Engineer, DevOps engineer, developer... Kubernetes configuration and operational design reviews between your engineering teams is a breeze.</p>
      </div>

      <Container>
        <div className="usecases-grid-wrapper">
          <Row>
            {data.allMdx.nodes.map(({ id, frontmatter }) => (
              <Col {...content && ID === id ? { xs: 12, sm: 12, lg: 12 } : { xs: 12, sm: 6, lg: 4 } } key={id} className="workshop-grid-col">
                <div className="usecases-grid-card">
                  <Card frontmatter={{ ...frontmatter, eurl: frontmatter.eurl }} fields={{ slug: frontmatter.eurl }} />
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