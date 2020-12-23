import styled from "styled-components";

export const WorkshopPageWrapper = styled.div`
	.btn-and-status {
		display: flex;
		width: 97%;
		position: absolute;
		top: 90%;

		p {
			color: darkgrey;
			font-size: 20px;
			margin-left: 20px;
			float: left;
			padding-left: 25px;
		}
	}

	.btn-and-status-open {
		display: flex;
		align-items: center;
		bottom: 35px;
		position: absolute;
		width: 95%;

		p {
			color: darkgrey;
			font-size: 20px;
			margin-left: 20px;
			float: left;
		}
	}

	button.upcoming {
		display: block;
		width: auto;
		margin-left: auto;
		margin-right: 20px;
		padding: 6px 10px;
		font-size: 12px;
		font-weight: 600;
		color: #fff;
		background-color: #00b39f;
		border: none;
		border-radius: 15px;
		outline: none;
		box-shadow: 0px 5px 10px rgba(0, 179, 159, 0.3);
	}

	.linkAndReadBtns {
		display: flex;
		width: 95%;
		flex-direction: row-reverse;
		justify-content: space-between;
		position: absolute;
		bottom: 0px;
	}

	.linkAndReadBtns-open {
		width: 30%;
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	button.readmeBtn {
		display: flex;
		background: transparent;
		border: none;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		cursor: pointer;
		transition: 0.5s ease-in all;

		&:hover {
			color: #00d3a9;
		}
	}

	a.siteLink {
		margin-left: 20px;
		filter: grayscale(1);
		transition: 0.5s ease-in-out all;

		&:hover {
			color: #00d3a9;
			filter: none;
		}
	}

	.readme-btn {
		float: right;
		margin: 0 20px 20px 0;
		padding: 10px 15px;
		border: none;
		background-color: turquoise;
		font-size: 20px;
		font-weight: 500;
		color: white;
		border-radius: 5px;
		cursor: pointer;
		box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
		-webkit-transition: 0.5s ease-in-out all;
		transition: 0.5s ease-in-out all;

		&:hover {
			color: turquoise;
			background-color: white;
			box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
		}
	}

	.text-contents {
		display: none;
		width: 100%;
		height: 100%;
	}

	.active {
		display: block;
		width: 100%;
		height: 100%;
		padding: 20px 20px 60px 20px;
	}

	.social-icons {
		display: flex;
		margin-left: 20px;
		width: 70%;
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

	.workshop-list-wrapper {
		padding: 50px 0;
	}
	.workshop-grid-wrapper {
		padding-bottom: 60px;
		margin-top: 80px;
	}

	.workshop-grid-card {
		width: 100%;
		display: block;
		height: auto;
		border-radius: 5px;
		margin-bottom: 20px;
		box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
		-webkit-transition: 0.5s ease-in-out all;
		transition: 0.5s ease-in-out all;

		&:hover {
			box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
		}
	}

	@media only screen and (max-width: 912px) {
		.workshop-page-wrapper {
			padding-bottom: 80px;
		}
	}

	@media only screen and (max-width: 600px) {
		.links {
			padding: 0px 10px;
			margin-right: 5px;
			font-size: 15px;

			img {
				height: 15px;
			}
		}

		.readme-btn {
			margin: 0 10px 10px 0;
			padding: 5px 5px;
		}
	}
	.see-more-button {
		margin: 0 auto;
	}

	.para {
		text-align: center;
		font-weight: 500;
	}
`;
