import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Row, Col } from "../../../reusecore/Layout";
import Button from "../../../reusecore/Button";
import { feedbackData } from "./feedbackData";
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styled from "styled-components";
import BlockQouteImage from "../../../assets/images/blockquote/quote-left.svg";

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

	.feedback-section {
		margin: 5rem auto;

		img{
			width:4rem;
			height:3rem;
		}
		
		.slick-slider {
			max-width: 1500px;
			margin: auto;

			.slick-list {
				margin: 0 4rem;
			}

			.slick-arrow {
				color: white;
				background: ${props => props.theme.secondaryColor};
				width: 2.75rem;
				height: 2.75rem;
				border-radius: 2rem;

				&:hover {
					background: ${props => props.theme.caribbeanGreenColor};
				}
			}
			
			.slick-prev {
				left: 0rem;
			}

			.slick-next {
				right: 0rem;
			}

			.slick-disabled {
				display: none !important;
			}

			.slick-dots {
				bottom: -2rem;
			}

			.slick-dots li button:before {
        font-size: 0.6rem;
        color: ${props => props.theme.secondaryColor};
			}

			.slick-dots li.slick-active button:before {
				opacity: 1;
				color: ${props => props.theme.secondaryColor};
			}
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

		.feedback-section {
			.slick-slider {
				max-width: 1100px;
			}
		}
	}
	@media screen and (max-width: 1400px) {
		.workshop-section-wrapper {
				padding: 6rem 3.5rem;
		}
	}
	@media screen and (max-width: 1100px) {
		.feedback-section {
			.slick-slider {
				max-width: 700px;
			}
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
	@media screen and (max-width: 700px) {
		.feedback-section {
			.slick-slider {
				max-width: 100%;
			}
		}
	}
	@media screen and (max-width: 450px) {
		.feedback-section {
			.slick-slider {
				.slick-list {
					margin: 0 2rem;
				}
			}
		}
	}
`;


const WorkshopsSection = () => {
  const data = useStaticQuery(
    graphql`
            query workshopsList {
                allMdx(
                    sort: { fields: [frontmatter___date], order: DESC }
                    filter: { fields: { collection: { eq: "service-mesh-workshops" } } }
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

  var settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FiArrowRight />,
    prevArrow: <FiArrowLeft />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <WorkshopsListWrapper>
      <div className="workshop-section-wrapper">
        <Col xs={12} md={3} className="workshops-col">
          <h1>Workshops</h1>
          <p>Register for the service mesh workshops given by the experts at Layer5 and learn how to <i>mesh</i></p>
          <div className="see-more-button">
            <Button primary title="Checkout all workshops" url="/learn/service-mesh-workshops"/>
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
      <div className="feedback-section">
        <Slider {...settings}>
          {
            feedbackData.map((data, index) => {
              return (
                <Col key={index}>
                  <img src={BlockQouteImage} alt="Quote-left" />
                  <p>{data.feedback}</p>
                  <h3>{data.workshop}</h3>
                  <h5>{data.studnt_name}</h5>
                </Col>
              );
            })
          }
        </Slider>
      </div>
    </WorkshopsListWrapper>
  );
};

export default WorkshopsSection;
