import styled from "styled-components";

const MesheryOperatorWrapper = styled.section`
  margin: 0 0 4rem 0;

  .hero-section {
    padding: 4rem 0 2rem 0;

    .hero-logo {
      display: block;
      margin: 0 auto;
      max-width: 320px;
      width: 75%;
      height: auto;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .hero-text {
      margin: 0 auto;
      padding: 1rem 0;

      h1 {
        font-size: 2.75rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.primaryColor};
      }

      p {
        color: ${(props) => props.theme.tertiaryColor};
        font-size: 1.125rem;
        line-height: 1.7;
        margin-bottom: 1.25rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
    }
  }

  .explain-1 {
    padding-top: 2rem;
    text-align: center;

    h1 {
      font-size: 2.25rem;
      padding: 1.25rem 0px;
      margin-bottom: 1rem;
    }

    .cards {
      margin: 2rem 0 4rem 0;
      width: 100%;
      padding: 3.5rem 1.5rem;
      background-color: ${(props) => props.theme.secondaryLightColorTwo};
      border-radius: 25px;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

      .card-col {
        display: flex;
      }

      .card {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 10.3px 17.9px rgba(0, 0, 0, 0.072),
          0 20.8px 33.4px rgba(0, 0, 0, 0.086),
          0 3.125rem 80px rgba(0, 0, 0, 0.12);
        margin: 0.5rem;
        padding: 2rem 1.75rem;
        background: ${(props) => props.theme.grey212121ToWhite};
        border-radius: 20px;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        h2 {
          text-align: left;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          color: ${(props) => props.theme.primaryColor};
        }

        p {
          text-align: left;
          padding: 0;
          color: ${(props) => props.theme.tertiaryColor};
          font-size: 1rem;
          line-height: 1.6;
          letter-spacing: 0;
          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
      }
    }
  }

  .showcase {
    margin: 4rem 0 6rem 0;
    text-align: center;

    h2 {
      font-size: 2rem;
      letter-spacing: 0.05em;
      margin-bottom: 2rem;
    }

    .slider {
      margin: 0 auto;
      width: 100%;
      max-width: 960px;
      position: relative;
      padding-bottom: 2.5rem;

      .slick-list {
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
      }

      .slick-track {
        display: flex;
        align-items: center;
      }

      .slick-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        outline: none;

        > div {
          width: 100%;
        }
      }

      .slide-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        a {
          display: block;
          width: 100%;
          cursor: pointer;
        }

        .diagram-image {
          display: block;
          width: 100%;
          max-height: 520px;
          height: auto;
          object-fit: contain;
          margin: 0 auto;
          border-radius: 8px;
        }
      }

      .slick-prev,
      .slick-next {
        width: 3rem;
        height: 3rem;
        z-index: 2;
        top: 45%;
        transform: translateY(-50%);

        &:before {
          font-size: 2.75rem;
          line-height: 1;
          color: ${(props) => props.theme.primaryColor};
          opacity: 0.85;
          transition: 0.3s ease;
        }

        &:hover:before {
          color: ${(props) => props.theme.secondaryColor};
          opacity: 1;
        }
      }

      .slick-prev {
        left: -3.5rem;
      }

      .slick-next {
        right: -3.5rem;
      }

      .slick-disabled {
        opacity: 0.35;
        cursor: default;
        &:before {
          opacity: 0.35;
        }
      }

      .slick-dots {
        bottom: 0;

        li button:before {
          font-size: 0.75rem;
          color: ${(props) => props.theme.secondaryColor};
        }

        li.slick-active button:before {
          opacity: 1;
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }

  .lists {
    margin: 4rem 0 3rem 0;

    .deploy-overview {
      padding-right: 1.5rem;

      h2 {
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.3;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.primaryColor};
      }

      p {
        color: ${(props) => props.theme.tertiaryColor};
        font-size: 1.05rem;
        line-height: 1.7;
        margin-bottom: 1rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

        strong {
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }

    .deploy-cards {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .deploy-card {
        background: ${(props) => props.theme.grey212121ToWhite};
        border: 1px solid ${(props) => props.theme.grey313131ToGreenC9FCF6};
        border-radius: 16px;
        padding: 1.75rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: 0.3s ease;

        &:hover {
          border-color: ${(props) => props.theme.primaryColor};
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.12);
        }

        .card-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.85rem;

          .icon-badge {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: ${(props) => props.theme.grey313131ToGreenC9FCF6};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 0.85rem;
            flex-shrink: 0;

            svg path {
              stroke: ${(props) => props.theme.green00D3A9ToGreen00B39F};
            }
          }

          h4 {
            font-size: 1.35rem;
            font-weight: 700;
            margin: 0;
            color: ${(props) => props.theme.primaryColor};
          }
        }

        p {
          color: ${(props) => props.theme.tertiaryColor};
          font-size: 1rem;
          line-height: 1.65;
          margin: 0;
          transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

          .command {
            font-family:
              SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
              "Courier New", monospace;
            background: ${(props) => props.theme.secondaryLightColorTwo};
            color: ${(props) => props.theme.green00D3A9ToGreen00B39F};
            padding: 0.2rem 0.5rem;
            border-radius: 6px;
            font-size: 0.9em;
            font-weight: 600;
            white-space: nowrap;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .showcase {
      .slider {
        width: 90%;

        .slick-prev {
          left: -2rem;
        }

        .slick-next {
          right: -2rem;
        }
      }
    }

    .lists {
      .deploy-overview {
        padding-right: 0;
        margin-bottom: 2rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero-section {
      padding: 2.5rem 0;

      .hero-logo {
        max-width: 220px;
        margin-bottom: 1.5rem;
      }

      .hero-text {
        h1 {
          font-size: 2rem;
          text-align: center;
        }

        p {
          text-align: left;
        }
      }
    }

    .explain-1 {
      h1 {
        font-size: 1.75rem;
      }

      .cards {
        padding: 2rem 1rem;

        .card {
          margin: 0.75rem 0;
        }
      }
    }

    .showcase {
      margin: 3rem 0 4rem 0;

      .slider {
        width: 95%;

        .slick-prev,
        .slick-next {
          display: none !important;
        }
      }
    }

    .lists {
      margin: 2.5rem 0;

      .deploy-overview {
        h2 {
          font-size: 1.5rem;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    margin: 0 0 2rem 0;

    .hero-section {
      padding: 1.5rem 0;

      .hero-logo {
        max-width: 160px;
        width: 55%;
        margin-bottom: 1rem;
      }

      .hero-text {
        h1 {
          font-size: 1.65rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
      }
    }

    .explain-1 {
      padding-top: 1rem;

      h1 {
        font-size: 1.35rem;
        padding: 0.5rem 0;
      }

      .cards {
        padding: 1.25rem 0.75rem;
        border-radius: 16px;
        margin: 1.25rem 0 2.5rem 0;

        .card {
          margin: 0.5rem 0;
          padding: 1.25rem 1rem;
          border-radius: 12px;

          h2 {
            font-size: 1.05rem;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 0.9rem;
            line-height: 1.55;
          }
        }
      }
    }

    .showcase {
      margin: 2.5rem 0 3rem 0;

      h2 {
        font-size: 1.4rem;
        margin-bottom: 1.25rem;
      }

      .slider {
        width: 100%;
        padding-bottom: 2rem;

        .slide-container {
          padding: 0.25rem;

          .diagram-image {
            max-height: 240px;
            border-radius: 6px;
          }
        }
      }
    }

    .lists {
      margin: 2rem 0;

      .deploy-overview {
        h2 {
          font-size: 1.3rem;
          line-height: 1.35;
          margin-bottom: 1rem;
        }

        p {
          font-size: 0.9rem;
          line-height: 1.55;
          margin-bottom: 0.75rem;
        }
      }

      .deploy-cards {
        gap: 1rem;

        .deploy-card {
          padding: 1.25rem 1rem;
          border-radius: 12px;

          .card-header {
            margin-bottom: 0.65rem;

            .icon-badge {
              width: 30px;
              height: 30px;
              border-radius: 8px;
              margin-right: 0.65rem;

              svg {
                width: 16px;
                height: 16px;
              }
            }

            h4 {
              font-size: 1.15rem;
            }
          }

          p {
            font-size: 0.88rem;
            line-height: 1.55;

            .command {
              display: inline-block;
              word-break: break-word;
              font-size: 0.85em;
              padding: 0.15rem 0.35rem;
              white-space: normal;
            }
          }
        }
      }
    }
  }
`;

export default MesheryOperatorWrapper;
