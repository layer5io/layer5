import styled from "styled-components";

const FooterWrapper = styled.section`
	padding: 2.5rem 0 1.5rem;
	background: black;

	.section__particle {
		position: absolute;
		left: 0;
		top: 22%;
		width: 18rem;
	}

	.footer-head {
		margin: 0px 1.5rem 1.5rem -0.75rem;
		.footer_logo-icons{
			padding: 0rem;
			.footer-logo {
				max-width: 200px;
				height: auto;
			}
		}
	}

	.desc-info {
		color: #ccc;
		padding-right: 2.25rem;
		font-style: italic;
		font-weight: 200;
		font-size: 1rem;
	}

	.footer-sections{
		flex: auto;
		padding: 0 1rem;
		margin-bottom: 1.5rem;

		.section-title{
			font-size: 1.25rem;
			margin-bottom: 1rem;
			color: rgba(255, 255, 255, 0.8);

			.title-link {
				transition: 0.2s all;
				color: rgba(255, 255, 255, 0.8);
				&:hover {
					color: ${props => props.theme.secondaryColor};
				}
			}
		}

		.section-categories {
			padding: 0;
			list-style: none;
			margin: 0;
			font-size: 1.063rem;

			.category-link {
				color: #CCCCCC;
				transition: 0.2s all;

				&:hover{
					color: ${props => props.theme.secondaryColor};
				}
			}
		}
	}

	.subscribe {
		font-family: 'Qanelas Soft', sans-serif;
		margin: 0 2.5rem 2rem 0;
		justify-content: flex-end;

		span {
			display: block;
			color: #FFFFFF;
		}

		input {
			padding: 1rem;
			margin-right: 0.25rem;
			width: 20rem;
			height: 3.5rem;
			color: rgba(255, 255, 255, 0.75);
			border: 1px solid #FFFFFF;
			background-color: #000000;
			border-radius: 0.25rem;
		}

		button {
			height: 3.5rem;
		}
	}

	.footer-bottom{
		display: flex;
		flex: auto;
		border-top: 1px solid #FFFFFF;

		.copyright-text {
			font-size: 0.8rem;
			flex: auto;
			color: #CCCCCC;
		}

		.policies{
			font-size: 0.8rem;
			margin: 0;
			li {
				display: inline-flex;
				a {
					color: #CCCCCC;
				}
			}
			li + li {
				margin-left: 1rem;
			}
		}
	}

	@media only screen and (max-width: 1720px) {
		.section__particle{
			display: none;
		}
	}

	@media only screen and (max-width: 1199px) and (min-width: 662px) {
		.subscribe {
			margin-top: -7rem;
		}
	}

	@media only screen and (max-width: 661px) and (min-width: 470px) {
		.sections_col{
			padding: 0 1rem 0 3rem;
		}

		.odd-col{
			flex: 0 0 60%;
		}

		.even-col {
			flex: 0 0 40%;
		}

		.subscribe {
			margin: 0 2rem 2rem 0;
			justify-content: center;

			input {
				width: 15rem;
			}

			button {
				min-width: 8rem;
			}
		}
	}

	@media only screen and (max-width: 575px) {
		.footer-head {
			flex-flow: column-reverse;
			margin: 0;

			.footer_logo-icons {
				text-align: center;
			}
		}

		.desc-info {
			padding-right: 0;
			text-align: center;
		}
	}

	@media screen and (max-width: 469px) {
		.footer-sections{
			.section-title {
				font-size: 1rem;
			}
			.section-categories {
				font-size: 0.85rem;
			}
		}
		.odd-col{
			flex: 0 0 60%;
		}

		.even-col {
			flex: 0 0 40%;
		}

		.subscribe {
			margin: 0 0 2rem 0;
			justify-content: center;

			input {
				width: 12rem;
			}

			button {
				min-width: 6rem;
			}
		}
	}

	@media screen and (max-width: 767px){
		.footer-bottom{
			padding: 0 1rem;
		}
	}
	@media screen and (max-width: 445px){
		.footer-bottom{
			.policies {
				text-align: center;
			}

			li + li {
				margin-left: 0 !important;
				text-align: center;
			}
		}
	}
`;

export default FooterWrapper;
