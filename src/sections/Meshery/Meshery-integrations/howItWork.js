import React from "react";
import { Row, Col } from "../../../reusecore/Layout";
import Slider from "react-slick";
import styled from "styled-components";

const FeaturesSectionWrapper = styled.section`

  background: #F7F7F7;
	padding-bottom:5rem;

	.section-data {
		padding: 3rem 2rem 0;
		text-align: center;
	}

	.meshery-logo {
		img {
			max-height: 8rem;
		}
	}
	.section-header {
		margin-top: 3rem;
		h1 {
			line-height: 3.125rem;
			span {
				color: ${props => props.theme.secondaryColor};
			}
		}
		h2 {
			font-weight: 400;
		}
		p {
			font-size: 1.25rem;
			line-height: 1.25rem;
			margin: 1rem 0 0;
		}
	}
	.smp-section {
		margin: 3rem auto;
		max-width: 85%;

		.smp-section-row {
			margin: 4rem 0;
			align-items: center;
		}
		h2, h4 {
				color: black;
			}
		.smp-section-data {
			h1, h3, p {
				text-align: start; color: black;
			}
		}

		.smp-section-caraousel {
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
		.smp-section .smp-section-caraousel .slick-slider {
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
		.smp-section {
			.smp-section-row {
				margin: 2.5rem 0;
			}

			.smp-section-data {
				h3, p {
					text-align: center;
				}
			}

			.smp-section-caraousel .slick-slider {
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
		.smp-section .smp-section-caraousel .slick-slider .slick-list {
			.slick-slide {
				img {
					max-height: 16rem;
				}
			}
		}
	}

	@media screen and (max-width: 700px) {
		.smp-section {
			max-width: 95%;

			.smp-section-caraousel .slick-slider {
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
		.smp-section {
			max-width: 95%;

			.smp-section-caraousel .slick-slider {
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


const howItWork = ({ name,sliderImg_1,sliderImg_2,sliderImg_3 }) => {

  const slides_list = [sliderImg_1, sliderImg_2, sliderImg_3];

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={slides_list[i]}/>
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
    <FeaturesSectionWrapper>
      <div className="section-data">

        <div className="section-header">
          <h4 style={{ textTransform: "uppercase",color: "#1AD8B2",fontSize: "21px" }}>How it Works</h4>
          <h1 style={{ fontSize: "40px" }}>See It in Action </h1>
          <p>
          Better together: {name} with Meshery           </p>
        </div>
        <div className="smp-section">
          <Row className="smp-section-row">
            <Col xs={12} xl={4} className="smp-section-data">
              <h3>The Performance Yardstick</h3>
              <p>
                Assess the value of your service mesh in context of its cost. Benchmark and manage the performance of your
                application across different service meshes. Compare and manage service mesh overhead.
              </p>
            </Col>
            <Col xs={12} xl={8} className="smp-section-caraousel">
              <Slider {...settings}>
                <div>
                  <img src={sliderImg_1} alt="Slide 1" />
                </div>
                <div>
                  <img src={sliderImg_2} alt="Slide 2" />
                </div>
                <div>
                  <img src={sliderImg_3} alt="Slide 3" />
                </div>
              </Slider>
            </Col>
          </Row>
        </div>
      </div>
    </FeaturesSectionWrapper>
  );
};

export default howItWork;
