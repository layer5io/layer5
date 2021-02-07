import styled from "styled-components";

const FeatureWrapper = styled.section`
.root {
  display:flex;
  .icon{
    flex-shrink: 0;
    margin-top: 7px;
    margin-right: 1.2rem;
    img{
      width: 3rem;
    }
  } 
  & > .text {
  h4 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  & > p {
    padding-bottom: 80px;
  }
}
}
`;


export default FeatureWrapper;
