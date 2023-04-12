import styled from "styled-components";

const InfoWrapper = styled.div`

  margin: 2rem auto 1rem;

  .info-row {
    margin: auto;
    .col {
      p {
        color: ${props => props.theme.whiteSevenToBlackSeven};
        margin: 1rem auto;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }

      @media screen and (max-width: 992px) {
        margin: 1rem auto;
      }
      @media screen and (max-width: 992px) {
        text-align: center;
      }
    }
  }
`;

export default InfoWrapper;
