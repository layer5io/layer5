import styled from "styled-components";

export const CloudNativeCatalogWrapper = styled.div`
  .cloud-native-catalog.header {
    min-height: 61.125rem;
    background: linear-gradient(
      90.2deg,
      rgba(255, 255, 255, 0.38) 33.89%,
      rgba(0, 179, 159, 0.74) 99.81%
    );
    display: flex;
    align-items: center;
    align-content: space-between;
    flex-direction: column;
    justify-content: center;
    .header__detail {
      display: flex;
      flex-direction: column;
    }
    .header__title {
      color: #00b39f;
      padding-right: 80px;
      margin-bottom: 20px;
    }
    .header__title_description {
      color: #1E2117;
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      padding-right: 80px;
      margin-bottom: 30px;
    }
    .catalogIcon {
      height: 12rem;
      width: auto;
    }
    .col {
      display: flex;
    }
    .catalog-image-col {
      justify-content: center;
    }

    @media screen and (max-width: 768px) {
      .catalogIcon {
        height: 5rem;
        width: auto;
      }
      img {
        margin: auto;
        height: 50%;
        width: 50%;
      }
    }
  }
`;
