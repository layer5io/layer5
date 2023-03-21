import styled from "styled-components";

const MeshmapVisualizeWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .background-image {
    position: absolute;
    justify-content: center;
    top: 0%;
    /* transform: rotateZ(-10deg); */
    opacity: 0.8;
  }

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

export default MeshmapVisualizeWrapper;
