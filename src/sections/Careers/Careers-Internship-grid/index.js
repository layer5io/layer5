import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import InternshipSectionWrapper from "./InternshipPage.style";
import ProgramsGrid from "../Careers-Programs-grid/index";
import FAQ from "../../General/Faq";


const UEM_Img = "../../../assets/images/partners/uem_partner.png";
const Univ_Texas_Img = "../../../assets/images/partners/texas_partner.png";
const Peek_Img = "../../../assets/images/layer5/layer5-peek-card-edited.svg";

const InternshipPage = ({ hide_heading }) => {
  const opportunities = useStaticQuery(
    graphql`
      query allOppornuties {
        internships: allMdx(
          sort: { fields: [frontmatter___title], order: ASC }
          filter: {
            fields: { collection: { eq: "careers" } }
            frontmatter: { published: { eq: true }, type: { eq: "internship" } }
          }
        ) {
          nodes {
            id
            frontmatter {
              title
              abstract
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 500, layout: CONSTRAINED)
                }
                extension
                publicURL
              }
            }
            fields {
              slug
            }
          }
        }
        jobs: allMdx(
          sort: { fields: [frontmatter___title], order: ASC }
          filter: {
            fields: { collection: { eq: "careers" } }
            frontmatter: { published: { eq: true }, type: { eq: "job" } }
          }
        ) {
          nodes {
            id
            frontmatter {
              title
              abstract
              thumbnail {
                childImageSharp {
                  gatsbyImageData(width: 500, layout: CONSTRAINED)
                }
                extension
                publicURL
              }
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );

  let OpportunityCard = ({ frontmatter, fields }) => (
    <Col className="opportunity-col">
      <Link to={fields.slug}>
        <div className="opportunity-card">
          <div className="peek-card">
            <StaticImage style={{ width : "5rem", }} src={Peek_Img} alt="Peek card effect" />
          </div>
          <div className="text">
            <h3>{frontmatter.title}</h3>
            <p>{frontmatter.abstract}</p>
          </div>
        </div>
      </Link>
    </Col>
  );

  return (
    <InternshipSectionWrapper>
      {!hide_heading && (
        <PageHeader
          title="Internships at Layer5"
          path="Careers > Internships"
          subtitle="Available Opportunities"
        />
      )}
      <Container>
        <div className="oppurtunities">
          <div>
            <h2>
              <span>Explore our world-class</span> internship experience
            </h2>
            <div className="grid">
              <Row className="oppurtunities_row">
                {opportunities.internships.nodes.map((data) => (
                  <OpportunityCard {...data} key={data.id} />
                ))}
              </Row>
            </div>
          </div>
          <p>
            At Layer5, we take our internships seriously. Interns are expected
            to work hard, learn much, and be recognized for doing so. Past
            interns have presented their projects at KubeCon, DockerCon, and
            similar technical conferences.
          </p>
          <p>
            Our community of contributors is the key ingredient to the success
            of every one of our projects. Interns engage as part of the
            community. Whether interning directly with Layer5 or through one of
            Layer5's partner programs, your contributions will affect people
            you've never met as the Layer5 projects are being broadly referenced
            and used in organizations large and small.
          </p>
          <div>
            <h2>
              <span>Join other industry leaders in a </span> full-time position
            </h2>
            <div className="grid">
              <Row className="oppurtunities_row full_time">
                {opportunities.jobs.nodes.map((data) => (
                  <OpportunityCard {...data} key={data.id} />
                ))}
              </Row>
            </div>
          </div>
          <div>
            <ProgramsGrid sub_section={true} />
          </div>
          <FAQ category={["internships"]} />
          <div>
            <h1>Participating Partners</h1>
            <div className="grid">
              <Row className="oppurtunities_row">
                <Col className="partner-col">
                  <div className="partners-card">
                    <div className="partner-image">
                      <StaticImage src={Univ_Texas_Img}
                        alt="University of Texas, Austin"
                      />
                    </div>
                    <h5>UT Austin Coding Boot Camp</h5>
                  </div>
                </Col>
                <Col className="partner-col">
                  <div className="partners-card">
                    <div className="partner-image">
                      <StaticImage src={UEM_Img} alt="UEM Jaipur" />
                    </div>
                    <h5>UEM Jaipur</h5>
                  </div>
                </Col>
              </Row>
              <Row>
                <p>
                  <br />
                  The Layer5 community includes software engineers, researchers,
                  students, artists, system administrators, operators and web
                  designers -- all of whom will be happy to help you get
                  started. We believe that all contributors should be afforded a
                  safe and friendly environment for constructive learning. Our
                  projects are improved through diversity and empathic
                  community.
                </p>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </InternshipSectionWrapper>
  );
};

export default InternshipPage;
