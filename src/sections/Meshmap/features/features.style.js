import styled from "styled-components";

const FeatureWrapper = styled.section`


.root {
  display:flex;

  & > .text {
    font-family:'Qanelas Soft','Qanelas Soft', sans-serif;
    opacity:0;
    margin-top: 10rem;
    margin-bottom: 10rem;
    line-height: 2rem;

    @media (max-width: 670px) {
      padding-left: 1rem;
      padding-right: 1rem;
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
    color: ${props => props.theme.greyDDDDDDToGrey333333};

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
`;

export default FeatureWrapper;
