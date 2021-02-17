import styled from "styled-components";

const FeaturesSectionWrapper = styled.section`

	background-color: black;
	transform: skew(0deg, -5deg);
	// .skw{
	// 	background-color: white;
  //   transform: skew(0deg,-5deg);
  //   width: 100%;
  //   height: 11rem;
  //   position: relative;
  //   top: -1rem;
  //   z-index: 1;
	// }
	// .rect-1-left, .rect-3-right {
	// 	position: absolute;
	// 	width: 14rem;
	// 	height: 5rem;
	// 	transform: skew(0deg, -5deg);
	// 	background-color: ${props => props.theme.secondaryColor};
	// 	z-index: 1;
	// }
	// .rect-1-left {
	// 	left: 0;
	// 	top: 14.4rem;
	// 	border-radius: 0px 0px 40px 0px;
	// }
	// .rect-3-right {
	// 	right: 0;
	// 	top: 0.5rem;
	// 	border-radius: 40px 0px 0px 0px;
	// }
	// .rect-2-left, .rect-4-right {
	// 	position: absolute;
	// 	width: 20rem;
	// 	height: 5rem;
	// 	transform: skew(0deg, -5deg);
	// 	background-color: #C9FCF6;
	// 	z-index: 1;
	// }
	// .rect-2-left {
	// 	left: 0;
	// 	top: 9.25rem;
	// 	border-radius: 0px 40px 0px 0px;
	// }
	// .rect-4-right {
	// 	right: 0;
	// 	top: 5.75rem;
	// 	border-radius: 0px 0px 0px 40px;
	// }

	.section-data {
		transform: skew(0deg, 5deg);
		padding: 3rem 1rem;
		// padding: 8rem 0 1.5rem;
		// position: relative;
    // top: -6.5rem;
		// clip-path: polygon(0% 50%, 0% 100%, 100% 100%, 100% 0%);
		text-align: center;
		h1, h2, p {
			color: white;
		}
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
				color: white;
			}
		.smp-section-data {
			h1, h3, p {
				text-align: start; color: white;
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
					top: 0rem;
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
		.smp-section {
			.smp-section-row {
				margin: 2.5rem 0;
			}

			.smp-section-data {
				h1, p {
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

	.mesh-mngmnt {
		h4 {
			margin: 1rem 0;
			color: rgba(255, 255, 255, 0.6);
		}
		p {
			margin: 0.5rem 0;
			color: rgba(255, 255, 255, 0.6);
		}

		.mesh-mngmnt-btn {
			margin: 2rem auto;
			display: flex;
			flex-wrap: wrap;
			max-width: 75%;

			.mgmt_button {
				margin: 0.5rem 0;
				min-width: 15rem;
				border-radius: 1rem;
			}
		}
	}

	@media screen and (max-width: 992px) {
		.mesh-mngmnt {
			.mesh-mngmnt-btn {
				justify-content: center;

				.mgmt_button {
					margin: 0.5rem auto;
					min-width: 11rem;
				}
			}
		}
	}
`;

export default FeaturesSectionWrapper;