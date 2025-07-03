import styled from "styled-components";

const PlatformWrapper = styled.div`
  min-height: fit-content;
  border-width: 2px 2px 2px 2px;
  background-color: ${(props) => props.theme.body};
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  padding-bottom: 100px;
  @media (max-width: 468px) {
    margin: 3rem 0;
  }
  @media (max-width: 767px) {
    padding-top: 0;
    padding-bottom: 0;
  }
    .platform-engineering-description {
        text-align: center;
        p {
            color: ${props => props.theme.tertiaryColor};
            padding: 0px 3.125rem;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        h1 {
            padding: 1.25rem 0px;
            transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        img {
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
            padding: 1.875rem 0;
        }
    }
    .platform-detail {
      @media (max-width: 767px) {
        order: 1;
      }
    }
  }

  .platform {
    display: flex;
    padding: 5rem 0;
    gap: 2rem;
    @media (max-width: 768px) {
      padding: 2rem 0;
    }
    @media (max-width: 468px) {
      flex-direction: column;
    }
    .platform-detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .heading {
        font-size: 3.125rem;
        line-height: 3.813rem;
        color: ${(props) => props.theme.tertiaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        margin-bottom: 2rem;
        @media (max-width: 992px) {
          font-size: 2.8rem;
          line-height: 3rem;
        }
        @media (max-width: 767px) {
          font-size: 2rem;
          line-height: 2.5rem;
          text-align: center;
          padding-left: 100px;
          padding-right: 100px;
          margin-bottom: 1rem;
        }
        @media (max-width: 467px) {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
      .caption {
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 2rem;
        color: ${(props) => props.theme.tertiaryColor};
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        opacity: 0.8;
        @media (max-width: 767px) {
          font-size: 1rem;
          line-height: 1.5rem;
          text-align: center;
          padding-left: 100px;
          padding-right: 100px;
        }
        @media (max-width: 467px) {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
    }
    .platform-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .img-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        .calalog-image {
          @media (max-width: 767px) {
            max-width: 80%;
            margin-bottom: 1.25rem;
          }
        }
      }
    }
  }
`;

export default PlatformWrapper;