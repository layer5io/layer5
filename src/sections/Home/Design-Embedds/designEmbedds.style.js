import styled from "styled-components";

const DesignEmbedWrapper = styled.section`
  color: white;
  text-align: center;
  height: 100%;


  .embed-container {
    padding: 2rem;
    border-radius: 0.5rem;
    width: 90%;
    height: fit-content;
    background: linear-gradient(108deg, #000 0%, #000 100%);
    position: relative;
    overflow: hidden;
    box-shadow: 0 0 ${props => props.theme.projectShadowsize} ${props => props.theme.green00D3A9ToGreyE6E6E6};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    z-index: 3;
  }

  .embed-container::before {
    content: '';
    width: 35rem;
    // height: 100%;
    // width: 100%;
    height: 25rem;
    border-radius: 30.625rem;
    background: #00B39F;
    filter: blur(400px);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 75%;
    // height: 100%;
  }

  .embedded-design-168bf17a-9386-4a0e-8c32-dd2bc22c8fe9 {
    width: 100%;
    height: 100%
  }

  .embed-highlight {
    color: white;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    background: rgba(0, 179, 159, 0.35);
    font-weight: bold;
  }
`;

export default DesignEmbedWrapper;