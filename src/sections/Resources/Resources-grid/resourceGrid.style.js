import styled from "styled-components";
export const ResourcePageWrapper = styled.div`
  .resource-grid-wrapper {
    margin: 0.8rem 0 1.5rem 1.5rem;
  }

  .search {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    margin-bottom: 0.8rem;
    .searchBox {
      flex: 0 0 50%;
      @media only screen and (max-width: 990px) {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
    .sortBox {
      flex: 0 0 auto;
      margin-right: 1rem;
      .sortDropdown {
        padding: 15px 40px 15px 15px;
        border-radius: 5px;
        border: 1px solid ${(props) => props.theme.headingColor};
        background-color: ${(props) => props.theme.shadowDarkColor};
        color: ${(props) => props.theme.text};
        font-size: 0.9rem;
        cursor: pointer;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 12px center;
        background-size: 16px;

        &:focus {
          outline: 2px solid #00b39f;
          outline-offset: 2px;
        }
      }
      @media only screen and (max-width: 990px) {
        display: none;
      }
    }
  }
  .post-content-block {
    height: 7rem;
  }
  .post-thumb-block {
    height: 10.5rem;
  }
  .post-meta-block {
    p {
      margin: 0;
    }
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 3rem auto 4rem;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      margin: 2rem auto 3rem;
    }
  }

  .nav-btn {
    min-width: 130px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media screen and (max-width: 768px) {
      min-width: 160px;
      padding: 0.75rem 1.75rem;
    }
  }

  @media only screen and (max-width: 575px) {
    .resource-grid-wrapper {
      margin: 0 auto 5rem;
    }
  }

  .no-resources-page {
    padding: 1rem 1rem 4rem;
    margin: 1rem;

    box-shadow: 0px 3px 10px 1px rgba(0, 179, 159, 0.5);
    .errorMessage {
      font-size: 2rem;
      line-height: 2rem;
    }
    .error-text {
      margin-top: 5rem;
    }
    .errorSubtitle {
      font-weight: 400;
      font-size: 1.5rem;
      color: gray;
      font-style: italic;
      margin-top: 2.5rem;
    }
    img {
      display: block;
      margin: auto;
      margin-top: 3.125rem;
      width: 14rem;
      @media only screen and (max-width: 700px) {
        max-width: 100%;
      }
    }
  }
`;
