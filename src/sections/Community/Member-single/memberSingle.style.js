import styled from "styled-components";

export const MemberSingleWrapper = styled.div`
  margin: 4.5rem 0 3.125rem 0;
  .backBtn {
    font-weight: 600;
    margin-bottom: 1rem;
    @media screen and (max-width: 62rem) {
      display: none;
    }
    a {
      display: flex;
      color: ${(props) => props.theme.primaryColor};
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

      &:hover {
        color: ${(props) => props.theme.linkColor};
      }

      h4 {
        line-height: 1.75rem;
        margin-left: 0.5rem;
      }
      svg {
        font-size: 1.75rem;
      }
    }
  }
  .page-heading {
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: ${(props) => props.theme.primaryColor};
    text-align: right;
    font-weight: 400;
  }
  ul {
    list-style: none;
  }
  .profile-image {
    border-radius: 5px;
    transition: 0.9s;
  }

  .body {
    display: block;
    position: relative;
    text-align: center;
    z-index: 1;
    // overflow: hidden;

    .text {
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 0.5px;
      margin-top: 0.625rem;
      padding: 0;
      text-align: left;
    }
    .bio {
      margin-top: 1.25rem;
    }
    .location {
      margin-top: 0;
    }

    .bold {
      font-weight: 600;
    }
  }
  .profile-image {
    &-inactive {
      filter: grayscale(1);
      &:hover {
        transition: 0.9s;
        border-radius: 5px 50px 5px 50px;
      }
    }
    &-inactive:before {
      content: "INACTIVE";
      position: absolute;
      top: 18px;
      left: -56px;
      transform: rotate(-45deg);
      display: flex;
      height: 65px;
      width: 206px;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      background: linear-gradient(45deg, rgb(94, 93, 93), rgb(57, 57, 57));
      color: rgb(255, 255, 255);
      z-index: 10;
      align-items: center;
    }

    &:hover {
      transition: 0.9s;
      border-radius: 5px 50px 5px 50px;
    }
  }
  .header {
    display: block;
    position: relative;
    text-align: center;
    padding: 1.875rem 0 3px;
    margin-bottom: 1.25rem;
    z-index: 1;
    overflow: hidden;
    border-bottom: 3px solid ${(props) => props.theme.secondaryColor};

    .name {
      font-weight: 600;
      font-size: 40px;
      line-height: 1;
      color: ${(props) => props.theme.text};
      letter-spacing: -2px;
      margin-top: 0.9375rem;
      padding: 0;
      text-align: left;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }

    .position {
      font-weight: 400;
      font-size: 22px;
      font-style: italic;
      color: ${(props) => props.theme.menuColor};
      letter-spacing: 0.5px;
      margin-top: 0.9375rem;
      padding-top: 1px;
      width: 50%;
      text-align: left;
      transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
  }

  .profile-social-links {
    display: flex;
    justify-content: left;
    width: 90%;
    padding-left: 0 !important;
    //my code
    .tooltip {
      position: relative;
      display: inline-block;
    }
    .tooltip-text {
      visibility: hidden;
      font-size: 14px;
      background-color: #333;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 2px;
      position: absolute;
      z-index: 1;
      width: 80px;

      left: 50%;
      bottom: 115%; /* Position the tooltip above the text */
      //width: 110px;
      margin-left: -40px; /* Center the tooltip */
      opacity: 0;
      transition: opacity 0.3s; /* Add a smooth fade-in effect */
    }
    .mashmap {
      width: 90px;
    }
    .community {
      left: 30%;
      width: 100px;
    }
    .docker-extension {
      left: -18%;
      width: 150px;
    }
    .meshery-catalog {
      left: -18%;
      width: 150px;
    }
    .meshery-operator {
      left: -18%;
      width: 150px;
    }
    .image-hub {
      left: 33%;
      width: 100px;
    }
    .landscape {
      left: 33%;
      width: 100px;
    }
    .nighthawk {
      left: 28%;
      width: 100px;
    }
    .tooltip:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
    //till here
    li {
      display: block;
      color: black;
      text-align: left;
      padding: 10px;
      border-radius: 100%;
      -webkit-transition: box-shadow 0.2s;
      -moz-transition: box-shadow 0.2s;
      -o-transition: box-shadow 0.2s;
      transition: box-shadow 0.2s;
      transition: 0.3s;

      a {
        color: black;
      }

      &:hover {
        box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, 0.12),
          0 1px 1px 0 rgba(0, 0, 0, 0.24);
        background: white;

        .github {
          color: #211f1f;
        }
        .linkedin {
          color: #0e76a8;
        }
        .twitter {
          color: #000;
        }
        .bio {
          color: #00b39f;
          cursor: pointer;
        }
      }

      &:active {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
      }

      svg {
        color: ${(props) => props.theme.whiteToGrey737373};
        display: block;
        width: 2rem;
        transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      img {
        display: block;
        width: 2rem;
        height: 2rem;
        max-width: none;
      }
    }
  }
  .start-contributing {
    margin-top: 2.5rem;
    text-align: center;
    p {
      font-weight: 700;
    }
  }
  .tooltip {
    position: relative;
    display: inline-block;
   
  }

  .tooltip .tooltiptext {
    
    font-size: 14px;
    visibility: hidden;
   
    width: 100px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 2px;
    position: absolute;
    z-index: 1;
    bottom: 115%; /* Position the tooltip above the list item */
    left: 50%; /* Center the tooltip */
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
  }
  .tooltip .small-tooltip{
    width:150px;
  }
  .tooltip .large-tooltip{
    width:200px;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
  .executive-bio {
    margin: 4.5rem 0 3.125rem 0;

    .exec-bio-image {
      margin-bottom: 1rem;
      text-align: center;
      img {
        -ms-interpolation-mode: bicubic;
        vertical-align: middle;
      }
      .gatsby-image-wrapper,
      .old-gatsby-image-wrapper {
        margin: 1rem auto;
        border-radius: 100%;
        overflow: hidden;
        width: 140px;
        height: 140px;
        box-shadow: 0px 0px 8px 1px rgba(0, 179, 159, 1);
      }
      p {
        margin: 0 auto;
      }
      .profile-social-links {
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
    }
  }
`;
