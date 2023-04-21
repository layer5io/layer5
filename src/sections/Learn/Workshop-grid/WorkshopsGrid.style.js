import styled from "styled-components";

export const WorkshopPageWrapper = styled.div`
	Button:hover {
	box-shadow: none;
	}
	.btn-and-status {
		display: flex;
		width: 97%;
		position: absolute;
		top: 92%;

		p {
			color: ${props => props.theme.primaryLightColor};
			font-size: 1.25rem;
			margin-left: 1.25rem;
			float: left;
			padding-left: 1.5625rem;
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		}
	}
    h2.sub-heading {
        font-weight: 400;
		margin: -0.5rem auto 5rem;
    }
	.btn-and-status-open {
		display: flex;
		margin: auto;
		padding-bottom: 1rem;
		align-items: center;
		width: 95%;

		p {
			color: darkgrey;
			font-size: 1.25rem;
			margin-left: 1.25rem;
			float: left;
		}
	}

	button.upcoming {
		display: block;
		width: auto;
		margin-left: auto;
		margin-right: 1.25rem;
		padding: 0.375rem 0.625rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: #eee;
		background-color: ${props => props.theme.secondaryColor};
		border: none;
		font-family: "Qanelas Soft", "Open Sans", sans-serif;
		border-radius: 0.9375rem;
		outline: none;
	}

	.linkAndReadBtns {
		display: flex;
		width: 95%;
		flex-direction: row-reverse;
		justify-content: space-between;
		position: absolute;
		bottom: 0rem;
	}

	.linkAndReadBtns-open {
		display: flex;
		flex: auto;
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	button.readmeBtn {
		display: flex;
		color: ${props => props.theme.text};
		background: transparent;
		border: none;
		justify-content: center;
		align-items: center;
		font-size: 1.125rem;
		cursor: pointer;
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

		&:hover {
			color: ${props => props.theme.linkColor};
		}
	}

	.readmreBtn:after {
		content: '';
		position: absolute;
		top: -22rem;
		right: -0.125rem;
		left: 0;
		bottom: -1rem;
	}

	a.siteLink {
		padding: 0.5rem 0.25rem 0rem;
		filter: grayscale(100%) brightness(${props => props.theme.siteLinkBrightness});
		transition: 0.2s ease-in-out all;

		&:hover {
			color: ${props => props.theme.keppelColor};
			filter: none;
		}
	}

	.externalLink {
		position: relative;
		left: 1rem;
		margin-top: 0.25rem;
	}

	.text-contents {
		display: none;
		width: 100%;
		height: 100%;
		font-family: "Qanelas Soft", "Open Sans", sans-serif;
	}

	.active {
		display: block;
		width: 100%;
		height: 100%;
		padding: 1.5rem;
	}

	.social-icons {
		display: flex;
	}

	.links {
		display: flex;
		align-items: center;
		padding: 0.25rem 0.75rem;
		background-color: whitesmoke;
		margin-right: 0.5rem;
		border-radius: 0.3rem;
		box-shadow: 0rem 0.0625rem 0.1875rem rgba(0, 0, 0, 0.1);
		transition: 0.25s ease-in-out all;

		&:hover {
			color: ${props => props.theme.primaryLightColorTwo};
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

	.workshop-list-wrapper {
		padding: 3.125rem 0rem;
	}
	.workshop-grid-wrapper {
		padding-bottom: 3.75rem;
	}

	

	.workshop-grid-card {
		background-color: ${props => props.theme.grey212121ToWhite};
		width: 100%;
		display: block;
		height: auto;
		border-radius: 0.3125rem;
		margin-bottom: 1.25rem;
		box-shadow: 0rem 0.0625rem 0.3125rem rgba(0, 0, 0, 0.2);
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

		&:hover {
			.main {
				box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.15);
			}
		}
	}

	@media only screen and (max-width: 57rem) {
		.workshop-page-wrapper {
			padding-bottom: 5rem;
		}
	}

	@media only screen and (max-width: 37.5rem) {
		.links {
			padding: 0rem 0.625rem;
			margin-right: 0.3125rem;
			font-size: 0.9375rem;

			img {
				height: 0.9375rem;
			}
		}

		.readme-btn {
			margin: 0rem 0.625rem 0.625rem 0rem;
			padding: 0.3125rem 0.3125rem;
		}
	}
	.see-more-button {
		margin: 0rem auto;
	}

	.para {
		color: ${props => props.theme.text};
		text-align: center;
		font-weight: 500;
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
	}

	.rqst-workshop {
		.bottom-image {
			width: 100%;
			height: 100%;
			margin: auto;
			display: block;
		}
		Button:hover {
			box-shadow: 0 2px 10px ${props => props.theme.whiteFourToBlackFour};
		}
		a {
			margin: auto;
		}
`;
