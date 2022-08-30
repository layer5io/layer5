import styled from "styled-components";
import List_Icon from "../../../../assets/images/app/tick.svg";

export const IntegrationPageWrapper = styled.section`

	.old-gatsby-image-wrapper img{
		height: 90px;
	}
	.herosection{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		padding: 1rem 2rem;
		h2 {
			font-size: 2.5rem;
			text-align: center;
		}
		.hero-header {
			color: #00B39F;
		}
		img {
			margin-bottom: 0.5rem;
		}
		p {
			text-align: center;
		}
	}

	.overview{
		display: flex;
		margin: 2rem;
		gap: 5rem;
		justify-content: center;
		@media (max-width: 700px) {
			flex-direction: column-reverse;
		};
	}

	.feature{
		display: flex;
		flex-direction: column;
		h3 {
			padding-bottom: 1rem;
		}
		ul {
			margin: 0;
			padding: 0;
			li {
				list-style-type: none;
        margin: 2rem 0;
				display: flex;
				align-items: center;
        :before {
					content: url(${List_Icon});
					margin-right: 1rem;
					height: 2rem;
				}
			}
		}
	}

	.content{
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		p {
			line-height: 2rem;
			text-align: justify;
		}

		.external-btns {
			display: flex;
			gap: 2rem;
			flex-wrap: wrap;

			.get-started {
			}

			.doc-link {
				display: flex;
				gap: 0.5rem;
				align-items: center;
				a {
					color: ${props => props.theme.text};
					transition: padding 0.5s ease;	
                                }
				a:hover{
					padding-right: 5px;
				}
				svg {
					display: flex;
					margin: auto;
				}
			}
		}

		@media (min-width: 700px) {
			width: 35rem;
		};
	}

	.integration-collection{
		margin: 2rem auto;
		max-width: 1200px;
		
		h2{
			text-align: center;
		}
	}
`;