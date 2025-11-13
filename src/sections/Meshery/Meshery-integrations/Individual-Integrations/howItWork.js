import React from "react";
import { Row, Col } from "../../../../reusecore/Layout";
import Slider from "react-slick";
import styled from "styled-components";

const HowIntegrationWorksWrapper = styled.section`

  background-color: ${props => props.theme.grey101010ToGreyF7F7F7};
	padding-bottom: 2rem;
	transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

	.section-data {
		padding: 1rem 2rem 0;
		text-align: center;
		padding-top: 5rem;
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
			flex-direction: column;
		}
		h2, h4 {
				color: black;
			}
		.integration-section-data {
			width: 100%;
			margin-bottom: 2rem;
			h1, h3, p {
				text-align: center; 
				color: ${props => props.theme.primaryColor};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
			}
		}

		.integration-section-caraousel {
			width: 100%;
			.slick-slider {
				position: relative;
				width: 100%;
				
				.slick-list {
					width: 100%;
					margin: 0 auto;
					overflow: hidden;

					.slick-slide {
						display: flex;
						justify-content: center;
						align-items: center;
						
						img {
							max-width: 100%;
							height: auto;
							max-height: 20rem;
							object-fit: contain;
							margin: auto;
						}
					}
				}

				.slick-arrow {
					display: block !important;
					z-index: 1;
					width: 40px;
					height: 40px;
					background: transparent !important;
					border: none !important;
					box-shadow: none !important;
					&:before {
						color: ${props => props.theme.secondaryColor};
						font-size: 2rem;
						opacity: 1;
					}
					&.slick-prev {
						left: -50px;
					}
					&.slick-next {
						right: -50px;
					}
				}

				.slick-dots {
					bottom: -2rem;
					width: 100%;
					display: flex !important;
					justify-content: center;
					
					li {
						display: inline-block;
						width: 10px;
						height: 10px;
						margin: 0 5px;
						
						button {
							width: 10px;
							height: 10px;
							padding: 0;
							border-radius: 50%;
							background: ${props => props.theme.primaryColor};
							opacity: 0.5;
							border: none;
							
							&:before {
								display: none;
							}
						}
						
						&.slick-active button {
							opacity: 1;
						}
					}
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
					width: 100%;
					margin: 2rem auto;
				}
				.slick-arrow {
					&.slick-prev {
						left: -30px;
					}
					&.slick-next {
						right: -30px;
					}
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
					width: 100%;
					margin: 2rem auto;
				}
				.slick-arrow {
					&.slick-prev {
						left: -20px;
					}
					&.slick-next {
						right: -20px;
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
			}
		}
	}
`;


const HowIntegrationWorks = ({ name, howitworks, howitworksdetails, slides }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    adaptiveHeight: true
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
            <Col $xs={12} $xl={4} className="integration-section-data">
              <h3>{howitworks != null ? howitworks : "Docker with Meshery" }</h3>
              <p>
                {howitworksdetails != null ? howitworksdetails : "The Docker Extension for Meshery extends Docker Desktop's position as the cloud native developer's go-to Kubernetes environment with easy access to the next layer of cloud native infrastructure: service meshes."}
              </p>
            </Col>
            <Col $xs={12} $xl={8} className="integration-section-caraousel">
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
