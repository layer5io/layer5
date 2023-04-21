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
			color: ${props => props.theme.grey737373ToGreyB3B3B3};
			text-transform: uppercase;
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
		}
		h2{
			 span {
				color: ${props => props.theme.text};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
			 }
			margin-bottom: 1rem;
		}
		.project-text {
			margin:0 auto 4rem auto;
			color: ${props => props.theme.whiteSixToBlackSix};
			max-width: 60%;
			transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
			max-width: 24%;
		}
		@media screen and (max-width: 768px) {
			flex: 0 0 25%;
			max-width: 25%;

		}
		@media screen and (max-width: 550px) {
			flex: 0 0 35%;
			max-width: 35%;
		}
	}

	}
	.proj_icon_2,
	.proj_icon_1 {
		max-width: 18rem;
		height: 7rem;
		background: ${props => props.theme.grey212121ToGreyF3F3F3};
		display: flex;
		border-radius: 1.5rem;
		justify-content: center;
		margin: auto;
		transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

		svg {
			.cncf-colorMode_svg__colorMode1,
			.linkerd-horizontal-colorMode_svg__colorMode1,
			.envoy-horizontal-colorMode_svg__colorMode1,
			.oam-colorMode_svg__colorMode1,
			.meshery-logo-colorMode_svg__colorMode1,
			.smp-colorMode_svg__colorMode1
			 {
				fill: ${props => props.theme.whiteToBlack};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
			}
	
			.openservicemesh-stacked-colorMode_svg__colorMode1 {
				fill: ${props => props.theme.whiteToBlue1229A9};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
			}
			
			.servicemeshinterface-horizontal-stackedtext-colorMode_svg__colorMode1
			{
				fill: ${props => props.theme.whiteToBlue2A2DDE};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
			}

			.oam-colorMode_svg__colorMode2 {
				fill: ${props => props.theme.blackToWhite};
				transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
			}
		
		}

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
            padding: 1.65rem 0;
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
