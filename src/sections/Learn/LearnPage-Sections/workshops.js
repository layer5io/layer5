import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Row, Col } from "../../../reusecore/Layout";
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
        height: 13rem;

        img {
            height: 100%;
        }
    }
    @media screen and (max-width: 1600px) {
        .workshop-section-wrapper {
            padding: 8rem 4.5rem;
        }
        .workshops-card {
            flex: 0 0 50%;
            max-width: 50%;
            margin: 1rem auto;
        }
    }
    @media screen and (max-width: 1400px) {
        .workshop-section-wrapper {
            padding: 6rem 3.5rem;
        }
    }
    @media screen and (max-width: 1100px) and (min-width: 993px) {
        .workshops-col {
            h1 {
                font-size: 2.75rem; //Done to avoid text overlap with images
            }
        }
    }
    @media screen and (max-width: 950px) {
        .workshops-col {
            flex: 0 0 100%;
            max-width: 100%;
            text-align: center;
        }
        .workshops-card {
            flex: 0 0 50%;
            max-width: 50%;
        }
        .workshop-thumbnails {
            height: 11rem;
        }
    }
    @media screen and (max-width: 768px) {
        .workshops-card {
            flex: 0 0 100%;
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
            {data.allMdx.nodes.slice(0, 3).map(({id, frontmatter, fields}) => (
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
