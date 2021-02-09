import styled from "styled-components";

const ProjectItemWrapper = styled.section`
	margin: 2rem 0 -6rem 0;

	.project-title {
		text-align: center;
		padding: 0 2rem;
		margin: auto;

		h4 {
			margin-bottom: 0.5rem;
			color: ${props => props.theme.primaryLightColor};
			text-transform: uppercase;
		}
		h2{
			margin-bottom: 1rem;
		}
		.project-text {
			margin:0 auto 4rem auto;
			color: rgba(0, 0, 0, 0.6);
			max-width: 60%;
		}
	}

	.row {
		justify-content: center;
		margin: 1rem 1rem;
		flex-wrap: nowrap;
	}
	.row_2 {
		margin-left: 10%;
		margin-right: -10%;
	}

	.proj_icon_2,
	.proj_icon_1 {
		height: 7rem;
		background: ${props => props.theme.secondaryLightColor};
		display: flex;
		border-radius: 1.5rem;
	}

	.proj_icon_1 {
		padding: 1rem;
	}

	.proj_icon_2 {
		img {
			padding: 1.5rem 1rem;
		}
		h4 {
			/* font-size: 1rem; */
			margin: auto 0;
			text-align: center;
		}
	}
	@media only screen and (max-width: 1400px) {
        .proj_icon_2 {
			img {
				padding: 2rem 0.5rem;
			}
			h4 {
				font-size: 1rem;
			}
		}
    }
     @media only screen and (max-width: 575px) {
		.proj_icon_2,
		.proj_icon_1 {
			padding: 0.5rem;
			height: 4rem;
		}
        .proj_icon_2 {
			img {
				padding: 1rem 0.5rem;
			}
			h4 {
				font-size: 0.5rem;
			}
		}
     }
     /* @media only screen and (max-width: 380px) {
        .proj_icon_2 {
			img {
				padding: 1rem 0.5rem;
			}
		}
	 } */
`;

export default ProjectItemWrapper;
