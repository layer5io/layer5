import styled from "styled-components";

const MeshmapDesignWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :div:first-child {
    align-items: center;
  }

  .banner-background {
    margin: 1rem;

    .description{
      margin-top: 3rem;

        .desc-text {
          padding: 0 1rem 0 1rem;
          h1{
              font-weight: 600;
          }
          .heading-1 {
              font-weight: 500;
          }
          .heading-2 {
              font-weight: 700;
              color: ${props => props.theme.secondaryColor};
          }
          .desc-p {

              margin: 1.875rem 0 2.5rem 0;
          }
        }
    }
  }

`;

export default MeshmapDesignWrapper;
