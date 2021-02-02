import styled from "styled-components";
import MesheryWhiteLogo from "../../../../assets/images/meshery/icon-only/meshery-logo.svg";

const SpecsWrapper = styled.div`
  
  .management-plane{
    margin-top: 2rem;
    color: white;
    background: linear-gradient(to right, ${props => props.theme.secondaryColor} 50%, ${props => props.theme.highlightColor} 50%);
    @media (max-width: 62rem) {
        background: linear-gradient(to bottom, ${props => props.theme.secondaryColor} 50%, ${props => props.theme.highlightColor} 50%);
    }
    
    .text{
      position: relative;
      padding: 6rem;
      overflow: visible;
      h2{
        position: relative;
        color: ${props => props.theme.white};
        padding-bottom: 1rem;
        z-index: 2;
      }
      
      &:before{
        content: ' ';
        display: block;
        position: absolute;
        left: -300px;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(${MesheryWhiteLogo}) no-repeat;
        z-index: 1;
        opacity: 0.2;
      }
    }
   
    
  }
  
`;

export default SpecsWrapper;
