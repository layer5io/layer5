import styled from "styled-components";

const WorkshopSinglePageWrapper = styled.div`
	max-width: 81.25rem;
	height: auto;
	margin: 20.5rem auto 3.75rem auto;
	display: block;

	.backBtn {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 11.5625rem;
		height: 2.5rem;
		position: absolute;
		top: 6.875rem;
		font-size: 1.25rem;
		left: 3.75rem;
		font-weight: 600;
	}

	.imageContainer {
		display: block;
		max-width: 81.25rem;
		height: auto;
		margin: auto;

		.image {
			text-align: center;
		}
	}

	.contentContainer {
		display: block;
		margin: auto;
	}

	.cardContent {
		display: block;
		margin: 2.5rem auto;
	}

	.abstract {
		font-size: 1.3125rem;
		text-align: center;
	}

	.title {
		font-family: "Qanelas Soft", sans-serif;
		font-size: 3.125rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 1.25rem;
	}

	.contentBody {
		p {
			font-weight: 400;
			font-size: 1.125rem;
			line-height: 2.125rem;
			text-align: justify;
			margin-bottom: 2.5rem;
		}

		h3,
		h4 {
			font-family: "Qanelas Soft", sans-serif;
			font-weight: 600;
			font-size: 1.75rem;
			line-height: 1.75rem;
			margin-bottom: 2.5rem;
		}

		ul > li {
			list-style: none;
			line-height: 1.75rem;
		}
	}

	.bottomBtn {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
	}

	.requestBtn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.1875rem 2.0625rem;
		background-color: rgba(0, 179, 159, 0.7);
		border-radius: 0.3125rem;
		text-transform: capitalize;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.5s ease-in-out all;

		a {
			font-style: none;
			font-weight: 600;
			color: #ffffff;
			font-size: 1.0625rem;
		}

		&:hover {
			box-shadow: 0rem 0.625rem 1.25rem rgba(0, 179, 159, 0.3);
			background-color: rgba(0, 179, 159, 1);
		}
	}

	.joinBtn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1.1875rem 2.0625rem;
		background: rgba(235, 192, 23, 0.7);
		border-radius: 0.3125rem;
		font-weight: 600;
		font-size: 1.0625rem;
		text-transform: capitalize;
		color: #ffffff;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.5s ease-in-out all;

		a {
			font-style: none;
			font-weight: 600;
			color: #ffffff;
			font-size: 1.0625rem;
		}

		&:hover {
			box-shadow: 0rem 0.625rem 1.25rem rgba(235, 192, 23, 0.3);
			background-color: rgba(235, 192, 23, 1);
		}
	}

	@media only screen and (max-width: 46.25rem) {
		.cardContent {
			padding: 1.25rem;
		}
		.title {
			font-size: 2.5rem;
		}
		.abstract {
			font-size: 1.25rem;
		}
		.contentBody > h3 {
			font-size: 1.5625rem;
		}
		.requestBtn {
			padding: 0.9375rem 1.25rem;
			margin-bottom: 1.25rem;
		}
		.joinBtn {
			padding: 0.9375rem 1.25rem;
		}
	}

	@media only screen and (max-width: 25rem) {
		.requestBtn {
			margin-bottom: 1.25rem;
		}

		.title {
			font-size: 1.875rem;
		}

		.abstract {
			font-size: 0.9375rem;
		}

		.contentBody > h3 {
			font-size: 1.125rem;
		}

		.contentBody > h4 {
			font-size: 1.25rem;
		}

		.backBtn {
			left: 0rem;
		}
	}

	.links {
		display: flex;
		color: #00d3a9;
		border: none;
		align-items: center;
		padding: 0.3125rem 0.9375rem;
		background-color: whitesmoke;
		margin-right: 0.625rem;
		border-radius: 0.3125rem;
		font-size: 1.125rem;
		font-weight: 400;
		box-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);
		transition: 0.5s ease-in-out all;

		&:hover {
			color: #00b39f;
			box-shadow: 0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.1);

			img {
				filter: none;
			}
		}

		img {
			height: 1.25rem;
			width: auto;
			display: block;
			padding-right: 0.625rem;
			filter: grayscale(1);
		}
	}

	.social-icons {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.btn-and-status {
		display: block;
		margin-bottom: 1.25rem;
	}
`;

export default WorkshopSinglePageWrapper;
