import styled from "styled-components";

const MeshmapWrapper = styled.div`

  display: flex;
  flex-direction: column;

  :div:first-child {
    align-items: center;
  }

  .heading{
      text-align: center;
      padding: 1rem 0;
  }
  .catalog {
    margin: 1rem;
  }

  .description{
    margin-top: 3rem;

      .desc-text {
        padding: 1.56rem;
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

  .para {
      padding-top: 6rem;
  }

  .modes-image{
    margin: 0 0 2rem;
  }

  .designer-img {
    box-shadow: 0px 0.25rem 0.5rem 0rem rgb(0, 0, 0, 0.75);
    border-radius: 0.35rem;
  }

  p.caption {
    display: relative;
    margin-top: -3rem;
    font-style: italic;
    text-align: center;
  }

    @media only screen and (max-width: 300px) {
      .form{
        margin-left: 0;
        margin-right: 0;
      }
    }

    .mobile-modes{
      display: none;
    }

    @media only screen and (max-width: 768px) {
      .mobile-modes{
        display: block;
      }
    }

`;

export default MeshmapWrapper;
