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
    opacity:0;

  & > p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    font-weight: 400;
    margin-top: 15rem;
    margin-bottom: 10rem;

    @media (max-width: 1200px) {
      font-size: 17px;
        }

  }
}

@media (max-width: 1200px) {
          max-width: 80%;
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
