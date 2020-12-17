import styled from "styled-components";

const NavigationWrap = styled.header`
  background: transparent;
  position: fixed;
  width: 100%;
  z-index: 9999;
  top: 0;
  transition: all 0.3s ease 0s;
  .navbar-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .mobile-menu-icon {
    display: none;
    color: ${props => props.theme.menuColor};
    font-size: 24px;
  }
  .margin-space.first{
    position: fixed;
    opacity: 1;
    width: 75%;
    height: 48px;
    display: block;
  }
  .margin-space.second{
    position: fixed;
    top: 81px;
    opacity: 1;
    width: 75%;
    height: 46px;
    display: block;
  }
  .dropdown {
    position: fixed;
    background: white;
    opacity: 0;
    border: 1px solid #f5f5f5;
    margin: 72px 2.5vw;
    width: 75%;
    left: auto;
    right: 0;
    padding: 1em;
    border-radius: 15px;
    display: block;
    box-shadow: 0px 10px 10px 0px rgba(0, 211, 169, 0.10);
    animation: bobbleout ease .3s forwards;
    pointer-events:none;
  }
  .nav-grid {
    display: grid;
    grid-template-columns: 30% 70%;
      .hr {
        border-right: 2px solid #f1f1f1;
        height: 95%;
        position: relative;
        .sub-item {
          &:after {
            border-bottom: 2px solid lightgray;
            content: "";
            display: block;
            margin-left: -10px;
            width: 10%;
          }
          &:hover {
            &:after {
              border-bottom: 2px solid ${props => props.theme.menuColor};
              margin-left: 0px;
              transition: 450ms all ease-in-out;
            }
          }
        }
        .action-item {
          position: absolute;
          bottom: 0;
          margin-left: 10px;
          a {
            span{
              width: 40%;
              font-size: 17px;
            }
            img {
              margin-left: 10px;
              width: 17px;
              height: auto;
              transition: .3s all ease;
            }
            :hover{
              img{
                margin-left: 15px;
              }
            }
          }
        }
      }
      .nav-display {
        padding-left: 15px;
        display: grid;
        grid-template-columns: 50% 50%;
      }
  }
  @keyframes nav-bar-anim {
    0% {
      opacity: 0;
      transform: translate3d(0px, 0px, 0px) scale(.5, .5);
    }

    100% {
      transform: translate3d(0px, 0px, 200px) scale(1, 1);
      opacity: 1;
    }
  }
  @keyframes bobble {
    0% {
        transform: translate3d(0px, -15px, 0px) scale(.75, .75); opacity: 0; visibility: hidden; 
    }
    50% {
        transform: translate3d(0px, 11px, 8px) perspective(800px) ;
        opacity: 70%
    }
    100% {
        transform: translate3d(0px, 8px, 2px) scale(1, 1);
        opacity: 100%
    }
  }
  @keyframes bobbleout {
    0% {
        transform: translate3d(0px, 8px, 2px) scale(1, 1);
        opacity: 100%
    }
    50% {
        transform: translate3d(0px, 11px, 8px) perspective(800px) ;
        opacity: 70%
    }
    100% {
        transform: translate3d(0px, -15px, 0px) scale(.75, .75); opacity: 0; visibility: hidden;
    }
  }
  ul:hover div > ul,
  ul div ul:hover {
    animation: bobble ease .3s forwards;
    pointer-events: auto;
    visibility: visible;
  }
  ul:hover > span:hover ~ div > ul{
    animation: bobbleout ease .3s forwards;
  }
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
    .nav-item {
      position: relative;
      margin: 48px 0px 0px 0px;
      padding-bottom: 48px;
    }
    .dropdown {
      li {
        padding: 0;
        a {
          color: ${props => props.theme.menuColor};
          display: block;
          &:hover {
            color: ${props => props.theme.menuHoverColor}; !important;
            margin-left: -10px;
          }
          &:before {
            content: none;
          }
        }
      }
    }
    a,
    .nav-active {
      position: relative;
      color: ${props => props.theme.menuColor};
      font-size: 15px;
      transition: 450ms all;
      padding: 0px 20px 5px 20px;
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        left: 20;
        bottom: 0;
        width: 20px;
        height: 1px;
        opacity: 0;
        background: ${props => props.theme.menuHoverColor};
        transition: 450ms all;
      }
      &:hover {
        color: ${props => props.theme.menuHoverColor};
        &:before {
          opacity: 1;
        }
      }
    }
  }
  .logo {
    margin-top: 8px;
    transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
    img {
      width: 135px;
    }
  }
  &.scrolled {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 30px;
    background: white;
    .logo {
      width: 100px;
    }
    .nav {
      .margin-space.first{
        height: 28px;
      }
      .margin-space.second{
        top: 56px;
        height: 28px;
      }
      .nav-item{
        margin: 28px 0px 0px 0px;
        padding-bottom: 28px;
        a {
          color:${props => props.theme.menuColor};
          &:hover {
            color: ${props => props.theme.menuHoverColor};
          }
        }
      }
      ul .dropdown {
        margin: 52px 2.5vw;
      }
    }
  }

  @media only screen and (max-width: 912px) {
    height: auto;
    min-height: 50px;
    padding: 15px 20px;
    background: #fff;
    &.scrolled {
      padding: 8px 20px;
      .nav .collapsed {
        li {
          padding: 0;
          a {
            padding: 8px 10px;
            display: block;
          }
        }
        li + li {
          padding-left: 0;
        }
      }
    }
    .nav-grid {
      display: block;
    }
    .has-dropdown {
      a {
        position: relative;
        &:before {
          content: "";
        }
      }
    }
    .dropdown {
      position: relative;
      left: 0;
      margin-top: 0;
      box-shadow: none;
    }
    .navbar-wrap {
      display: block;
      position: relative;
    }
    .logo {
      width: 100%;
      display: block;
      margin: 7px 0 0 0;
      img {
        width: 110px;
      }
    }
    .mobile-menu-icon {
      display: inline-block;
      position: absolute;
      top: 8px;
      right: 3px;
      cursor: pointer;
    }
    .nav {
      width: 100%;
      .collapsed {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        transition: 450ms all ease-in-out;
        overflow: hidden;
        max-height: 0;

        &.is-expanded {
          padding-top: 15px;
          overflow-y: auto;
          max-height: 250px; /* approximate max height */
        }
        li {
          padding: 0;
          margin: 0px 0px;
          width: 100%;
          .dropdown {
            li {
              a {
                color: ${props => props.theme.menuColor};
              }
            }
          }
          a {
            padding: 8px 10px;
            display: block;
            color:${props => props.theme.menuColor};
            &:before {
              content: none;
            }
          }
        }
      }
    }
  }
  .anchor:before {
    content: none;
  }
  .post-block{
    border-radius: 3px;
    &:hover{
        .post-thumb-block{
            .gatsby-image-wrapper{
                transform: scale3d(1.1,1.1,1);
            }
        }
        .readmore-btn{
            color: ${props => props.theme.menuHoverColor};
            svg{
                margin-left: 3px;
                 transform: scale(1.2);
            }
        }
        .post-title{
            color: ${props => props.theme.menuHoverColor};
        }
    }
    a:before {
      content: none;
    }
  }

  .readmore-btn-wrapper{
    display:flex;
    justify-content: space-between;
  }

  .post-thumb-block{
    overflow: hidden;
    border-radius: 3px 3px 0 0;
    height: 180px;
    .gatsby-image-wrapper{
        height:100%;
        transition: all 0.3s ease-in;
    }
    img{
        max-width: 100%;
        max-height: 180px;
        width: auto;
        height: inherit;
        display: block;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        border-radius: 3px 3px 0 0;
    }
  }
  .post-content-block{
    border-radius: 0 0 3px 3px;
    box-shadow: 0px 2px 4px 0px rgba(12, 0, 46, 0.06);
    padding: 10px 35px;
    position: relative;
  }
  .post-title{
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: rgb(122, 132, 142);
    margin-bottom: 10px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-transition: 450ms all;
    transition: 450ms all;
  }
  .readmore-btn {
    color: rgba(0,0,0,0.35);
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    padding-left: 0px;
    svg{
      margin-left: 0px;
      font-size: 27px;
      transition: all 0.3s linear;
    }
  }
`;

export default NavigationWrap;
