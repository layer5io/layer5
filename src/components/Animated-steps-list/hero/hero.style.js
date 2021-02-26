import styled from "styled-components";

export const HeroWrapper = styled.div`
  h1 {
    line-height: 3.125rem;
    padding-bottom: 2rem;
    font-weight: 600;
  }

  padding: 12rem 0 20rem 0;

  @media (max-width: 800px) {
    padding: 2rem 0 10rem 0;
  }

   .content {
    max-width: 30rem;

    @media (max-width: 1119px) {
      max-width: 22rem;
    }

    @media (max-width: 850px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 35rem;
      text-align: center;
    }

    & > h1 {
      margin-top: 0;
    }

    .subtitle{
      font-weight: 600;
      color: ${props => props.theme.primaryColor};
      margin-bottom: 1rem;
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
  code {

    background-color: #eee;
    border-radius: 5px;
    font-family: courier, monospace;
    padding: 5px;
    }
    p.enddescr {
      margin-top: 1rem;
    }
`;
