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
    flex-wrap: wrap;
    width: 100%;
    margin: 0 10px;
    align-items: flex-start;
    justify-content: center;
  }
  
  
  .use-heading {
    color: white !important;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;

    .highlighted-text {
      color: white;
      padding: 0 0.5rem;
      border-radius: 0.5rem;
      background: ${props => props.theme.green009A89ToGreen00B39F};
      font-weight: bold;
    }


`;

export default WhiteboardWrapper;