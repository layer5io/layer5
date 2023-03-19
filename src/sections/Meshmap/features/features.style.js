import styled from "styled-components";

const FeatureWrapper = styled.section`


.root {
  display:flex;
  flex-direction:column;
  
  & > .text {
    font-family:'Qanelas Soft','Qanelas Soft', sans-serif;
    opacity:0;
    margin-top: 2rem;
    margin-bottom: 5rem;

    line-height: 2rem;

    @media (max-width: 670px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media (min-width: 799px) {
     margin-top: 10rem;
     margin-bottom: 10rem;
    }

  & > h2 {
    margin-bottom: 2rem;
    font-size: 1.75rem;
    font-weight: 500;
    @media (max-width: 767px) {
      font-size: 1.25rem;
    }
  }

  & > p {
    margin-top: 1.5rem;
    z-index: 0;
    font-weight: 500;
    color: ${props => props.theme.DarkTheme ? "#dddddd" : "#333333"};

    /* @media (max-width: 767px) {
      font-size: 20px;
    } */
    @media (max-width: 670px) {
      max-width: 80%;
    }

  }
}
}

#inView {
  opacity: 1;
  transition: opacity .6s ease;
}

#notInView {
  opacity: 0;
  transition: opacity .6s ease;
}
.imageContent{
   @media (min-width: 799px) {
    display: none;
   }

   max-width:90%;
   margin-right: auto;
   margin-top: 2rem;
}
`;

export default FeatureWrapper;
