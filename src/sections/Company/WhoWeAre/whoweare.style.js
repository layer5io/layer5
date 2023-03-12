import styled from "styled-components";

const AboutSectionWrapper = styled.section`
    background: linear-gradient(255.21deg, #477E96 20.89%, #01B29F 36.99%, #00B39F 59.78%, #3C494F 90.08%);
    color: white;
    text-align: center;
    padding:4rem;
    .section-title-2
    {
      h1, h2, h3, h4 {
          color: white;
        }
        h4{
          padding:2rem;
        }
    }
    h2{
        display: block;
        font-weight: 400;     
        
        margin-bottom: 1rem;
        line-height: 2.5rem;

      }
    h3 {
        margin: 1.7vw;
        pa
      }
      
    .row {
      margin: 2rem 5rem;
      display: flex;      
    }
  .demo {
      font-size: 20px;
      font-weight: 500;
      padding: 2rem;
  }
  .demo-2{
      font-size: 1.75rem;
      font-weight: 500;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
  }
  }
	.col {
		display: flex;
		flex-flow: column wrap;
    justify-content: center;
    min-height: 6rem;
    
	}
  .second-row{
      margin:2rem 5rem;
    }
    .third-row{
      justify-content:center;
      margin:2rem 5rem;
    }
	.item {
    height: 100%;
    min-width: 150px;
		background: ${props => props.theme.DarkTheme ? "#212121" : props.theme.tertiaryColor};    
		display: flex;
		border-radius: 1.5rem;
		justify-content: left;
		padding: 1rem;
    overflow-block: visible;
		p {
      padding-left: .5rem;
      padding-right: 1.5rem;
			font-weight: 500;
			text-align: left;
      font-size: 1.25rem;
      margin: auto 0rem;
      line-height: normal;
      color: white;
		}
    img {
      height: 1.5rem;
      margin: auto 0rem;
    }
		@media screen and (max-width: 1200px) {
			height: 6.5rem;
        p {font-size: 1.1rem;
        padding-top: 0px;
        padding-bottom: 0px;
		  }
    }
    @media screen and (max-width: 1020px) {
			height: 6.5rem;
      
      p {font-size: 1rem;}
    }
    @media screen and (max-width: 650px) {
			height: 6.5rem;
      
    }
		@media screen and (max-width: 480px) {
			height: 5.5rem;
		}
    @media screen and (max-width: 330px) {
			height: 6.5rem;
		}
	}
  @media screen and (max-width: 1600px) {
    padding:4rem 2rem;
    .row{
      margin:2rem 0rem;
    }
    .second-row{
      margin:2rem 0rem;
    }
    .third-row{
      margin:2rem 0rem;
    }
  }
  @media screen and (max-width:991px)
  {
    .row{
      margin:0rem;
    }
    .second-row{
      margin:0rem;
    }
    .third-row{
      margin:0rem;
    }
    .col{
      margin:1rem 0rem;
    }
  }
  @media screen and (max-width:480px)
  {
    padding:4rem 1rem;
    .row{
      margin:0rem;
    }
    .second-row{
      margin:0rem;
    }
    .third-row{
      margin:0rem;
    }
    .col{
      margin:0.5rem 0rem;
    }
  }

`;

export default AboutSectionWrapper;
