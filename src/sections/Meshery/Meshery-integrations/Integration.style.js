import styled from "styled-components";
import Slider from "react-slick";

export const HoneycombGrid = styled.div`
  .heading {
    text-align: center;

    h1 {
      line-height: 3.75rem;
    }

    h2 {
      font-weight: normal;
    }
  }

  .category {
    display: flex;
    flex-wrap: wrap;
    margin: 2.5625rem 1.2rem;
    gap: 0.625rem;
    justify-content: center;
  }

  .items {
    background-color: #f0f0f0;
    padding: 0.625rem 1.5625rem;
    border-radius: 0.625rem;
    text-transform: uppercase;
    color: #1e2117;
    font-size: 0.875rem;
    cursor: pointer;
  }

  .selected {
    background-color: ${(props) => props.theme.darkJungleGreenColor};
    color: ${(props) => props.theme.white};
  }

  ul {
    margin: 2.5rem 0 0 0;
    padding-left: 50px;
    padding-right: 50px;
  }

  .container-active,
  .container-inactive {
    display: flex;
    height: 100%;
    background: ${(props) =>
  props.theme.DarkTheme ? props.theme.elevationColor : props.theme.white};
    justify-content: center;
    align-items: center;
    padding: 0.625rem;
    position: relative;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);

    .integration-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      overflow: hidden;
      justify-content: center;
      position: absolute;
      img {
        transition: all 1s cubic-bezier(1, 0.82, 0.165, 1);
        opacity: 100%;
      }
      .integration-icon {
        flex-shrink: 0;
      }
      .integration-content {
        opacity: 0;
        text-align: center;
        align-items: center;
        height: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        transition: all 1s linear;
        opacity: 1;
        overflow: hidden;
        .title {
          line-height: 1.375rem;
          color: ${(props) =>
    props.theme.DarkTheme ? props.theme.white : props.theme.black};
          transition: all 0.5s cubic-bezier(1, 0.82, 0.165, 1);
          // margin-bottom: -2.7rem;
          font-size: 0.675rem;
          opacity: 0.2;
          font-weight: 600;
        }
        .learnMoreBtn {
          padding: 5px 10px;
          color: white;
          font-size: 0.875rem;
          min-width: unset;
          box-shadow: none;
        }
      }
    }
    :hover {
      .integration-container {
        img {
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
          height: 0%;
          opacity: 0%;
        }
        .integration-content {
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          opacity: 1;
          height: 100%;
          .title {
            // margin-top: -50%;
            font-size: 1.2rem;
            opacity: 1;
          }
          .learnMoreBtn {
            &:hover {
              background-color: #009b8a;
            }
          }
        }
      }
      background: #00d3a9;
      ::after {
        content: "";
        background: ${(props) =>
      props.theme.DarkTheme
        ? props.theme.elevationColor
        : props.theme.white};
        margin: 0px 0px 0 4px;
        clip-path: polygon(
          50% 0%,
          100% 25%,
          100% 75%,
          50% 100%,
          0% 75%,
          0% 25%
        );
        height: 95%;
        width: 95%;
        position: absolute;
        left: 0;
        z-index: -1;
      }
    }
  }
`;

export const IntegrationsWrapper = styled.div`
  max-width: 75rem;
  margin: 5.1875rem auto;
  text-align: center;
`;

export const IntegrationCard = styled.div`
  display: flex;
  margin: 5rem 1rem;
  gap: 5rem;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  .container {
    padding: 3.125rem;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0 3.125rem 3.125rem 3.125rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
    flex: 0 1 auto;
    max-width: 30rem;
    border-width: 0px 1px 1px 0px;
    border-style: solid;
    border-color: #00d3a9;

    p,
    h2 {
      text-align: center;
    }
  }

  .open-modal-btn {
    background-color: #00b39f;
    color: white;
    :hover {
      color: black;
    }
  }
`;

export const IntegrationSlider = styled(Slider)`
  .slick-prev:hover, .slick-next:hover{
    box-shadow: none;
    outline:none;
  }

  .slick-dots{
    bottom: -1rem;
  }

  .slick-dots li.slick-active button:before {
    color: #00b39f;
  }

  .slick-dots li button:before{
    font-size:.5rem;
    color: #00b39f;
  }

  .slick-dots li button:hover {
    box-shadow:none;
    outline:none;
  }

  .slick-arrow {
    margin:1rem 0 0 -.7rem;
  }

  .slick-slide {
    width: auto !important;
    margin: 0 .5rem;
  }

  .slick-prev::before {
    content:"\u2039";
    font-size:5rem;
    line-height: 0;	
    margin-left:-.5rem;
    color:#00b39f
  }

  .slick-track {
    display:flex;
  }

  .slick-next::before {
    content:"\u203A";
    font-size:5rem;
    line-height: 0;	
    color:#00b39f
  }

  .slick-prev, .slick-next {
    top:0
  }

  @media screen and (max-width: 500px){
    .slick-slide {
      width:30rem !important;
      margin-bottom:2rem
    }
  }
  `;
