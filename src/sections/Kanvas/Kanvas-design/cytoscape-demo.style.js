import styled from "styled-components";

const CytoscapeWrapper = styled.div`
cursor: pointer;
.simple-react-cytoscape {
    width: 40vw;
    height: 50vh;

    @media only screen and (max-width: 1000px) {
      height: 40vh;
    }
    @media only screen and (max-width: 767px) {
      height: 30vh;
    }
    @media only screen and (max-width: 350px) {
      height: 20vh;
    }
  }
`;
export default CytoscapeWrapper;
