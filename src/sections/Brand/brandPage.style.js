import styled from "styled-components";

const BrandPageWrapper = styled.section`
	position: relative;
	overflow: unset;
	margin-bottom: 2rem;

	.brandHeader {
		padding: 6rem 0;
		background: ${props => props.theme.tertiaryColor};
		text-align: center;
		h1{
			color: ${props => props.theme.white};
		}
		p{
			margin: 1.5rem auto 4rem;
			max-width: 60%;
			color: ${props => props.theme.white};
		}
	}

	.brand-row {
		margin: 0;
	}

	.brand-nav-col {
		padding: 4rem 7rem 6rem;
	}

	.nav-fixed {
		position: sticky;
		top: 6rem;
		z-index: 1;
	}

	.header_link {
		display: block;
		margin: 0;
		position: relative;
		width: fit-content;
		color: rgba(0, 0, 0, 0.4);
		font: 500 1.2rem/2.5rem 'Qanelas Soft', sans-serif;
		transition: 0.2s border ease-in-out;

		span::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 1px;
			bottom: 0;
			border-bottom: 1px solid ${props => props.theme.secondaryColor};
			margin-bottom: -1px;
			opacity: 0;
		}

		&:hover {
			cursor: pointer;
			color: ${props => props.theme.secondaryColor};

			span::before {
				opacity: 1;
				animation: flowin 0.5s ease-in;
			}
		}
	}

	.selected {
		border-bottom: 1px solid ${props => props.theme.secondaryColor};
		color: ${props => props.theme.secondaryColor};
	}

	.post-content {
		margin: 0rem 0rem 5rem 12rem;
	}

	.brand-section {
		padding-top: 5rem;
	}

	.section + .section {
		margin-top: -5rem;
	}

	@media screen and (max-width: 1800px) and (min-width: 1300px) {
		.post-content {
			margin: 3rem 0rem 5rem 8rem;
		}

		.brand-nav-col {
			padding: 4rem 3rem 6rem;
		}
	}

	@media screen and (max-width: 1299px) and (min-width: 1024px) {
		.post-content {
			margin: 3rem 0rem 5rem 3rem;
		}
		.brand-nav-col {
			padding: 4rem 0.75rem 6rem;
		}
	}

	@media screen and (max-width: 1023px) and (min-width: 768px) {
		.post-content {
			margin: 3rem 0rem 5rem 1.5rem;
		}
		.brand-nav-col {
			padding: 4rem 0.25rem 6rem;
		}

		.header_link {
			font-size: 0.9rem;
		}
	}

	@media screen and (max-width: 767px) {
		.brand-nav-col {
			display: none;
		}

		.post-content {
			margin: 3rem auto 5rem;
		}
	}

	.download-button {
		text-align: end;
		margin: 0 0 1rem 0;
	}
	.ImgDiv, .color-code-wrapper {
		width: 100%;
		margin: auto;
		justify-content: space-around;
	}

	@media screen and (max-width: 575px) {
		.ImgDiv, .color-code-wrapper {
			margin-left: 0px;
		}
	}

	.layerH3 {
		text-align: start;
		margin-bottom: 1em;
	}
	.in{
		margin-top: 2rem;
	}

	.white-color-box {
		.PalletBox {
			border: 1px solid black;
			color: black;

			.color-name {
				color: black;
			}
		}
	}

	@media screen and (max-width: 575px) {
		.download-button {
		text-align: start;
		}
	}
`;

export default BrandPageWrapper;
