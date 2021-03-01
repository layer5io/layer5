import styled from "styled-components";

const ProjectItemWrapper = styled.section`
	margin: 5rem 0rem;

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

	.row, .row_2 {
		justify-content: center;
		margin: 1rem 0;
		flex-wrap: nowrap;
		overflow: hidden;
	}

	.proj_row_1_col, .proj_row_2_col {
		flex: 0 0 25%;
		max-width: 20%;

		@media screen and (max-width: 1600px) {
			max-width: 22%;
		}
		@media screen and (max-width: 992px) {
			max-width: 25%;
		}
		@media screen and (max-width: 768px) {
			flex: 0 0 32%;
			max-width: 32%;
		}
		@media screen and (max-width: 550px) {
			flex: 0 0 35%;
			max-width: 35%;
		}
	}

	.proj_icon_2,
	.proj_icon_1 {
		max-width: 18rem;
		height: 7rem;
		background: #F3F3F3;
		display: flex;
		border-radius: 1.5rem;
		justify-content: center;
		margin: auto;

		h4 {
			font-weight: 500;
			margin: auto 0;
			text-align: center;
		}

		@media screen and (max-width: 900px) {
			height: 6.5rem;
		}
		@media screen and (max-width: 480px) {
			height: 5rem;
		}
	}

	.proj_icon_1 {
		padding: 1rem;
	}

	.proj_icon_2 {
		img {
			padding: 1.5rem 1rem;
			max-height: 125px;
		}
      @media screen and (max-width: 550px) {
          img {
            padding: 1.65rem 0;
          }
          h4 {
            font-size: 0.7rem;
          }
      }

      @media screen and (max-width: 460px){
        h4 {
          margin-left: -25px;
        }
      }
	}
  
`;

export default ProjectItemWrapper;
