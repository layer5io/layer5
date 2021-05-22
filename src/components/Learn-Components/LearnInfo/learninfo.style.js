import styled from "styled-components";

const InfoWrapper = styled.div`

  margin: 2rem auto;

  .info-row {
    margin: auto;
    .col {
      p {
        color: rgba(0, 0, 0, 0.7);
        margin: 1rem auto;
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
