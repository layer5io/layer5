import React from "react";
import { Row, Col } from "../../../../reusecore/Layout";
import Slider from "react-slick";
import styled from "styled-components";

const HowIntegrationWorksWrapper = styled.section`

  background-color: ${props => props.theme.DarkTheme ? "#101010" : "#F7F7F7"};
	padding-bottom: 2rem;

	.section-data {
		padding: 1rem 2rem 0;
		text-align: center;
	}

	.section-header {
		margin-top: 2rem;
		h4 {
			textTransform: uppercase;
		}
		p {
			font-size: 1.25rem;
			line-height: 1.25rem;
			margin: 1rem 0 0;

			span {
				color: ${props => props.theme.secondaryColor};
			}
		}
	}
	.integration-section {
		margin: 3rem auto;
		max-width: 85%;

		.integration-section-row {
			margin: 4rem 0;
			align-items: center;
		}
		h2, h4 {
				color: black;
			}
		.integration-section-data {
			h1, h3, p {
				text-align: start; color: ${props => props.theme.primaryColor};
			}
		}

		.integration-section-caraousel {
			.slick-slider {
				.slick-list {
					max-width: 50rem;

					.slick-slide {
						img {
							max-height: 20rem;
							margin: auto;
						}
					}
				}

				.slick-arrow{
					display: none !important;
				}

				.slick-dots {
					bottom: 0;
					top: 0;
					left: 52rem;
					width: 8rem;

					li {
						display: block;
						width: 100%;
						height: auto;
						margin: 1rem auto;
						opacity: 0.6;

						a {
							display: block;

							img {
								height: 5rem;
								vertical-align: middle;
							}
						}
					}
				}
				.slick-dots 
					li.slick-active {
						opacity: 1;
					}
				}
			}
		}
	}

	@media screen and (max-width: 1600px) {
		.integration-section .integration-section-caraousel .slick-slider {
			.slick-list {
				max-width: 38rem;
			}

			.slick-dots {
				left: 40rem;
				width: 6rem;

				li a img {
					height: 4rem;
				}
			}
		}
	}

	@media screen and (max-width: 1200px) {
		padding-bottom: 2rem;
		.integration-section {
			.integration-section-row {
				margin: 2.5rem 0;
			}

			.integration-section-data {
				h3, p {
					text-align: center;
				}
			}

			.integration-section-caraousel .slick-slider {
				.slick-list {
					max-width: 80%;
					margin: 2rem auto;
				}

				.slick-dots {
					left: 92%;
				}
			}
		}
	}

	@media screen and (max-width: 960px) {
		.integration-section .integration-section-caraousel .slick-slider .slick-list {
			.slick-slide {
				img {
					max-height: 16rem;
				}
			}
		}
	}

	@media screen and (max-width: 700px) {
		.integration-section {
			max-width: 95%;

			.integration-section-caraousel .slick-slider {
				.slick-list {
					max-width: 85%;
					margin: 2rem 0;
				}
				.slick-dots {
					left: 90%;
					width: 4rem;

					li a img {
						height: 2.5rem;
					}
				}
			}
		}
	}

	@media screen and (max-width: 500px) {
		.integration-section {
			max-width: 95%;

			.integration-section-caraousel .slick-slider {
				.slick-list {
					max-width: 80%;
					.slick-slide {
						img {
							max-height: 10rem;
						}
					}
				}
				.slick-dots {
					left: 85%;
					top: -1rem;
				}
			}
		}
	}
`;


const HowIntegrationWorks = ({ name, howitworks, howitworksdetails, slides }) => {

  const settings = {
    customPaging: (i) => {
      return (
        <a>
          <img src={slides[i].publicURL} alt={`Slide ${i}`} />
        </a>
      );
    },
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    vertical: true,
    verticalSwiping: true
  };

  return (
    <HowIntegrationWorksWrapper>
      <div className="section-data">
        <div className="section-header">
          <h4 >How it Works</h4>
          <h1>See It in Action </h1>
          <p>Better together - {name} with <span>Meshery</span></p>
        </div>
        <div className="integration-section">
          <Row className="integration-section-row">
            <Col xs={12} xl={4} className="integration-section-data">
              <h3>{howitworks != null ? howitworks : "Docker with Meshery" }</h3>
              <p>
                {howitworksdetails != null ? howitworksdetails : "The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes."}
              </p>
            </Col>
            <Col xs={12} xl={8} className="integration-section-caraousel">
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div key={index}>
                    <img src={slide.publicURL} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </div>
      </div>
    </HowIntegrationWorksWrapper>
  );
};

export default HowIntegrationWorks;
