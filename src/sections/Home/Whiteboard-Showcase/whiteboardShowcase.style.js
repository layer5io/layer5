import styled from "styled-components";
import background from "../../../assets/images/embed-whiteboard/background.svg";
import whiteboard from "../../../assets/images/embed-whiteboard/whiteboard-image.svg";
import whiteboard_text from "../../../assets/images/embed-whiteboard/whiteboard-text.svg";

const WhiteboardShowcaseWrapper = styled.section`
  color: white;
  text-align: center;
  height: 100%;
  margin-top: 100px;

  .whiteboard-container {
    padding: 2rem 2rem 0 2rem;
    border-radius: 0.5rem;
    width: 90%;
    height: fit-content;
    background-color: #000;
    background-image: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 ${props => props.theme.projectShadowsize} ${props => props.theme.green00D3A9ToGreyE6E6E6};
  }

  .heading {
    margin-top: 50px;
  }

  .whiteboard-image {
    background-image: url("${whiteboard}");

    width: 100%;
    height: 0;
    padding-bottom: calc(100% * 0.533834);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .whiteboard-text {

    width: 100%;
    height: 0;
    padding-bottom: calc(100% * 0.1559356);
    background-repeat: no-repeat;
    background-size: cover;

    background-image: url("${whiteboard_text}");
  }

  .whiteboard-text-container {
    width: 50%;
    margin-bottom: 3rem;
  }

  .bottom-margin {
    margin-bottom: 15rem;
  }

`;

export default WhiteboardShowcaseWrapper;