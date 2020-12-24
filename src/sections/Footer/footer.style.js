import styled from "styled-components";

const FooterWrapper = styled.section`
  padding-top: 40px;
  padding-bottom: 25px;
  background: black;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  
  .footer-head{
    margin: 0 40px 20px 0;
    .footer-logo-pos{
      padding: 0px;
      .footer-logo {
        max-width: 200px;
        height: auto;
      }
    }
    .links{
      float: right;
      filter: invert(70%);
    }
  }
  .section__particle{
      position: absolute;
      &.one{
          left: 0;
          top: 20%;
          width: 270px;
      }
  }

  .subscribe{
    font-family: "qanelas_softregular";

    margin: 0px 0 30px 0;
    display: inline-flex;
    input{
      padding: 16px;
      margin-right: 5px;
      width: 300px;
      border: 1px solid white;
      background-color: #1D1F25;
      border-radius: 4px;
      color: white;
    }
    float: right;
    margin-right: 40px; 
  }, span {
    display: block;
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 5px;
  }

  .desc-info{
    padding-right: 25px;
    font-style: italic;
  }

  ul{
    padding: 0;
    list-style: none;
    margin: 0;
    li .anchor {
      color: ${props => props.theme.primaryLightColor};
    }
  }
  p{
    color: ${props => props.theme.white};
  }
  .widget-title{
    font-family: "qanelas_softregular";
    margin-bottom: 20px;
    color: ${props => props.theme.white};

    &:hover {
      color: ${props => props.theme.secondaryColor};
    }
  }
  .anchor{
    font-family: 'Open Sans', sans-serif;
    transition: 400ms all;
    color: ${props => props.theme.white};
    &:hover {
      color: ${props => props.theme.secondaryColor};
    }
  }
  .footer-widgets {
    &.first {
      margin-top: -10px;
    }
  }
  .footer-widgets {
    margin-bottom: 25px;

    
      },    
      .githitle {
        color: ${props => props.theme.white};
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 20px;
        },
    .widget-title {
      color: ${props => props.theme.primaryLightColor};
    }
    .widget-category {
      li {
        .anchor {
          font-size: 16px;
          line-height: 22px;
        }
      }
      li + li {
        margin-top: 7px;
      }
    }
  }
  .footer-bottom{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    .footer-menu{
      order: 2;
      li {
        display: inline-block;
        font-size: 18px;
      }
      li + li{
        margin-left: 40px;
      }
    }
    .copyright-text {
      font-size: 14px;
      color: #ccc;
      text-align: center;
    
      transition: 450ms all;
      &:hover {
        color: ${props => props.theme.secondaryColor};
      }
    p{
      font-size: 18px;
      line-height: 38px;
      color: ${props => props.theme.white};
    }
  }
  @media only screen and (max-width: 1600px) {
    .section__particle{
      &.one{
          display: none;
      }
    }
  }
  @media only screen and (max-width: 1280px) { 
    .footer-widgets {
      .social {
        li + li {
          margin-left: 15px;
        }
      }
    }
  }
  @media only screen and (max-width: 912px) {
    background-position: -200px; 
    .footer-widgets {
      .widget-category {
        margin-left:0px;
      }
      margin-bottom: 70px;
    }
    .footer-bottom {
      display: block;
      margin-top: 30px;
     .footer-menu {
        margin-bottom: 40px;
      }
      .footer-menu {
        text-align: center;
      }
    }
  }
  @media only screen and (max-width: 568px) {
    background-position: 10%;
    // text-align: center;
    .footer-widgets {
      margin-bottom: 20px;
      .info {
        li {
          justify-content: center;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    .footer-bottom {
      .footer-menu {
        li {
          display: block;
        }
        li + li {
          margin-left: 0;
          margin-top: 30px;
        }
      }
    }
  }
`;

export default FooterWrapper;