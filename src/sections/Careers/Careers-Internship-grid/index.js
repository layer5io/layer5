import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../../reusecore/Layout";
import PageHeader from "../../../reusecore/PageHeader";
import Button from "../../../reusecore/Button";
import {FaArrowRight} from "react-icons/fa";
import InternshipSectionWrapper from "./InternshipPage.style";
import ProgramsGrid from "../Careers-Programs-grid/index";
import UEM_Img from "../../../assets/images/partners/uem_partner.png";
import Univ_Texas_Img from "../../../assets/images/partners/texas_partner.png";

const InternshipPage = ({ hide_heading }) => {
  const opportunities = useStaticQuery(
    graphql`
            query allOppornuties{
                internships: allMdx(
                    sort: { fields: [frontmatter___title], order: ASC }
                    filter: { fields: { collection: { eq: "careers" } }, frontmatter: { published: { eq: true }, type: { eq: "internship" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            abstract
                            thumbnail{
                                childImageSharp{
                                    fluid(maxWidth: 500){
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
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
                    filter: { fields: { collection: { eq: "careers" } }, frontmatter: { published: { eq: true }, type: { eq: "job" } } }
                ) {
                    nodes {
                        id
                        frontmatter {
                            title
                            abstract
                            thumbnail{
                                childImageSharp{
                                    fluid(maxWidth: 500){
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
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


  let OpportunityCard = ({frontmatter, fields }) => (
    <Col className="opportunity-col">
      <Link to={fields.slug}>
        <div className="opportunity-card">
          <h3>{frontmatter.title}</h3>
          <p>{frontmatter.abstract}</p>
        </div>
      </Link>
    </Col>
  );

  return (
    <InternshipSectionWrapper>
      { !hide_heading && (
        <PageHeader title="Internships at Layer5" path="Careers > Internships" subtitle="Available Opportunities"/>
      )}
      <Container>
        <p>
                    At Layer5, we take our internships seriously. Interns are expected to work hard, learn much, and be recognized for doing so. Past interns have presented their projects at KubeCon, DockerCon, and similar technical conferences.
        </p>
        <p>
                    Our community of contributors is the key ingredient to the success of every one of our projects. Interns engage as part of the community. Whether interning directly with Layer5 or through one of Layer5's partner programs, your contributions will affect people you've never met as the Layer5 projects are being broadly referenced and used in organizations large and small.
        </p>

        <div className="oppurtunities">
          <div>
            <h2><span>Explore our world-class</span> internship experience</h2>
            <div className="grid">
              <Row className="oppurtunities_row">
                {opportunities.internships.nodes.map((data) => (
                  <OpportunityCard {...data } key={data.id}/>
                ))}
              </Row>
            </div>
          </div>
          <div>
            <h2><span>Join other industry leaders in a </span> full-time position</h2>
            <div className="grid">
              <Row className="oppurtunities_row full_time">
                {opportunities.jobs.nodes.map((data) => (
                  <OpportunityCard {...data } key={data.id}/>
                ))}
              </Row>
            </div>
          </div>
          <div>
            <ProgramsGrid sub_section={true}/>
          </div>
          <p>
                      The Layer5 community includes software engineers, researchers, students, artists, system administrators,
                      operators and web designers -- all of whom will be happy to help you get started. We believe that all contributors should be afforded a safe and friendly environment for constructive learning. Our projects are improved through diversity and empathic community.
          </p>
          <div>
            <h1>Participating Partners</h1>
            <div className="grid">
              <Row className="oppurtunities_row">
                <Col className="partner-col">
                  <a href="https://layer5.io/assets/careers/internships/UT%20Austin%20Boot%20Camp%20-%20Meshery%20Flyer.pdf" target="_blank" rel="noreferrer">
                    <div className="partners-card">
                      <div className="partner-image">
                        <img src={Univ_Texas_Img} alt="University of Texas, Austin" />
                      </div>
                      <h5>UT Austin Coding Boot Camp</h5>
                      <Button secondary title={<FaArrowRight />} className="arrow_icon" />
                    </div>
                  </a>
                </Col>
                <Col className="partner-col">
                  <a href="https://layer5.io/assets/careers/internships/UEM%20Jaipur%20-%20Meshery%20Flyer.pdf" target="_blank" rel="noreferrer">
                    <div className="partners-card">
                      <div className="partner-image">
                        <img src={UEM_Img} alt="UEM Jaipur" />
                      </div>
                      <h5>UEM Jaipur</h5>
                      <Button secondary title={<FaArrowRight />} className="arrow_icon" />
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </InternshipSectionWrapper>
  );
};

export default InternshipPage;
