import styled from "styled-components";

const FeatureUseCardWrapper = styled.div`
  margin-bottom: 40px;
  height: 100%;
  
  .image-container {
    width: 100%;
    padding: 10px 10px 5px 10px;
    border-radius: 0.5rem;
    border: 1px solid var(--grey-light, #A0AAAA);
    margin: 0 auto 10px auto;
    
    img{
      border-radius: 0.5rem;
    }
    
  }

  .feature-title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.25rem;
  }

  .feature-info-container{
    margin-top: 1.5rem
  }

  .feature-description{
    color: ${props => props.theme.greyA0AAAAToGrey666666};
  }

`;

export default FeatureUseCardWrapper;