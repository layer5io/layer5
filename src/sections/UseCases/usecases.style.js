import styled from "styled-components";

const UseCasesWrapper = styled.div`
	.use-cases-title{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 1rem 0;

		.heading{
			color: ${props => props.theme.whiteToBlack} !important;
      		font-size: 4rem;
      		font-weight: 700;
      		max-width: 80%;
      		margin: 0 auto;
      		padding: 0 1rem;
		}
		.description{
			color: ${props => props.theme.greyA0AAAAToGrey666666};
    		font-size: 1.5rem;
    		line-height: 2rem;
    		max-width: 60%;
    		margin: 1rem auto;
    		padding: 0 1rem
		}

		@media (max-width: 768px) {
			.heading{
			  font-size: 2.75rem !important;
			}
			.description {
			  font-size: 1.25rem;
			  line-height: 1.5rem;
			}
		  }
		
		  @media (max-width: 500px) {
			.heading{
			  font-size: 2rem !important;
			}
		
			.whiteboard-text {
			  font-size: 1rem;
			  line-height: 1.2rem;
			}
	}

	.usecases-grid-wrapper{

		.usecases-grid-card{

		}

		.externalLink {
			position: relative;
			left: 1rem;
			margin-top: 0.25rem;
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
	}
`;

export default UseCasesWrapper;