import styled from "styled-components";

const PlatformWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  color: ${props => props.theme.tertiaryColor};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-bottom: 100px;
  
  @media (max-width: 468px) {
    margin: 3rem 0;
  }
  
  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  .platform-engineering-description {
    text-align: center;
    
    p {
      color: ${props => props.theme.tertiaryColor};
      padding: 0px 3.125rem;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    h1 {
      padding: 1.25rem 0px;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
      padding: 1.875rem 0;
    }
  }
`;

export default PlatformWrapper;