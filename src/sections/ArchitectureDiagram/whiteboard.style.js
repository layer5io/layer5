import styled from "styled-components";

const WhiteboardWrapper = styled.div`
  height: 100%;
  .feature-use-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }


  .collaboration_display {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 0 10px;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 600px){
      flex-direction: column;
    } 
  }
  
  
  .use-heading {
    color: ${props => props.theme.whiteToBlack};
    text-align: center;
    margin-bottom: 2rem;

    &>h2 {
      margin-bottom: 0.5rem
    }

    &>p{
      color: ${props => props.theme.greyA0AAAAToGrey666666};
    }

    .highlighted-text {
      color: white;
      padding: 0 0.5rem;
      border-radius: 0.5rem;
      background: ${props => props.theme.green009A89ToGreen00B39F};
      font-weight: bold;
    }
  }
  .question-container {
    max-width: 1170px;
    margin: 0rem auto 4rem;
    .wrapper {
      padding: 2rem;
      margin: 0 2rem;
      border-radius: 0.25rem;
      background-color: ${props => props.theme.grey191919ToGreyFAFAFA};
      & > p {
        text-align: center;
        color: ${props => props.theme.greyA0AAAAToGrey666666};
      }

      @media only screen and (max-width: 500px) {
        padding: 1rem;
        margin: 0 1rem;
      }
    }
  }
`;

export default WhiteboardWrapper;