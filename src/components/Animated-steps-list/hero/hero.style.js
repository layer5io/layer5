import styled from "styled-components";

export const HeroWrapper = styled.div`
  // min-height: min(45vw, 750px);
  // background-image: url(/img/hero-left.svg), url(/img/hero-right.svg);
  // background-position: top left, top right;
  // background-size: auto 100%, auto 100%;
  // background-repeat: no-repeat, no-repeat;
  // @media (max-width: 600px) {
  //   background-size: auto 70%, auto 70%;
  // }
  
  h1 {
    color: ${props=> props.theme.black};
    font-size: 48px;
    line-height: 50px;
    padding-bottom: 30px;
    
    @media (max-width: 768px) {
      font-size: 34px;
    }
  }

  padding: 250px 0;

  @media (max-width: 850px) {
    padding: 197px 0;
  }

   .content {
    max-width: 500px;

    @media (max-width: 1119px) {
      max-width: 350px;
    }

    @media (max-width: 850px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 550px;
      text-align: center;
    }

    & > h1 {
      margin-top: 0;
    }

    & > p {
      &.subtitle {
        font-size: 17px;
        line-height: 25px;
      }
      &.description {
        font-size: 15px;
        line-height: 28px;
      }
    }

    & .links {
      flex-wrap: wrap;
      margin-top: calc(32px - 8px);
      margin-bottom: -8px;
      margin-left: -8px;

      & a {
        margin: 8px;
      }
    }
  }
`;
