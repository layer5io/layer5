import styled from "styled-components";

const FeaturesSectionWrapper = styled.section`
  background-color: black;
  padding-bottom: 5rem;
  margin-bottom: 8rem;
  position: relative;
  width: 100%;
  max-width: 100%;
  transform-origin: center;
  z-index: 1;
  height: auto;

  .skw {
    display: grid;
    position: relative;
    top: -5rem;
  }
  .rect-1-left {
    background: #c9fcf6;
    border-radius: 0 2.125rem 0 0;
    grid-column: 1 / span 2;
    height: 5rem;
    grid-row: 1;
    position: relative;
    top: 0.5px;
  }
  .rect-2-left {
    background: ${(props) => props.theme.secondaryColor || "#00B39F"};
    border-radius: 0 0 3.5rem 0;
    grid-column: 1 / 2;
    height: 5rem;
    grid-row: 2;
  }
  .rect-3-right {
    background: ${(props) => props.theme.secondaryColor || "#00B39F"};
    border-radius: 3.5rem 0 0 0;
    grid-column: 10 / 11;
    grid-row: 1;
    height: 5rem;
  }
  .rect-4-right {
    background: #c9fcf6;
    border-radius: 0 0 0 2.125rem;
    grid-column: 9 / 11;
    grid-row: 2;
    height: 5rem;
    position: relative;
    top: -0.75px;
  }

  .section-data {
    padding: 0 1.5rem 3rem;
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
    margin-top: 1rem;
    h1 {
      line-height: 3.125rem;
      span {
        color: ${(props) => props.theme.secondaryColor || "#00B39F"};
      }
    }
    h2 {
      font-weight: 400;
    }
    p {
      font-size: 1.25rem;
      line-height: 1.6rem;
      margin: 1rem auto 0;
      max-width: 50rem;
    }
  }

  .smp-section {
    margin: 3rem auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 2rem;
    box-sizing: border-box;

    .smp-section-row {
      margin: 4rem 0;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2.5rem;
    }

    h2,
    h4 {
      color: white;
    }

    .smp-section-data {
      flex: 1 1 360px;
      min-width: 0;
      padding: 0.5rem;
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
      flex: 1 1 480px;
      min-width: 0;
      width: 100%;
      position: relative;
      padding: 0 2.5rem;
      box-sizing: border-box;

      .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        width: 100%;

        .slick-list {
          width: 100%;
          margin: 0 auto;
          overflow: hidden;

          .slick-slide {
            outline: none;
            text-align: center;

            img,
            video {
              display: inline-block;
              max-height: 22rem;
              width: 100%;
              max-width: 100%;
              height: auto;
              object-fit: contain;
              margin: 0 auto;
              border-radius: 0.5rem;
            }
          }
        }

        .slick-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          cursor: pointer;
          width: 32px;
          height: 32px;
          display: block !important;
        }

        .slick-prev {
          left: -1.75rem;
        }

        .slick-next {
          right: -1.75rem;
        }

        .slick-dots {
          position: absolute;
          right: -4rem;
          top: 50%;
          transform: translateY(-50%);
          width: 5rem;
          list-style: none;
          margin: 0;
          padding: 0;

          li {
            display: block;
            width: 100%;
            margin: 0.75rem 0;
            opacity: 0.5;
            transition: opacity 0.3s ease;

            &:focus-visible,
            button:focus-visible {
              outline: 2px solid
                ${(props) => props.theme.secondaryColor || "#00B39F"};
              outline-offset: 2px;
              border-radius: 4px;
            }

            p img {
              height: 3.5rem;
              width: auto;
              border-radius: 0.25rem;
            }
          }

          li.slick-active {
            opacity: 1;
          }
        }
      }
    }
  }

  /* --- Tablet & Medium Screens (700px - 1200px) --- */
  @media screen and (max-width: 1200px) {
    padding-bottom: 2rem;
    margin-bottom: 6rem;

    .skw {
      top: -4rem;
    }

    .rect-1-left,
    .rect-2-left,
    .rect-3-right,
    .rect-4-right {
      height: 4rem;
    }

    .section-header {
      margin-top: 1.5rem;
    }

    .smp-section {
      padding: 0 1.5rem;

      .smp-section-row {
        flex-direction: column;
        margin: 2.5rem 0;
        gap: 2rem;
      }

      .smp-section-data {
        flex: 1 1 100%;
        width: 100%;
        text-align: center;
        h1,
        h2,
        h3,
        p {
          text-align: center;
        }
      }

      .smp-section-carousel {
        flex: 1 1 100%;
        max-width: 680px;
        margin: 0 auto;
        padding: 0 3rem;

        .slick-slider {
          .slick-list {
            .slick-slide img,
            .slick-slide video {
              max-height: 20rem;
            }
          }

          .slick-prev {
            left: -1.25rem;
          }

          .slick-next {
            right: -1.25rem;
          }

          .slick-dots {
            position: static;
            transform: none;
            width: 100%;
            display: flex !important;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 1.5rem;

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
  }

  /* --- Mobile Screens (< 768px) --- */
  @media screen and (max-width: 768px) {
    .skw {
      top: -3rem;
    }

    .rect-1-left,
    .rect-2-left,
    .rect-3-right,
    .rect-4-right {
      height: 3rem;
    }

    .smp-section {
      padding: 0 0.5rem;

      .smp-section-carousel {
        padding: 0 2rem;

        .slick-slider {
          .slick-list .slick-slide img,
          .slick-list .slick-slide video {
            max-height: 15rem;
          }

          .slick-prev {
            left: -0.75rem;
          }

          .slick-next {
            right: -0.75rem;
          }

          .slick-dots {
            gap: 0.5rem;
            margin-top: 1rem;

            li p img {
              height: 2.25rem;
            }
          }
        }
      }
    }
  }

  /* --- Small Mobile Screens (< 480px) --- */
  @media screen and (max-width: 480px) {
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
      padding: 0 0.25rem;

      .smp-section-carousel {
        padding: 0 1.75rem;

        .slick-slider {
          .slick-list .slick-slide img,
          .slick-list .slick-slide video {
            max-height: 12rem;
          }

          .slick-prev {
            left: -0.6rem;
            width: 24px;
            height: 24px;
          }

          .slick-next {
            right: -0.6rem;
            width: 24px;
            height: 24px;
          }

          .slick-dots {
            gap: 0.35rem;

            li p img {
              height: 1.75rem;
            }
          }
        }
      }
    }
  }

  .mesh-mngmnt {
    margin-top: 4rem;
    h3 {
      margin: 1rem 0;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.5rem;
    }
    p {
      margin: 0.5rem 0;
      color: rgba(255, 255, 255, 0.7);
    }

    .mesh-mngmnt-btn {
      margin: 2rem auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1rem;
      max-width: 100%;

      .mgmt_button {
        min-width: 12rem;
        border-radius: 1rem;
      }
    }
  }

  @media screen and (max-width: 992px) {
    .mesh-mngmnt .mesh-mngmnt-btn {
      .mgmt_button {
        margin: 0.5rem auto;
        min-width: 11rem;
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
