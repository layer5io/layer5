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
    font-family: 'Qanelas Soft';
    font-size: 55px;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-weight: 200;
    align-items: center;
  }

  & > p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;

  }
}
}

.fixed {
  position: sticky;
  top: 5.9rem;
  font-weight: 300;
  color: white;
  background-color: #00b39f;
  transition: .3s ease-in-out;
}

.line {
        position: relative;
        width: 30.2vw;
        height: 0px;
        border: 2px solid;
        color: #eeeeee;

    }
`;


export default FeatureWrapper;
