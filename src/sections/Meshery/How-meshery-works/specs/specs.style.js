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
      
      @media (max-width: 36rem) {
        padding-left: 2rem;
        padding-bottom: 12rem;
      }
      
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
    
    .card{
      @media (max-width: 62rem) {
        padding-bottom: 2rem;
      }
    }
  }
  
  .cloud-native{
    margin: 5rem 0;
    h3{
      font-weight: 600;
      margin-bottom: 1rem;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }
   
   overflow: hidden;
  .find-kubernetes{
    position: relative;
    img{
      position: absolute;
      z-index: -1;
      overflow: hidden;
    }
    .green-bubble{
      left: -320px;
      top: -180px;
      overflow: hidden;
    }
    
    .yellow-bubble{
      right: -230px;
      bottom: -100px;
      overflow: hidden;
    }
    .content{
      text-align: center;
      margin: 10rem 0;
      h3{
        font-weight: 600;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      p{
        margin: 1rem 0;
      }
    }
  }
  
  
`;

export default SpecsWrapper;
