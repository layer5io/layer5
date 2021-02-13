import styled from "styled-components";
import collabMap from "./images/layer5-collaboration-map.svg";

const AboutSectionWrapper = styled.section`

    background: linear-gradient(255.21deg, #477E96 20.89%, #01B29F 36.99%, #00B39F 59.78%, #3C494F 90.08%);
    mix-blend-mode: darken; 
    color: white;
    text-align: center;
    margin: auto;
 
    h1 {
      color: white;
    }
    h2 {
      display: block;
      font-weight: 400;     
      margin-top: 4rem;
      margin-bottom: 1rem;
      line-height: 1rem;
      color: white;
    }
    h3 {
        color: white;
        margin-bottom: 1.7vw;
      }

  .section-bottom {
    margin-bottom: 5rem;
  }

  .row {
		justify-content: center;
		margin: 1rem;
		overflow: hidden;
	}

	.col {
		flex: 0 0 25%;
		max-width: 20%;
	}

	.item {
		height: 7rem;
		background: ${props => props.theme.tertiaryColor};
		display: flex;
		border-radius: 1.5rem;
		justify-content: left;
		margin: auto;
		padding: 1rem;

		h4 {
      padding-left: .9rem;
			font-weight: 500;
			text-align: left;
      color: white;
      margin: auto;
		}

		@media screen and (max-width: 900px) {
			height: 6.5rem;
		}
		@media screen and (max-width: 480px) {
			height: 5rem;
		}
	}

`;

export default AboutSectionWrapper;
