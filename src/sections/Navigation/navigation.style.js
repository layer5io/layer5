import styled from "styled-components";

const NavigationWrap = styled.header`
  background: ${props => props.theme.white};
  position: sticky;
  width: 100%;
  margin-top: 1rem;
  z-index: 9999;
  top: 0;
  transition: all 0.3s ease 0s;
  .navbar-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .mobile-menu-icon {
    display: none;
    color: ${props => props.theme.menuColor};
    font-size: 24px;
  }
  .dropdown {
    position: absolute;
    background: white;
    opacity: 0;
    border: 1px solid #f5f5f5;
    border-radius: 50px;
    top: 100%;
    left: 0;
    width: 100%;
    display: block;
    visibility: hidden;
    box-shadow: 0px 5px 10px 1px rgba(0, 179, 159, 0.50);
    animation: bobbleout ease .3s forwards;
    pointer-events: none;
  }
  .wrap {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 350px;
    margin-top: -2rem; 
    visibility: visible;
  }
  .mobile-dropdown {
    display: none;
  }
  .title {
    color: black;
    font-size: 20px;
    font-weight: 600;
  }
  .arrow-icon {
    background: #00B39F;
    border-radius: 25%;
  }
  .nav-grid {
    display: grid;
    grid-template-columns: 35% 65%;
    .hr {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 3em;
      background: #fafafa;
      border-radius: 50px 0 0 50px;
      .sub-item {
        padding: 0;
      }
      .section {
        color: black;
        font-size: 20px;
        font-weight: 600;
        margin-left:0px;
        padding-left:0px;
      }
      li:nth-last-child(2) {
        margin-bottom: auto;
      }
      .action-items {
        margin-top: 10px;
        position: relative;
        .action-link {
          padding: 2px 0;
          display: block;
          .readmore-btn {
            color: ${props => props.theme.black};
          }
          &:before {
            content: none;
          }
          &:hover{
            .readmore-btn {
                color: ${props => props.theme.menuHoverColor};
                svg{
                    margin-left: 3px;
                      transform: scale(1.2);
                }
            }
          }
        }
      }
    }
    .nav-display {
      border-left: 2px solid #f1f1f1;
      background: #ffffff;
      padding-top: 3em;
      border-radius: 0 50px 50px 0;
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
        transform: translate3d(0px, -15px, 0px) scale(.75, .75); opacity: 0;
    }
    50% {
        transform: translate3d(0px, 0px, 4px) perspective(800px) ;
        opacity: 70%
    }
    100% {
        transform: translate3d(0px, 0px, 8px) scale(1, 1);
        opacity: 100%
    }
  }
  @keyframes bobbleout {
    0% {
        transform: translate3d(0px, 0px, 8px) scale(1, 1);
        opacity: 100%
    }
    50% {
        transform: translate3d(0px, 0px, 4px) perspective(800px) ;
        opacity: 70%
    }
    100% {
        transform: translate3d(0px, -15px, 0px) scale(.75, .75); opacity: 0; visibility: hidden;
    }
  }
  @keyframes flowin {
    0% {
      transform: translate3d(-10px, 0px, 0px);
      opacity: 0;
    }
    50% {
      transform: translate3d(10px, 0px, 0px);
      opacity: 0.5;
    }
    100% {
      transform: translate3d(0px, 0px, 0px);
      opacity: 1;
    }
  }
  ul:hover > ul {
    animation: bobble ease .3s forwards;
    pointer-events: auto;
    visibility: visible;
  }
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
    }
    ul.collapsed {
      margin: 2rem 0 2rem 0;
    }
    .nav-item {
      position: relative;
      overflow: hidden;
      &:hover {
        .menu-link {
          span {
            color: ${props => props.theme.menuHoverColor};
            &:before {
              opacity: 1;
              animation: flowin .5s ease-in;
            }
          }
        }
      }
    }
    .dropdown {
      li {
        padding-top: 5px;
        a {
          color: ${props => props.theme.menuColor};
          display: block;
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
      display: flex;
      line-height: 1.5rem;
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
    .menu-link {
      margin: auto 1.25rem;
      padding: 0.25rem 0 0.25rem;
      &:before {
        content: none;
      }
      span {
        &:before {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1px;
          opacity: 0;
          background: ${props => props.theme.menuHoverColor};
        }
      }
    }
  }
  .logo {
    margin-top: 8px;
    transition: all 0.8s cubic-bezier(0.3, 0.8, 0.2, 1) 0s;
    img {
      width: 155px;
    }
  }
  &.scrolled {    
    box-shadow: rgba(0, 179, 159, 0.2) 0px 10px 25px;
    background: white;
    .nav {
      .nav-item{
        a {
          color:${props => props.theme.menuColor};
          &:hover {
            color: ${props => props.theme.menuHoverColor};
          }
        }
      }
    }
    .wrap {
      height: 300px;
      margin-top: -34px;
    }
  }

  @media only screen and (max-width: 912px) {
    height: auto;
    min-height: 50px;
    padding: 15px 20px;
    background: #fff;
    .nav {
      margin-top: 7px;
    }
    &.scrolled {
      padding: 8px 20px;
    }
    ul.collapsed {
      display: none;
    }
    .navbar-wrap {
      display: flex;
      align-items: center;
    }
    .logo {
      width: 100%;
      display: block;
      margin-top: 7px;
      img {
        width: 130px;
      }
    }
    .mobile-dropdown-container {
      position: fixed;
      top: auto;
      left: 0;
      height: auto;
      width: 100%;
      padding: 0 10px;
      visibility: hidden;
      opacity: 0;
    }
    .mobile-dropdown {
      position: relative;
      padding: 10px 0 10px 15px;
      display: block;
      background: white;
      border-radius: 10px;
      box-shadow: 0px 10px 10px 10px rgba(0, 211, 169, 0.10);
      max-height: 400px;
      overflow-y: scroll;
    }
    .expand {
      visibility: visible;
      opacity: 1;
      .mobile-dropdown {
        visibility: visible;
        opacity: 1;
      }
    }

    .mobile-collapsed {
      display: flex;
      flex-direction: column;
    }
    .mobile-menu-icon {
      display: inline-block;
      position: relative;
      cursor: pointer;
    }
    .mobile-menu-icon.open {
      animation: close-icon 0.3s ease-in;
    }
    @keyframes close-icon {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(180deg); }
    }
    .mobile-nav-item {
      padding: 1px;
      .menu-item {
        font-size: 16px;
        font-weight: 600;
      }
      a:before {
        content: none;
      }
      ul {
        display: list-item;
      }
    }
    .mobile-nav-subitem {
      padding-left: 10px;
    }
  }
  
  .anchor:before {
    content: none;
  }
  .post-block{
    display: flex;
    flex-direction: column;
    align-items: stretch;
    min-height: 300px;
    overflow: hidden;
    margin: 0 auto;
    &:hover{
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
    display: flex;
    justify-content: space-between;
  }

  .post-thumb-block{
    overflow: hidden;
    border-radius: 10px;  
    height: 160px;
    max-width: 100%;
    margin: 0 auto;
    .gatsby-image-wrapper{
        height:100%;
        transition: all 0.3s ease-in;
    }
    img{
        max-width: 240px;
        max-height: 160px;
        width: auto;
        height: inherit;
        display: block;
        text-align: center;
        margin-left: auto;
    }
  }
  .post-content-block{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    border-radius: 0 0 3px 3px;
    position: relative;
    padding: 20px 35px;
  }
  .post-title{
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
    color: black;
    margin-bottom: 20px;
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
