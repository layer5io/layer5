import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Container, Row, Col } from "../../reusecore/Layout";
import PageHeader from "../../reusecore/PageHeader";
import Button from "../../reusecore/Button";
import Image from "../../components/image";

import InternshipSectionWrapper from "./InternshipPage.style";


const InternshipPage = ({ hide_heading })=>{
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
        <Col xs={12} sm={6} lg={4} >
            <Link to={fields.slug}>
                <div className="opportunity">
                    <div className="opportunity_icon">
                        <Image
                            {...frontmatter.thumbnail}
                            imgStyle={{ objectFit: "contain" }}
                            alt={frontmatter.title}
                        />
                    </div>
                    <h3>{frontmatter.title}</h3>
                    <p>{frontmatter.abstract}</p>
                </div>
            </Link>
        </Col>
    );

    return (
        <InternshipSectionWrapper>
            { !hide_heading && (
                <PageHeader title="Internships" path="Careers > Internships"/>
            )}
            <div className="internships-page-wrapper">
                <Container>
                    <p>
                        <b>Available Opportunities</b>
                    </p>
                    <p>
                    The key component of these projects is our community of contributors.
                    Some contributors intern under the Google Summer of Code program, while others intern unpaid directly with Layer5.
                    Irrespective, your contributions will affect people you've never met as the Layer5 projects are
                    being broadly referenced and used in organizations large and small.
                    The Layer5 community includes software engineers, researchers, students, artists, system administrators,
                    operators and web designers -- all of whom will be happy to help you get started.
                    </p>
                    <p>
                    We believe that all contributors should expect and be part of a safe and friendly environment for constructive contribution.
                    We can more effectively and successfully compare and challenge different ideas to find the best solutions for advancement,
                    while building the size, diversity, and strength of our community.
                    </p>
                    <br/>
                    <div>
                        <b>Internships</b>
                        <div className="grid">
                            <Row>
                                {opportunities.internships.nodes.map((data) => (
                                    <OpportunityCard {...data } key={data.id}/>
                                ))}
                            </Row>
                        </div>
                        <br/>
                        <div>
                            <b>Full-Time Opportunities</b>
                            <div className="grid">
                                <Row>
                                    {opportunities.jobs.nodes.map((data) => (
                                        <OpportunityCard {...data } key={data.id}/>
                                    ))}
                                </Row>
                            </div>
                        </div>
                        <p>
                            <b className="black-text">Participating Partners</b>
                            <ul>
                                <li><b>UT Austin Coding Boot Camp</b> - <a href="https://layer5.io/assets/careers/internships/UT%20Austin%20Boot%20Camp%20-%20Meshery%20Flyer.pdf">Internship Flyer</a></li>
                                <li><b>UEM Computer Science and Engineering</b> - <a href="https://layer5.io/assets/careers/internships/UEM%20Jaipur%20-%20Meshery%20Flyer.pdf">Internship Flyer</a>,<a href="https://uem.edu.in/blog/what-is-open-source/"> Learn More </a></li>
                            </ul>
                        </p>
                    </div>
                    <div className="apply-button">
                        <h3>
                            <a href="mailto:jobs@layer5.io">
                                <Button primary title="Join Today" /> 
                            </a>
                        </h3>
                    </div>
                </Container>
            </div>
        </InternshipSectionWrapper>
    );
};

export default InternshipPage;
