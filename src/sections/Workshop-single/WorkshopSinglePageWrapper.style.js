import styled from "styled-components";

const WorkshopSinglePageWrapper = styled.div`
	max-width: 1300px;
	height: auto;
	margin: 200px auto 60px auto;
	display: block;

	.backBtn {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		width: 185px;
		height: 40px;
		position: absolute;
		top: 110px;
		font-size: 20px;
		left: 60px;
		font-weight: 600;
	}

	.imageContainer {
		display: block;
		max-width: 1300px;
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
		margin: 40px auto;
	}

	.abstract {
		font-size: 21px;
		text-align: center;
	}

	.title {
		font-family: "Qanelas Soft", sans-serif;
		font-size: 50px;
		font-weight: 700;
		text-align: center;
		margin-bottom: 20px;
	}

	.contentBody {
		p {
			font-weight: 400;
			font-size: 18px;
			line-height: 34px;
			text-align: justify;
			margin-bottom: 40px;
		}

		h3,
		h4 {
			font-family: "Qanelas Soft", sans-serif;
			font-weight: 600;
			font-size: 28px;
			line-height: 28px;
			margin-bottom: 40px;
		}

		ul > li {
			list-style: none;
			line-height: 28px;
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
		padding: 19px 33px;
		background-color: rgba(0, 179, 159, 0.7);
		border-radius: 5px;
		text-transform: capitalize;
		border: none;
		outline: none;
		cursor: pointer;
		transition: 0.5s ease-in-out all;

		a {
			font-style: none;
			font-weight: 600;
			color: #ffffff;
			font-size: 17px;
		}

		&:hover {
			box-shadow: 0px 10px 20px rgba(0, 179, 159, 0.3);
			background-color: rgba(0, 179, 159, 1);
		}
	}

	.joinBtn {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 19px 33px;
		background: rgba(235, 192, 23, 0.7);
		border-radius: 5px;
		font-weight: 600;
		font-size: 17px;
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
			font-size: 17px;
		}

		&:hover {
			box-shadow: 0px 10px 20px rgba(235, 192, 23, 0.3);
			background-color: rgba(235, 192, 23, 1);
		}
	}

	@media only screen and (max-width: 740px) {
		.cardContent {
			padding: 20px;
		}
		.title {
			font-size: 40px;
		}
		.abstract {
			font-size: 20px;
		}
		.contentBody > h3 {
			font-size: 25px;
		}
		.requestBtn {
			padding: 15px 20px;
		}
		.joinBtn {
			padding: 15px 20px;
		}
	}

	@media only screen and (max-width: 420px) {
		.requestBtn {
			margin-bottom: 20px;
		}
	}

	.links {
		display: flex;
		color: #00d3a9;
		border: none;
		align-items: center;
		padding: 5px 15px;
		background-color: whitesmoke;
		margin-right: 10px;
		border-radius: 5px;
		font-size: 18px;
		font-weight: 400;
		box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
		transition: 0.5s ease-in-out all;

		&:hover {
			color: #00b39f;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

			img {
				filter: none;
			}
		}

		img {
			height: 20px;
			width: auto;
			display: block;
			padding-right: 10px;
			filter: grayscale(1);
		}
	}

	.social-icons{
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.btn-and-status{
		display: block;
		margin-bottom: 20px;
	}
`;

export default WorkshopSinglePageWrapper;
