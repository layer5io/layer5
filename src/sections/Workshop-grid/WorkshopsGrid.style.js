import styled from "styled-components"

export const WorkshopPageWrapper = styled.div`

  .btn-and-status {
    position: absolute;
    top: 360px;
    right: 20px;
    width: 100%;

    p {
      color: darkgrey;
      font-size: 20px;
      margin-left: 20px;
      float: left;
      padding-left: 25px;
    }
  }

  .btn-and-status-open {
    display: block;
    width: 100%;
    height: 100%;
    padding-bottom: 65px;

    p {
      color: darkgrey;
      font-size: 20px;
      margin-left: 20px;
      float: left;
    }
  }

  .readme-btn {
    float: right;
    margin: 0 20px 20px 0;
    padding: 10px 15px;
    border: none;
    background-color: turquoise;
    font-size: 20px;
    font-weight: 500;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    -webkit-transition: 0.5s ease-in-out all;
    transition: 0.5s ease-in-out all;

    &:hover {
      color: turquoise;
      background-color: white;
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .text-contents {
    display: none;
    width: 100%;
    height: 100%;
  }

  .active {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px;
  }

  .social-icons {
    display: flex;
    float: left;
    margin-left: 20px;
  }

  .links {
    display: flex;
    color: turquoise;
    border: none;
    align-items: center;
    padding: 5px 15px;
    background-color: whitesmoke;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 400;
    transition: 0.5s ease-in-out all;

    &:hover {
      color: darkturquoise;
      background-color: gold;
      font-weight: 600;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    }

    img {
      height: 20px;
      width: auto;
      display: block;
      padding-right: 10px;
    }
  }

  .workshop-list-wrapper {
    padding: 50px 0;
  }
  .workshop-grid-wrapper {
    padding-bottom: 60px;
    margin-top: 80px;
  }

  .workshop-grid-card {
    width: 100%;
    display: block;
    height: auto;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);
    -webkit-transition: 0.5s ease-in-out all;
    transition: 0.5s ease-in-out all;

    &:hover {
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
    }
  }

  @media only screen and (max-width: 912px) {
    .workshop-page-wrapper {
      padding-bottom: 80px;
    }
  }

  @media only screen and (max-width: 600px) {
    .links {
      padding: 0px 10px;
      margin-right: 5px;
      font-size: 15px;

      img {
        height: 15px;
      }
    }

    .readme-btn {
      margin: 0 10px 10px 0;
      padding: 5px 5px;
    }
  }
`
