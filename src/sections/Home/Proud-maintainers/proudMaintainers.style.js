import styled from "styled-components";
const ProjectItemWrapper = styled.section`
	margin: 5rem 0rem;
	path.clss-1{
		fill: ${props => props.theme.DarkTheme? "white": "#3c494f"};
	}
	path.clss-2{
		fill: ${props => props.theme.DarkTheme? "white": "#3c494f"};
	}
	path.clss-3{
		fill:#647881
	}
	path.clss-4{
		fill:#00b39f
	}
	path.clss-5{
		fill:#00d3a9
	}
	path.clss-6{
		fill:#477e96
	}
	path.cls-1{
		fill:#00d3a9
	}
	path.cls-2{
		fill:#00b39f
	}
	path.cls-3{
		fill: ${props => props.theme.DarkTheme? "white": "#3c494f"};
	}
	path.st2 {
		fill: #2beda7;
	}
	polygon.cls-1{
		fill:#00d3a9
	}
	polygon.cls-2{
		fill:#00b39f
	}
	polygon.cls-3{
		fill: ${props => props.theme.DarkTheme? "white": "#3c494f"};

	}
	path.st2 {
		fill: #2beda7;
	}
	path.LinkerdText {
		fill: ${props => props.theme.DarkTheme? "white": "black"};
	}
	path.CNCFText {
		fill: ${props => props.theme.DarkTheme? "white": "black"};
	}
	.project-title {
		text-align: center;
		padding: 0 2rem;
		margin: auto;

		h4 {
			margin-bottom: 0.5rem;
			color: ${props => props.theme.DarkTheme? "#737373": "#b3b3b3"};
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
			color: ${props => props.theme.DarkTheme ? "rgba(255, 255, 255, 0.6)" :"rgba(0, 0, 0, 0.6)"};
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
