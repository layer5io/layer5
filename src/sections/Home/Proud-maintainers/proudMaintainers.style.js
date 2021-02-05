import styled from "styled-components";

const ProjectItemWrapper = styled.section`
		margin: 0 0 5rem 0;

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

	.project_icons_section {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		.proj_icon {
			display: flex;
			width: 18rem;
			justify-content: center;
			padding: 0.5rem 1rem;
			img {
				max-height: 7rem;
			}
			h4 {
				font-weight: 600;
				margin-left: 0.5rem;
				align-self: center;
			}
		}
		.istio {
			width: 10rem;
		}
	}
`;

export default ProjectItemWrapper;
