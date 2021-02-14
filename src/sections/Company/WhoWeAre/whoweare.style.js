import styled from "styled-components";
import collabMap from "./images/layer5-collaboration-map.svg";

const AboutSectionWrapper = styled.section`

    background: linear-gradient(255.21deg, #477E96 20.89%, #01B29F 36.99%, #00B39F 59.78%, #3C494F 90.08%);
    mix-blend-mode: darken; 
    color: white;
    text-align: center;
    
 
    h1, h2, h3, h4 {
      color: white;
    }
    h2 {
      display: block;
      font-weight: 400;     
      margin-top: 4rem;
      margin-bottom: 1rem;
      line-height: 1rem;

    }
    h3 {
        margin: 1.7vw;
      }

  .section-bottom {
    margin-bottom: 5rem;
  }

  .row {
		margin: 2rem 5rem;
		display: flex;
    padding-bottom: 5rem;
		
	}

	.col {
		display: flex;
		flex-flow: column wrap;
    justify-content: center;
    margin: 1rem;
    min-height: 6rem;
    
	}

	.item {
    height: 100%;
    min-width: 100px;
		background: ${props => props.theme.tertiaryColor};
		display: flex;
		border-radius: 1.5rem;
		justify-content: left;
		margin: auto;
		padding: 1rem;
    overflow-block: visible;
		h4 {
      padding-left: .5rem;
      padding-right: 1.5rem;
			font-weight: 500;
			text-align: left;
      font-size: 1.25rem;
      margin: auto;
		}
    img {
      height: 1.5rem;
      margin: auto;
    }
		@media screen and (max-width: 1200px) {
			height: 6.5rem;
        h4 {font-size: 1.1rem;
        padding-top: 0px;
        padding-bottom: 0px;
		}
    @media screen and (max-width: 1000px) {
			height: 6.5rem;
      
      h4 {font-size: .8rem;}
    }
		@media screen and (max-width: 480px) {
			height: 5rem;
		}
	}

`;

export default AboutSectionWrapper;
