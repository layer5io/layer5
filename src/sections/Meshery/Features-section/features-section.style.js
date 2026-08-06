import styled from "styled-components";

const FeaturesSectionWrapper = styled.section`
  background-color: black;
  padding-bottom: 5rem;
  margin-bottom: 8rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 100%;
  transform-origin: center;
  z-index: 1;
  height: auto;
  isolation: isolate;
  .skw {
    display: grid;
    position: relative;
    top: -5rem;
  }
  .rect-1-left {
    background: ${(props) => props.theme.secondaryLightColor || "#c9fcf6"};
    border-radius: 0 2.125rem 0 0;
    grid-column: 1 / span 2;
    height: 5rem;
    grid-row: 1;
    position: relative;
    top: 0.5px;
  }
  .rect-2-left {
    background: ${(props) => props.theme.secondaryColor};
    border-radius: 0 0 3.5rem 0;
    grid-column: 1/2;
    height: 5rem;
    grid-row: 2;
  }
  .rect-3-right {
    background: ${(props) => props.theme.secondaryColor};
    border-radius: 3.5rem 0 0 0;
    grid-column: 10/11;
    grid-row: 1;
    height: 5rem;
  }
  .rect-4-right {
    background: ${(props) => props.theme.secondaryLightColor || "#c9fcf6"};
    border-radius: 0 0 0 2.125rem;
    grid-column: 9/11;
    grid-row: 2;
    height: 5rem;
    position: relative;
    top: -0.75px;
  }

  .section-data {
    padding: 0 1rem 3rem;
    text-align: center;
    position: relative;
    z-index: 1;
    h1,
    h2,
    p {
      color: white;
    }
  }

  .meshery-logo {
    img {
      max-height: 8rem;
    }
  }
  .section-header {
    margin-top: 3rem;
    h1 {
      line-height: 3.125rem;
      span {
        color: ${(props) => props.theme.secondaryColor};
      }
    }
    h2 {
      font-weight: 400;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.25rem;
      margin: 1rem 0 0;
    }
  }
  .smp-section {
    margin: 3rem auto;
    max-width: 85%;
    overflow: hidden;

    .smp-section-row {
      margin: 4rem 0;
      align-items: center;

      @media screen and (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    }
    h2,
    h4 {
      color: white;
    }
    .smp-section-data {
      h1,
      h2,
      p {
        text-align: start;
        color: white;
      }
      h2 {
        font-size: 1.75rem;
        font-weight: 500;
      }
    }

    .smp-section-carousel {
      width: 100%;

      .slick-slider {
        position: relative;
        max-height: 520px;

        .slick-list {
          max-width: 50rem;
          max-height: 520px;
          height: auto;

          .slick-track {
            height: auto;
          }

          .slick-slide {
            height: auto;
            img {
              max-height: 20rem;
              width: 100%;
              object-fit: contain;
              aspect-ratio: 16 / 9;
              margin: auto;
            }
          }
        }

        .slick-arrow {
          display: none;
        }

        .slick-dots {
          bottom: 0;
          top: 0rem;
          left: 52rem;
          width: 8rem;

          li {
            display: block;
            width: 100%;
            height: auto;
            margin: 1rem auto;
            opacity: 0.6;

            &:focus-visible,
            button:focus-visible {
              outline: 2px solid ${(props) => props.theme.secondaryColor};
              outline-offset: 2px;
              border-radius: 4px;
            }

            p {
              display: block;

              img {
                height: 5rem;
                vertical-align: middle;
              }
            }
          }

          li.slick-active {
            opacity: 1;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .smp-section .smp-section-carousel .slick-slider {
      .slick-list {
        max-width: 38rem;
      }

      .slick-dots {
        left: 40rem;
        width: 6rem;

        li p img {
          height: 4rem;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding-bottom: 2rem;
    margin-bottom: 6rem;

    .smp-section {
      .smp-section-row {
        margin: 2.5rem 0;
      }

      .smp-section-data {
        h3,
        h2,
        p {
          text-align: center;
        }
      }

      .smp-section-carousel .slick-slider {
        .slick-list {
          max-width: 90%;
          margin: 2rem auto;

          .slick-slide img {
            max-height: 18rem;
          }
        }

        .slick-dots {
          position: relative;
          left: 0;
          right: auto;
          top: auto;
          transform: none;
          width: 100%;
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;

          li {
            width: auto;
            margin: 0;

            p img {
              height: 3.5rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
    padding-bottom: 0rem;
    margin-bottom: 4rem;
    .smp-section .smp-section-carousel .slick-slider .slick-list {
      .slick-slide {
        img {
          max-height: 16rem;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .smp-section {
      max-width: 95%;

      .smp-section-carousel .slick-slider {
        .slick-list {
          max-width: 90%;
          margin: 1.5rem auto;
        }
        .slick-dots {
          li p img {
            height: 2.5rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .smp-section {
      max-width: 95%;

      .smp-section-carousel .slick-slider {
        .slick-list {
          max-width: 90%;
          .slick-slide {
            img {
              max-height: 11rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 400px) {
    .section-header {
      h1 {
        font-size: 1.75rem;
        line-height: 2.25rem;
      }
      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }

    .smp-section {
      max-width: 100%;

      .smp-section-carousel .slick-slider {
        .slick-list {
          max-width: 95%;
          .slick-slide img {
            max-height: 9rem;
          }
        }
        .slick-dots li p img {
          height: 2rem;
        }
      }
    }
  }

  .mesh-mngmnt {
    h3 {
      margin: 1rem 0;
      color: rgba(255, 255, 255, 0.6);
      font-size: 1.5rem;
    }
    p {
      margin: 0.5rem 0;
      color: rgba(255, 255, 255, 0.6);
    }

    .mesh-mngmnt-btn {
      margin: 2rem auto;
      display: flex;
      flex-wrap: wrap;
      max-width: 75%;

      .mgmt_button {
        margin: 0.5rem 0;
        min-width: 15rem;
        border-radius: 1rem;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .mesh-mngmnt {
      .mesh-mngmnt-btn {
        justify-content: center;
        max-width: 100%;

        .mgmt_button {
          margin: 0.5rem auto;
          min-width: 11rem;
        }
      }
    }
  }

  @media screen and (max-width: 320px) {
    .mesh-mngmnt .mesh-mngmnt-btn .mgmt_button {
      min-width: 100%;
    }
  }
`;

export default FeaturesSectionWrapper;
