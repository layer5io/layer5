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
      color: #1e2117;
      font-weight: 400;
      font-size: 1.438rem;
      line-height: 2rem;
      padding-right: 80px;
      margin-bottom: 30px;
    }
    .catalog {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .calalog__card {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #1e2117;
        border: 1px solid #00b39f;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        .calalog__card__title {
          text-align: center;
          color: #ffffff;
        }
        .catalog__card__icon {
          height: 3.5rem;
          width: 3.5rem;
        }
      }
      .calalog__card--main {
        padding: 40px 20px;
        z-index: 1;
        max-width: 260px;
        .calalog__card__title {
          font-weight: 500;
          font-size: 35px;
          line-height: 42px;
        }
      }
      .calalog__card--child {
        padding: 25px 30px;
        position: absolute;
        .calalog__card__title {
          font-weight: 400;
          font-size: 27px;
          line-height: 32px;
        }
      }
      .calalog__card--programs {
        top: 10px;
        left: 20px;
        z-index: 2;
        .calalog__card__title {
          margin-right: 5px;
        }
        .catalog__card__icon {
          margin-left: 5px;
        }
      }
      .calalog__card--policies {
        bottom: 20px;
        right: 20px;
        z-index: 2;
        .calalog__card__title {
          margin-right: 5px;
        }
        .catalog__card__icon {
          margin-left: 5px;
        }
      }
      .calalog__card--patterns {
        bottom: 20px;
        left: 20px;
        z-index: 0;
        padding: 25px 65px;
        .calalog__card__title {
          margin-left: 5px;
        }
        .catalog__card__icon {
          margin-right: 5px;
        }
      }
      .calalog__card--webAssembly {
        top: 0px;
        right: -20px;
        z-index: 0;
        .calalog__card__title {
          margin-left: 5px;
        }
        .catalog__card__icon {
          margin-right: 5px;
        }
      }
    }

    @media screen and (max-width: 1199px) {
      .catalog {
        .calalog__card--main {
          padding: 35px 20px;
          .calalog__card__title {
            font-size: 30px;
            line-height: 37px;
          }
        }
        .calalog__card--child {
          padding: 15px 30px;
          .calalog__card__title {
            font-size: 22px;
            line-height: 27px;
          }
        }
        .calalog__card--programs {
          left: -50px;
          top: 60px;
        }
        .calalog__card--policies {
          bottom: 50px;
        }
        .calalog__card--patterns {
          bottom: 50px;
          left: -10px;
        }
        .calalog__card--webAssembly {
          right: 0px;
          top: 35px;
        }
      }
    }

    @media screen and (max-width: 992px) {
      .row {
        flex-direction: column;
        min-height: 61.125rem;
        justify-content: space-around;
      }
      .catalog {
        .calalog__card--programs {
          left: 100px;
          top: -60px;
        }
        .calalog__card--policies {
          bottom: -50px;
          right: 80px;
        }
        .calalog__card--patterns {
          bottom: -60px;
          left: 50px;
          padding-left: 50px;
          padding-right: 50px;
        }
        .calalog__card--webAssembly {
          right: 80px;
          top: -80px;
        }
      }
    }

    @media screen and (max-width: 767px) {
      min-height: unset;
      padding: 50px 0;
      .header__detail {
        display: flex;
        flex-direction: column;
      }
      .header__title {
        padding-right: 0;
        text-align: center;
        margin-bottom: 10px;
      }
      .header__title_description {
        padding-right: 0;
        text-align: center;
        margin-bottom: 20px;
      }
      .header__button_section {
        display: flex;
        justify-content: center;
      }
      .catalog {
        margin: 50px 0 0 0;
        justify-content: unset;
        .calalog__card--main {
          display: none;
        }
        .calalog__card--child {
          position: relative;
          top: 0px;
          right: 0;
          left: 0;
          margin-bottom: 10px;
          padding: 10px 30px;
        }
        .calalog__card--patterns,
        .calalog__card--programs {
          right: 0;
        }
        .calalog__card--policies,
        .calalog__card--webAssembly {
          right: 0;
        }
      }
    }
  }
`;
