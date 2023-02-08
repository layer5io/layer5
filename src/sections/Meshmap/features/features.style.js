import styled from "styled-components";

const FeatureWrapper = styled.section`


.root {
  display:flex;

  & > .text {
    opacity:0;

  & > p {
    z-index: 0;
    font-family:'Qanelas Soft','Qanelas Soft', sans-serif;
    font-weight: 500;
    margin-top: 15rem;
    margin-bottom: 25rem;
    line-height: 2rem;
    color: ${props => props.theme.DarkTheme ? "#dddddd" : "#333333"};

    @media (max-width: 1200px) {
      font-size: 17px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
    }
    @media (max-width: 670px) {
      font-size: 15px;
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

.fixed {
  position: sticky;
  top: 5.9rem;
  font-weight: 300;
  color: white;
  background-color: #00b39f;
  transition: .3s ease-in-out;
}

`;


export default FeatureWrapper;
