import styled from "styled-components";

const ProjectItemWrapper = styled.section`
	.left-col {
		text-align: left;
		align-self: flex-start;
		margin: -5.5rem auto auto 0;
		max-width: 60rem;
		padding: 0rem;
		@media screen and (max-width: 1600px) {
			margin: -4rem auto auto 0;
			max-width: 45rem
		}
		@media screen and (max-width: 1200px) {
			margin: 2rem auto auto 0;
			max-width: none;
		}
	}
	margin: 5rem 0rem;

	.project-title {
		text-align: center;
		align-self: flex-start;
		margin: auto;

		h4 {
			margin-bottom: 0.5rem;
			color: ${props => props.theme.DarkTheme ? "#737373" : "#b3b3b3"};
			text-transform: uppercase;
		}
		h2{
			 span {
				color: ${props => props.theme.text};
			 }
			margin-bottom: 1rem;
		}
		.project-text {
			margin:0 auto 4rem auto;
			color: ${props => props.theme.DarkTheme ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)"};
			max-width: 60%;
		}
	}

	.row {
		justify-content: center;
		margin: 1rem 0;
		display: flex;
		flex-direction: row;
		-webkit-box-pack: center;
		align-items: stretch;
		flex-wrap: wrap;
	}

	.proj_row {
		padding: 15px;
		width: 15%;

		@media screen and (max-width: 1600px) {
			width: 22%;
		}
		@media screen and (max-width: 992px) {
			width: 24%;
		}
		@media screen and (max-width: 768px) {
			width: 33%;

		}
		@media screen and (max-width: 550px) {
			width: 47.5%;
		}
	}

	}
	.proj_icon_2,
	.proj_icon_1 {
		max-width: 18rem;
		height: 7rem;
		background: ${props => props.theme.DarkTheme ? "#212121" : "#F3F3F3"};
		display: flex;
		border-radius: 1.5rem;
		justify-content: center;
		margin: auto;

		h4 {
			font-weight: 500;
			margin: auto 0;
			text-align: center;
		}

		// @media only screen and (max-width: 912px) {
		// 	height: 5.5rem;
		//  }

		//  @media screen and (max-width: 992px) {
		// 	height: 5.5rem;
		// }

		@media screen and (max-width: 900px) {
			height: 4.5rem;
		}
		@media screen and (max-width: 768px) {
			height: 4.5rem;

		}
		@media screen and (max-width: 480px) {
			height: 4.5rem;
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
            padding: 1.2rem;
          }
          h4 {
            font-size: 0.7rem;
          }
      }
      @media screen and (max-width: 660px){
           h4{
	    padding-right:1.2rem;
	    font-size:0.95rem;
	   }
      }
	  @media screen and (max-width: 768px) {
		.proj_icon_1 {
			padding: 1rem;
		}
		.proj_icon_2 {
			img {
				padding: 1rem 1rem;
				max-height: 125px;
			}
	}
      @media screen and (max-width: 460px){
        h4 {
          margin-left: 0px;
        }
      }
	}


`;

export default ProjectItemWrapper;
