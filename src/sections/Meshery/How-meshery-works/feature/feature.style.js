import styled from "styled-components";

const FeatureWrapper = styled.section`
.root {
  display:flex;
  .icon{
    flex-shrink: 0;
    margin-top: 7px;
    margin-right: 1.2rem;
    svg{
      width: 3rem;
      .github_colorMode_svg__colorMode1 {
        transition: fill 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        fill: ${props => props.theme.whiteToBlack};
      }
    }
    img{
      width: 3rem;
    }
  } 
  & > .text {
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 600;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  & > p {
    padding-bottom: 80px;
  }
}
}
`;


export default FeatureWrapper;
