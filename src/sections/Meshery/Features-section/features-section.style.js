import styled from "styled-components";

const FeaturesSectionWrapper = styled.section`

	background-color: black;
	transform: skew(0deg, -6deg);
	padding-bottom:5rem;
	.skw{
		display: grid;
		position: relative;
		top: -5rem;
	}
	.service-mesh-video {
		text-align: center;
        width: 100%;
	}
	.rect-1-left {
		background: #C9FCF6;
		border-radius: 0 2.125rem 0 0;
		grid-column: 1/ span 2;
		height: 5rem;
		grid-row: 1;
		position: relative;
		top: 0.5px;
	}
	.rect-2-left {
		background: ${props => props.theme.secondaryColor};
		border-radius: 0 0 3.5rem 0;
		grid-column: 1/2;
		height: 5rem;
		grid-row: 2;
	}
	.rect-3-right {
		background: ${props => props.theme.secondaryColor};
		border-radius: 3.5rem 0 0 0;
		grid-column: 10/11;
		grid-row: 1;
		height: 5rem;
	}
	.rect-4-right {
		background: #C9FCF6;
		border-radius: 0 0 0 2.125rem;
		grid-column: 9/11;
		grid-row: 2;
		height: 5rem;
		position: relative;
		top: -0.75px
	}

	.section-data {
		transform: skew(0deg, 6deg);
		padding: 0 1rem 3rem;
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
		h2, h4, h3 {
				color: white;
			}
		.smp-section-data {
			h1, h2, p {
				text-align: start; color: white;
			}
			h2 {
				font-size: 1.75rem;
    			font-weight: 500;
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

						p {
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

				li p img {
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
		padding-bottom: 0rem;
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

					li p img {
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
			font-size: 1.5rem;
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