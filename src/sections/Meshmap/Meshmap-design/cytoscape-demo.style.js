import styled from "styled-components";

const CytoscapeWrapper = styled.div`
.simple-react-cytoscape {
  background-color: ${props => props.theme.DarkTheme ? "#222" : "#fafafa"};
  /* background-image: radial-gradient(#bebebe 1px, transparent 0); */
    width: 40vw;
    height: 50vh;
    border-style: dashed;
    border-radius: 20px;

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
