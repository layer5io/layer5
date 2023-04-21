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
            background: ${(props) => props.theme.grey121212ToLinear};
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .desc-p {

            margin: 1.875rem 0 2.5rem 0;
        }
      }
  }

  .para {
      padding-top: 6rem;
  }
  .vote-design {
    background: ${(props) => props.theme.grey121212ToLinear};
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .modes-image{
    margin: 0 0 2rem;
  }

  .designer-img {
    box-shadow: 0px 0.25rem 0.5rem 0rem rgb(0, 0, 0, 0.75);
    border-radius: 0.35rem;
  }

  p.caption {
    color: ${props => props.theme.whiteToBlack};
    display: relative;
    margin-top: -3rem;
    font-style: italic;
    text-align: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
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
        margin-top: 3rem;
        display: block;
      }
    }

`;

export default MeshmapWrapper;
