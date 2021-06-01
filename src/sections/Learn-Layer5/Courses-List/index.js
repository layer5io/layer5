import React from "react";
// import Card from "../../../components/Card";
import {  Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { graphql } from "gatsby";
import { LearnPathWrapper } from "./courseslist.style";
import CardComponent from "../../../components/Learn-Components/Card-Component";
import Button from "../../../reusecore/Button";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Navigation from "../../General/Navigation";
import Footer from "../../General/Footer";
import { GlobalStyle } from "../../app.style";
import theme from "../../../theme/app/themeStyles";
import { ThemeProvider } from "styled-components";

export const query = graphql`
  query CoursesBySlug($learnpath: String!) {
    allMdx(
      filter:{fields: {learnpath: {eq: $learnpath}},frontmatter:{docType:{eq:"Course"}}}
        ) {
        nodes{
            id,
            frontmatter{
              courseTitle,
              description,
              themeColor,   
              cardImage{
                childImageSharp {
                  gatsbyImageData(width: 200, layout: CONSTRAINED)
                }
                extension
                publicURL
              },
            }
            fields {
                slug
              course
              learnpath
            }
          }
        }
      }`;
const LearningPathGrid = (coursesData) => {
  console.log(coursesData.data);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Learn Service Mesh"
          description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh"
          image="/images/workshops.png" />
        <Navigation />
        <LearnPathWrapper>
          <PageHeader title="Learn Layer5 Courses List"/>
          <div className="course-list-cont">
            <Button url="/learn-ng" title="Go Back" />
            <Row className="learning-path-cards">
              {
                coursesData.data.allMdx.nodes.map((tutorial,index) => (
                  <Col sm={12} md={6} xl={4} key={index}>
                    <CardComponent tutorial={tutorial} key={index} link={tutorial.fields.course}/>
                  </Col>
                ))
              }
            </Row>
          </div>
        </LearnPathWrapper>
        
        <Footer />
      </Layout>
    </ThemeProvider>
    
  );
};

export default LearningPathGrid;
