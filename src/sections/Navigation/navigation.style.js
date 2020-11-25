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

  /*Drop down style*/
  .dropdown {
    position: fixed;
    background: white;
    opacity: 0;
    border: 1px solid #f5f5f5;
    margin: 1vw 2.5vw;
    width: 75%;
    left: auto;
    right: 0;
    padding: 1em;
    border-radius: 15px;
    display: none;
    box-shadow: 0px 10px 10px 0px rgba(0, 211, 169, 0.10);
    -webkit-transform: translateY(20px);
    -ms-transform: translateY(20px);
    animation: bobble ease .45s forwards;
  }
  .nav-grid {
    display: grid;
    grid-template-columns: 30% 70%;
      .hr {
        border-right: 2px solid #f1f1f1;
        height: 95%;
      } 
      .nav-display {
        padding-left: 15px;
        display: grid;
        grid-template-columns: 50% 50%;
      }
  }
  .nav-img {
    max-width: 90%;
  }
  .nav-div {
    margin-top: -20px;
    margin-right: 15px;
    padding: 10px;
    text-align: center;
    box-shadow: 1px 1px 3px 3px rgba(0, 0, 0, 0.025), -1px -1px 3px 3px rgba(0, 0, 0, 0.025);
    border-radius: 10px;
    &:hover {
      box-shadow: none;
      color: #00b39f;
      cursor: pointer;
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
        /* animation-timing-function: ease-in; */

        transform: perspective(700px) scale(.5, .5); opacity: 0; visibility: hidden; 
    }
    50% {
        transform: translate3d(0px, 11px, 8px);
        opacity: 60%
        


    }
    100% {
        transform: translate3d(0px, 8px, 2px);
        opacity: 100%
        animation-timing-function: ease .5s;
    }
  }
  ul li:hover > ul,
  ul li ul:hover {
    opacity: 1;
    visibility: visible;
    -webkit-transform: translateY(0px);
    -ms-transform: translateY(0px);
    transform: translateY(0px);
    display: block;
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
      .dropdown {
        li {
          padding: 0;
          a {
            color: ${props => props.theme.menuColor};
            display: block;
            padding: 5px 15px;
            &:hover {
              color: ${props => props.theme.menuHoverColor}; !important;
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
      li {
        .dropdown {
          li {
            padding: 0;
          }
        }
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
`;

export default NavigationWrap;
