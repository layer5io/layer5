import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Row, Col } from "../../../reusecore/Layout";
import Image from "../../../components/image";
import Button from "../../../reusecore/Button";
import styled from "styled-components";

export const WorkshopsListWrapper = styled.div`

    margin: 4rem 0;

    .workshops-col {
        margin: auto;
    }
	.workshop-section-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: auto;
        padding: 8rem 6rem;
        background: rgba( 0, 179, 159, 0.1);
    }
    .workshop-thumbnails {
        height: 14rem;

        img {
            height: 100%;
        }
    }
    @media screen and (max-width: 1600px) {
        .workshop-section-wrapper {
            padding: 8rem 4.5rem;
        }
    }
    @media screen and (max-width: 1400px) {
        .workshop-section-wrapper {
            padding: 6rem 3.5rem;
        }
        .workshop-thumbnails {
            height: 12rem;
        }
    }
    @media screen and (max-width: 1200px) {
        .workshops-card {
            margin: 1rem auto;
            max-width: 45%;
        }
    }
    @media screen and (max-width: 800px) {
        .workshops-col {
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
    @media screen and (max-width: 600px) {
        .workshops-col {
            flex: 0 0 100%;
            max-width: 100%;
        }
        .workshops-card {
            max-width: 100%;
        }
    }
`;


const WorkshopsSection = () => {
    const data = useStaticQuery(
        graphql`
            query workshopsList {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "workshops" } } }
                ) {
                    nodes {
                        frontmatter {
                            thumbnail {
                                childImageSharp {
                                    fluid(maxWidth: 1000) {
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

    return (
        <WorkshopsListWrapper>
            <div className="workshop-section-wrapper">
                <Col xs={12} md={3} className="workshops-col">
                    <h1>Workshops</h1>
                    <p>Register for the service mesh workshops given by the experts at Layer5 and learn how to <i>mesh</i></p>
                    <div className="see-more-button">
                        <Button primary title="Checkout all workshops" url="workshops"/>
                    </div>
                </Col>
                <Col xs={12} md={9} className="workshops-col">
                    <Row>
                        {data.allMdx.nodes.slice(0, 3).map(({id, frontmatter, fields, body }) => (
                            <Col xs={12} sm={6} xl={4} className="workshops-card" key={id}>
                                <Link to={fields.slug} >
                                    <div className="workshop-thumbnails">
                                        <img src={frontmatter.thumbnail.publicURL} alt={frontmatter.title} />
                                    </div>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </div>
        </WorkshopsListWrapper>
    );
};

export default WorkshopsSection;
