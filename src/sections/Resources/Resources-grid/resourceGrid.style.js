import styled from "styled-components";
export const ResourcePageWrapper = styled.div`
  .resource-grid-wrapper {
    margin: 0.8rem 0 1.5rem 1.5rem;
  }

  .search-and-sort {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
    gap: 1.5rem;

    @media only screen and (max-width: 575px) {
      gap: 0.5rem;
    }

    .sortBox {
      flex: 0 0 auto;
    }

    .searchBox {
      flex: 0 0 auto;

      .search-box {
        width: 350px;
        max-width: 100%;
      }

      @media only screen and (max-width: 768px) {
        .search-box {
          width: 280px;
        }
      }

      @media only screen and (max-width: 575px) {
        flex: 1;
        min-width: 0;
        .search-box {
          width: 100%;
          input {
            padding: 15px 10px;
          }
        }
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

export const SortDropdownWrapper = styled.div`
  position: relative;
  min-width: 180px;

  @media only screen and (max-width: 991px) {
    min-width: 130px;
  }

  @media only screen and (max-width: 480px) {
    min-width: 105px;
  }

  .sort-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 15px;
    font-size: inherit;
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.whiteToBlack};
    background-color: transparent;
    color: ${(props) => props.theme.whiteToBlack};
    cursor: pointer;
    outline: none;

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme.secondaryColor || "#00b39f"};
      outline-offset: 2px;
    }

    @media only screen and (max-width: 991px) {
      gap: 0.5rem;
    }

    @media only screen and (max-width: 575px) {
      padding: 15px 10px;
    }

    &:hover,
    &:focus,
    &.open {
      border-color: ${(props) => props.theme.secondaryColor || "#00b39f"};
    }

    .caret-icon {
      font-size: 1rem;
      color: ${(props) => props.theme.whiteToBlack};
      transition: transform 0.2s;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  .sort-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    min-width: 100%;
    width: max-content;
    max-width: min(250px, calc(100vw - 32px));
    margin: 0;
    padding: 4px 0;
    list-style: none;
    background-color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.whiteToBlack};
    border-radius: 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    z-index: 1000;
  }

  .sort-item {
    width: 100%;
    text-align: left;
    background: transparent;
    border: none;
    padding: 10px 15px;
    font-size: 0.95rem;
    font-family: inherit;
    color: ${(props) => props.theme.whiteToBlack};
    cursor: pointer;
    outline: none;

    &:hover,
    &:focus-visible {
      background-color: ${(props) =>
        props.theme.secondaryLightColorTwo || "rgba(0, 179, 159, 0.2)"};
      color: ${(props) => props.theme.secondaryColor || "#00b39f"};
    }

    &.selected {
      font-weight: 600;
      color: ${(props) => props.theme.secondaryColor || "#00b39f"};
    }
  }
`;
