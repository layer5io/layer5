import React from "react";
// import Card from "../../../components/Card";
import { Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import { graphql, Link } from "gatsby";
import { LearnPathWrapper } from "./courseslist.style";
import ContentCard from "../../../components/Learn-Components/content-card";
import Button from "../../../reusecore/Button";
import Layout from "../../../components/layout";
import SEO from "../../../components/seo";
import Navigation from "../../General/Navigation";
import Footer from "../../General/Footer";
import { GlobalStyle } from "../../app.style";
import theme from "../../../theme/app/themeStyles";
import { ThemeProvider } from "styled-components";
import GetStarted from "../../../components/Learn-Components/get-started-section";

export const query = graphql`
  query CoursesBySlug($learnpath: String!) {
    allMdx(
      filter: {
        fields: { learnpath: { eq: $learnpath } }
        frontmatter: { docType: { eq: "Course" } }
      }
    ) {
      nodes {
        id
        frontmatter {
          courseTitle
          description
          themeColor
          videos
          lectures
          cardImage {
            childImageSharp {
              gatsbyImageData(width: 200, layout: CONSTRAINED)
            }
            extension
            publicURL
          }
        }
        fields {
          slug
          course
          learnpath
        }
      }
    }
  }
`;
const LearningPathGrid = (coursesData) => {
  console.log(coursesData.data);
  const getTitle = (learnPathTitle) => {
    const learnPath = learnPathTitle.split("-");
    let str = learnPath.reduce((title, name, idx) => {
      if (idx == learnPath.length - 1)
        return title + name.charAt(0).toUpperCase() + name.slice(1);
      else return title + name.charAt(0).toUpperCase() + name.slice(1) + " ";
    }, "");
    return str;
  };

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO
          title="Learn Service Mesh"
          description="Learn Service Meshes: Istio, Linkerd, Envoy, Consul, Maesh, Kuma, App Mesh, Citrix, Tanzu Service Mesh"
          image="/images/workshops.png"
        />
        <Navigation />
        <PageHeader
          title={getTitle(coursesData.data.allMdx.nodes[0].fields.learnpath)}
        />

        <LearnPathWrapper>
          <Button url="/learn-ng" title="Go Back" className="go-back-btn" />
          <Row className="course-list">
            <Col sm={0} lg={2} xl={3}>
              SideBar Component
            </Col>
            <Col sm={12} lg={10} xl={9}>
              <GetStarted />
              <div className="course-list-cont">
                <h2>Courses</h2>
                <Row className="learning-path-cards">
                  {coursesData.data.allMdx.nodes.map((tutorial) => {
                    return (
                      <Col sm={12} xl={10} key={tutorial.id}>
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
        </LearnPathWrapper>

        <Footer />
      </Layout>
    </ThemeProvider>
  );
};

export default LearningPathGrid;
