import styled from "styled-components";

const WorkshopSinglePageWrapper = styled.div`
    margin-bottom: 4rem;
	display: block;

	.backBtn {
		position: relative;
		left: 0px;
		margin-top: 3rem;
		margin-left: 3rem;
		font-weight: 600;
		a{
			display: flex;
		    color: ${props => props.theme.primaryColor};
		    &:hover{
		        color: ${props => props.theme.linkColor};
			}
			
			h4 {
				line-height: 1.75rem;
			}
			svg {
				font-size: 1.75rem;
			}
		}
		
	}

	@media screen and (max-width: 992px) {
		.backBtn {
			margin-top: 2rem;
			margin-left: 2rem;
		}
	}

	.bottomBtn {
		padding:4rem;
		padding-top:5rem;
		background-color: ${props => props.theme.DarkTheme ? "rgb(20, 20, 20)" : "#FAFAFA"};		
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
		
		button{
		    margin-bottom: 1rem;
		}
	}

	@media only screen and (max-width: 25rem) {
		.backBtn {
			margin-top: 1rem;
			margin-left: 1rem;
		}
	}

	.links {
		display: flex;
		color: ${props => props.theme.primaryLightColorTwo};
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
			color: ${props => props.theme.secondaryColor};
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
