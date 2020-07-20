import styled from 'styled-components';

const FotterWrapper = styled.section`
    padding-top: 195px;
    padding-bottom: 45px;
    overflow: hidden;
    background: #f7f7f7;
    position: relative;
  .section__particle{
      position: absolute;
      &.one{
          bottom: -20%;
          right: -80%;
      }
  }
  ul{
    padding: 0;
    list-style: none;
    margin: 0; 
  }
  p{
    font-size: 18px;
    line-height: 38px;
    color: ${props => props.theme.headingColor ?  props.theme.headingColor : '#1D316C'};
  }
  .copyright-text{
      margin-top: 30px;
      font-size: 16px;
  }
  a{
    transition: 450ms all; 
    &:hover {
      color: ${props => props.theme.secondaryColor ?  props.theme.secondaryColor : '#FB7B81'};
    }
  }
  .footer-logo {
    margin-bottom: 15px;
    display: block;
  }
  .footer-widgets {
    &.first {
      margin-top: -10px;
    }
  }
  .subscribe-form {
        position: relative;
        display: flex;
        margin-top: 30px;
        input{
            background: transparent;
            flex-basis: 100%;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid ${props => props.theme.headingColor ?  props.theme.headingColor : '#1D316C'};
        }
        button {
            position: absolute;
            right: 0px;
            top: 0;
            height: 100%;
            min-width: 20px;
            border-radius: 5px;
            background: transparent;
            color: ${props => props.theme.headingColor};
            svg{
                color: ${props => props.theme.headingColor ?  props.theme.headingColor : '#1D316C'};
                font-size: 22px;
                line-height: 100%;
            }
        }
    }
  .footer-widgets {
    .widget-title { 
      font-size: 24px;
      margin-bottom: 35px;
    }
    
    .social{
      li {
        display: inline-block;
        a {
          display: block;
          height: 30px;
          width: 30px;
          line-height: 33px;
          border-radius: 50%;
          border: 1px solid ${props => props.theme.headingColor ?  props.theme.headingColor : '#1D316C'};
          text-align: center;
          transition: 450ms all;
          &:hover {
            color: ${props => props.theme.secondaryColor ?  props.theme.secondaryColor : '#FB7B81'};  
            border-color: ${props => props.theme.secondaryColor ?  props.theme.secondaryColor : '#FB7B81'};
          }
        }
      }
      li + li {
        margin-left: 15px;
      }
    }
    .widget-catagory {
      li {
        a {
          font-size: 18px;
          line-height: 22px;
        }
      }
      li + li {
        margin-top: 15px;
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
    .footer-widgets {
      margin-bottom: 70px;
    }
    .section__particle{
        &.one{
            bottom: 0;
            right: -58%;
        }
    }
  }
  @media only screen and (max-width: 568px) {
    background-position: 10%;
    text-align: center;
    .footer-widgets {
      .info {
        li {
          justify-content: center;
        }
      }
    }
  }
  @media only screen and (max-width: 375px) {
    
  }
`;

export default FotterWrapper;
