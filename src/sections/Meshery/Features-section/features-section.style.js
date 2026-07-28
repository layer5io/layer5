import styled from "styled-components";

const FeaturesSectionWrapper = styled.section`
  background-color: black;
  padding: 4rem 0 5rem 0;
  margin-bottom: 6rem;
  position: relative;
  width: 100%;
  max-width: 100%;
  z-index: 1;
  height: auto;

  .skw {
    display: grid;
    position: relative;
    top: -4rem;
  }
  .rect-1-left {
    background: #c9fcf6;
    border-radius: 0 2.125rem 0 0;
    grid-column: 1 / span 2;
    height: 4rem;
    grid-row: 1;
  }
  .rect-2-left {
    background: ${(props) => props.theme.secondaryColor};
    border-radius: 0 0 3.5rem 0;
    grid-column: 1 / 2;
    height: 4rem;
    grid-row: 2;
  }
  .rect-3-right {
    background: ${(props) => props.theme.secondaryColor};
    border-radius: 3.5rem 0 0 0;
    grid-column: 10 / 11;
    grid-row: 1;
    height: 4rem;
  }
  .rect-4-right {
    background: #c9fcf6;
    border-radius: 0 0 0 2.125rem;
    grid-column: 9 / 11;
    grid-row: 2;
    height: 4rem;
  }

  .section-data {
    padding: 0 2rem 3rem;
    text-align: center;
    position: relative;
    z-index: 1;
    width: 100%;
    margin: 0 auto;

    h1,
    h2,
    p {
      color: white;
    }
  }

  .section-header {
    margin-top: 1rem;
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
      line-height: 1.6rem;
      margin: 1rem auto 0;
      max-width: 50rem;
    }
  }

  .smp-section {
    margin: 3rem auto;
    width: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    box-sizing: border-box;

    .smp-section-row {
      margin: 4rem 0;
      align-items: center;
      display: flex;
      flex-wrap: wrap;
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
        display: block;
        box-sizing: border-box;

        .slick-list {
          width: calc(100% - 6rem);
          margin: 0;

          .slick-slide {
            img {
              max-height: 22rem;
              width: auto;
              margin: auto;
              border-radius: 0.5rem;
            }
          }
        }

        .slick-arrow {
          display: none;
        }

        /* Fixed Vertical Navigation Dots without negative positioning */
        .slick-dots {
          position: absolute;
          right: 0;
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

            /* Added visible focus indicators for keyboard navigation (WCAG AA) */
            &:focus-visible,
            button:focus-visible {
              outline: 2px solid ${(props) => props.theme.secondaryColor};
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

  /* Responsive Adjustments & Breakpoints */
  @media screen and (max-width: 1200px) {
    .smp-section {
      .smp-section-carousel {
        .slick-slider {
          .slick-list {
            width: 100%;

            .slick-slide img {
              max-height: 18rem;
            }
          }

          /* Removed !important and handled positioning via specificity */
          .slick-dots {
            position: relative;
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
                height: 2.5rem;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .smp-section
      .smp-section-carousel
      .slick-slider
      .slick-list
      .slick-slide
      img {
      max-height: 14rem;
    }
  }
`;

export default FeaturesSectionWrapper;
